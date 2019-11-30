L.StopMarkers = L.LayerGroup.extend({
    initialize: function(stops, map) {

        var showAll = Math.min(map.getMaxZoom(), 12);
        var cssClass = '';//'dist-marker';
        //var iconSize = [16, 16];
        var stopIcon = L.divIcon({ className: cssClass, html: '<img src="images/stop-color.svg" style="height:16px">', iconAnchor:[8,8]});
        var lightIcon = L.divIcon({ className: cssClass, html: '<img src="images/traffic-light-color.svg" style="height:16px">', iconAnchor:[6,8] });


        var zoomLayers = {};
        var j = 0;

        for (let stop of stops) {
            j++;
            var marker = L.marker({lat:stop.lat,lng:stop.lng}, { title: stop.type=='light'?'Traffic Light':'Stop', icon: stop.type=='light'?lightIcon:stopIcon });

            // visible only starting at a specific zoom level
            var zoom = this._minimumZoomLevelForItem(j, showAll);
            if (zoomLayers[zoom] === undefined) {
                zoomLayers[zoom] = L.layerGroup();
            }
            zoomLayers[zoom].addLayer(marker);
        }

        var currentZoomLevel = 0;
        var markerLayer = this;
        var updateMarkerVisibility = function() {
            var oldZoom = currentZoomLevel;
            var newZoom = (currentZoomLevel = map.getZoom());

            if (newZoom > oldZoom) {
                for (var i = oldZoom + 1; i <= newZoom; ++i) {
                    if (zoomLayers[i] !== undefined) {
                        markerLayer.addLayer(zoomLayers[i]);
                    }
                }
            } else if (newZoom < oldZoom) {
                for (var i = oldZoom; i > newZoom; --i) {
                    if (zoomLayers[i] !== undefined) {
                        markerLayer.removeLayer(zoomLayers[i]);
                    }
                }
            }
        };
        map.on('zoomend', updateMarkerVisibility);

        this._zoomLayers = zoomLayers;
        this._layers = {}; // need to initialize before adding markers to this LayerGroup
        updateMarkerVisibility();
    },

    setOpacity: function(opacity) {
        var i,
            keys = Object.keys(this._zoomLayers),
            l = keys.length;

        for (i = 0; i < l; ++i) {
            var zoomLayer = this._zoomLayers[keys[i]];
            zoomLayer.eachLayer(function(layer) {
                layer.setOpacity(opacity);
            });
        }
    },

    _minimumZoomLevelForItem: function(item, showAllLevel) {
        var zoom = showAllLevel,
            i = item;
        while (i > 0 && i % 2 === 0) {
            --zoom;
            i = Math.floor(i / 2);
        }
        return zoom;
    }
});
