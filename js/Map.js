BR.Map = {
    initMap: function() {
        var map, layersControl;

        BR.keys = BR.keys || {};

        var maxZoom = 19;

        map = new L.Map('map', {
            zoomControl: false, // add it manually so that we can translate it
            worldCopyJump: true,
            minZoom: 6,
            maxZoom: maxZoom,
            contextmenu: true,
            contextmenuWidth: 200,
            contextmenuItems: [
                {
                    text: '<i class="fa fa-external-link"></i> Open in Pathways Editor', //icon: <i class="fa fa-pencil-square-o"></i>
                    callback: openPathways
                },
                {
                    text: '<i class="fa fa-external-link"></i> Open in Roads Editor', //icon: <i class="fa fa-pencil-square-o"></i>
                    callback: openRoads
                },
                {
                    text: '<i class="fa fa-external-link"></i> Open in Winter Routes Editor',
                    callback: openWinter
                },
                {
                    text: '<i class="fa fa-external-link"></i> Open in Desire Lines Editor',
                    callback: openDesire
                },
                '-',
                {
                    text: '<i class="fa fa-external-link"></i> Open in OpenStreetMap',
                    callback: openOSM
                }
            ]
        });

        if (!map.restoreView()) {
            map.setView([45.4, -75.6], 11);
        }

        // two attribution lines by adding two controls, prevents ugly wrapping on
        // small screens, better separates static from layer-specific attribution
        var osmAttribution =
            $(map.getContainer()).outerWidth() >= 400
                ? i18next.t('map.attribution-osm-long')
                : i18next.t('map.attribution-osm-short');
        map.attributionControl.setPrefix(
            '&copy; <a target="_blank" href="https://www.openstreetmap.org/copyright">' +
                osmAttribution +
                '</a>' +
                ' &middot; <a href="" data-toggle="modal" data-target="#credits">' +
                i18next.t('map.copyright') +
                '</a>' +
                ' &middot; <a target="_blank" href="https://brouter.de/privacypolicy.html">' +
                i18next.t('map.privacy') +
                '</a>'
        );

        $('#credits').on('show.bs.modal', function(event) {
            BR.Map._renderLayerCredits(layersControl._layers);
        });

        new L.Control.PermalinkAttribution().addTo(map);
        map.attributionControl.setPrefix(false);

        L.control
            .zoom({
                zoomInTitle: i18next.t('map.zoomInTitle'),
                zoomOutTitle: i18next.t('map.zoomOutTitle'),
                position: 'bottomright'
            })
            .addTo(map);

        var layersConfig = BR.layersConfig(map);
        var baseLayers = layersConfig.getBaseLayers();
        var overlays = layersConfig.getOverlays();

        if (BR.keys.bing) {
            baseLayers[i18next.t('map.layer.bing')] = new BR.BingLayer(BR.keys.bing);
        }

        if (BR.keys.digitalGlobe) {
            var recent = new L.tileLayer(
                'https://{s}.tiles.mapbox.com/v4/digitalglobe.nal0g75k/{z}/{x}/{y}.png?access_token=' +
                    BR.keys.digitalGlobe,
                {
                    minZoom: 1,
                    maxZoom: 19,
                    attribution:
                        '&copy; <a href="https://www.digitalglobe.com/platforms/mapsapi">DigitalGlobe</a> (<a href="https://bit.ly/mapsapiview">Terms of Use</a>)'
                }
            );
            baseLayers[i18next.t('map.layer.digitalglobe')] = recent;
        }

        if (BR.conf.clearBaseLayers) {
            baseLayers = {};
        }
        for (i in BR.conf.baseLayers) {
            if (BR.conf.baseLayers.hasOwnProperty(i)) {
                baseLayers[i] = L.tileLayer(BR.conf.baseLayers[i]);
            }
        }

        for (i in BR.conf.overlays) {
            if (BR.conf.overlays.hasOwnProperty(i)) {
                overlays[i] = L.tileLayer(BR.conf.overlays[i]);
            }
        }

        layersControl = BR.layersTab(layersConfig, baseLayers, overlays).addTo(map);

        var secureContext = 'isSecureContext' in window ? isSecureContext : location.protocol === 'https:';
        if (secureContext) {
            L.control
                .locate({
                    strings: {
                        title: i18next.t('map.locate-me')
                    },
                    icon: 'fa fa-location-arrow',
                    iconLoading: 'fa fa-spinner fa-pulse',
                    position: 'bottomright'
                })
                .addTo(map);
        }

        L.control.scale().addTo(map);

        new BR.Layers().init(map, layersControl, baseLayers, overlays);

        // expose map instance for console debugging
        BR.debug = BR.debug || {};
        BR.debug.map = map;

        return {
            map: map,
            layersControl: layersControl
        };
    },

    _renderLayerCredits: function(layers) {
        var dl = document.getElementById('credits-maps');
        var i, obj, dt, dd, attribution;

        L.DomUtil.empty(dl);

        for (i = 0; i < layers.length; i++) {
            obj = layers[i];
            attribution = obj.layer.options.attribution;

            if (attribution) {
                dt = document.createElement('dt');
                dt.innerHTML = obj.name;
                dd = document.createElement('dd');
                dd.innerHTML = obj.layer.options.attribution;

                dl.appendChild(dt);
                dl.appendChild(dd);
            }
        }
    }
};

function openPathways(e) {
    const url =
        'https://maps.bikeottawa.ca/pathways/?lat=' + e.latlng.lat + '&lng=' + e.latlng.lng + '&zoom=' + this.getZoom();
    window.open(url, '_blank');
}
function openRoads(e) {
    const url =
        'https://maps.bikeottawa.ca/lts-map/?lat=' + e.latlng.lat + '&lng=' + e.latlng.lng + '&zoom=' + this.getZoom();
    window.open(url, '_blank');
}
function openWinter(e) {
    const url =
        'https://maps.bikeottawa.ca/winter/?lat=' + e.latlng.lat + '&lng=' + e.latlng.lng + '&zoom=' + this.getZoom();
    window.open(url, '_blank');
}

function openDesire(e) {
    const url =
        'https://maps.bikeottawa.ca/desire/?lat=' + e.latlng.lat + '&lng=' + e.latlng.lng + '&zoom=' + this.getZoom();
    window.open(url, '_blank');
}

function openOSM(e) {
    const url = 'https://www.openstreetmap.org/#map=' + this.getZoom() + '/' + e.latlng.lat + '/' + e.latlng.lng;
    window.open(url, '_blank');
}
