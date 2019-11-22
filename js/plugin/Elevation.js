var colorMappings = {
    highway: {
        '0': {
            text: 'Other',
            tag: '',
            color: '#e203f5'
        },
        '1': {
            text: 'Residential',
            tag: 'residential',
            color: '#ff0'
        },
        '3': {
            text: 'Minor',
            tag: 'unclassified',
            color: '#fa0'
        },
        '4': {
            text: 'Collector',
            tag: 'tertiary',
            color: '#f70'
        },
        '5': {
            text: 'Path',
            tag: 'path',
            color: '#2196f3'
        },
        '6': {
            text: 'Single Track',
            tag: 'track',
            color: '#795548'
        },
        '7': {
            text: 'Cycleway',
            tag: 'cycleway',
            color: '#304ffe'
        },
        '8': {
            text: 'Footway',
            tag: 'footway',
            color: '#00bcd4'
        },
        '9': {
            text: 'Steps',
            tag: 'steps',
            color: '#00c853'
        },
        '10': {
            text: 'Ferry',
            tag: 'ferry',
            color: '#0af113'
        },
        '11': {
            text: 'Arterial',
            tag: 'secondary',
            color: '#f40'
        },
        '12': {
            text: 'Primary',
            tag: 'primary',
            color: '#f00'
        },
        '13': {
            text: 'Trunk',
            tag: 'trunk',
            color: '#f00'
        },
        '14': {
            text: 'motorway',
            tag: 'Highway',
            color: '#000000'
        },
        '15': {
            text: 'Crossing',
            tag: 'crossing',
            color: '#000000'
        },
        '16': {
            text: 'Sidewalk',
            tag: 'sidewalk',
            color: '#8e6cb5'
        },
        '17': {
            text: 'Pedestrian',
            tag: 'pedestrian',
            color: '#39d43f'
        },
        '2': {
            text: 'Service',
            tag: 'service',
            color: '#fc0'
        },
        '18': {
            text: 'Driveway',
            tag: 'driveway',
            color: '#fc0'
        },
        '19': {
            text: 'Parking aisle',
            tag: 'parking_aisle',
            color: '#fc0'
        }
    },
    cycleway: {
        '0': {
            text: 'Mixed with cars',
            tag: '',
            color: '#ff5722'
        },
        '1': {
            text: 'Separated pathway',
            tag: 'pathway',
            color: '#03a9f4'
        },
        '2': {
            text: 'Separated cycleway',
            tag: 'track',
            color: '#2196f3'
        },
        '3': {
            text: 'Mixed with cars - sharrows',
            tag: 'shared_lane',
            color: '#ff9800'
        },
        '4': {
            text: 'Bike lane',
            tag: 'lane',
            color: '#4caf50'
        },
        '5': {
            text: 'Paved shoulder',
            tag: 'shoulder',
            color: '#cddc39'
        },
        '6': {
            text: 'Shared busway',
            tag: 'share_busway',
            color: '#67b5bd'
        },
        '7': {
            text: 'Crossing',
            tag: 'crossing',
            color: '#000000'
        },
        '8': {
            text: 'Sidewalk',
            tag: 'sidewalk',
            color: '#8e6cb5'
        }
    },
    surface: {
        '0': {
            tag: '',
            text: 'Unknown',
            color: '#f9f8fb'
        },
        '1': {
            tag: 'paved',
            text: 'Paved',
            color: '#373738'
        },
        '2': {
            tag: 'unpaved',
            text: 'Unpaved',
            color: '#795548'
        },
        '3': {
            tag: 'asphalt',
            text: 'Asphalt',
            color: '#272727'
        },
        '4': {
            tag: 'concrete',
            text: 'Concrete',
            color: '#76618c'
        },
        '5': {
            tag: 'cobblestone',
            text: 'Cobblestone',
            color: '#c7b2db'
        },
        '6': {
            tag: 'metal',
            text: 'Metal',
            color: '#5854c7'
        },
        '7': {
            tag: 'wood',
            text: 'Wood',
            color: '#d8e247'
        },
        '8': {
            tag: 'compacted',
            text: 'Compacted Gravel',
            color: '#5885c3'
        },
        '9': {
            tag: 'fine_gravel',
            text: 'Fine Gravel',
            color: '#535f9c'
        },
        '10': {
            tag: 'gravel',
            text: 'Gravel',
            color: '#3e5865'
        },
        '11': {
            tag: 'dirt',
            text: 'Dirt',
            color: '#462b21'
        },
        '12': {
            tag: 'ground',
            text: 'Ground',
            color: '#613c2f'
        },
        '13': {
            tag: 'ice',
            text: 'Ice',
            color: '#acb6ee'
        },
        '14': {
            tag: 'salt',
            text: 'Salt',
            color: '#b6c0f2'
        },
        '15': {
            tag: 'sand',
            text: 'Sand',
            color: '#e6d700'
        },
        '16': {
            tag: 'woodchips',
            text: 'Woodchips',
            color: '#795548'
        },
        '17': {
            tag: 'grass',
            text: 'Grass',
            color: '#325d01'
        },
        '18': {
            tag: 'grass_paver',
            text: 'Grass Paver',
            color: '#0d6f11'
        },
        '19': {
            tag: 'paving_stones',
            text: 'Paving Stones',
            color: '#8e2590'
        }
    },
    width: {
        '0': {
            text: 'Unknown path width',
            tag: '',
            color: '#ffffff'
        },
        '1': {
            text: '0.5 metre wide',
            tag: '0.5',
            color: '#6574c3'
        },
        '2': {
            text: '1 metre wide',
            tag: '1',
            color: '#5063c3'
        },
        '3': {
            text: '1.5 metre wide',
            tag: '1.5',
            color: '#3a51c1'
        },
        '4': {
            text: '2 metre wide',
            tag: '2',
            color: '#1e3ac1'
        },
        '5': {
            text: '2.5 metre wide',
            tag: '2.5',
            color: '#1330bd'
        },
        '6': {
            text: '3 metre wide',
            tag: '3',
            color: '#0725b9'
        },
        '7': {
            text: '4 metre wide',
            tag: '4',
            color: '#061d96'
        },
        '8': {
            text: '5+ metre wide',
            tag: '5',
            color: '#011377'
        },
        '9': {
            text: 'Crossing',
            tag: 'crossing',
            color: '#000000'
        },
        '10': {
            text: '1 car lane',
            tag: 'cars-1lane',
            color: '#ffeb3b'
        },
        '11': {
            text: '2 car lanes',
            tag: 'cars-2lanes',
            color: '#ff9800'
        },
        '12': {
            text: '3+ car lanes',
            tag: 'cars-3lanes',
            color: '#ff5722'
        },
        '13': {
            text: 'Sidewalk',
            tag: 'sidewalk',
            color: '#8e6cb5'
        }
    },
    maxspeed: {
        '0': {
            text: 'Road with unknown speed',
            tag: '',
            color: '#ffffff'
        },
        '1': {
            text: 'No cars',
            tag: 'no_cars',
            color: '#4caf50'
        },
        '2': {
            text: '<20 km/h', //20 and under
            tag: '20',
            color: '#ff0'
        },
        '3': {
            text: '30 km/h',
            tag: '30',
            color: '#ff0'
        },
        '4': {
            text: '40 km/h',
            tag: '40 km/h',
            color: '#fc0'
        },
        '5': {
            text: '50 km/h',
            tag: '50',
            color: '#fa0'
        },
        '6': {
            text: '60 km/h',
            tag: '60',
            color: '#f70'
        },
        '7': {
            text: '70 km/h',
            tag: '70',
            color: '#f40'
        },
        '8': {
            text: '80 km/h',
            tag: '80',
            color: '#f00'
        },
        '9': {
            text: '90 km/h',
            tag: '90',
            color: '#f00'
        },
        '10': {
            text: '100+ km/h',
            tag: '100',
            color: '#f00'
        },
        '11': {
            text: 'Crossing',
            tag: 'crossing',
            color: '#000000'
        },
        '12': {
            text: 'Sidewalk',
            tag: 'sidewalk',
            color: '#8e6cb5'
        }
    },
    lit: {
        '0': {
            text: 'Unknown',
            tag: '',
            color: '#ffffff'
        },
        '1': {
            text: 'Lit',
            tag: 'yes',
            color: '#fbd709'
        },
        '2': {
            text: 'Not lit',
            tag: 'no',
            color: '#484848'
        },
        '3': {
            text: 'Crossing',
            tag: 'crossing',
            color: '#000000'
        }
    },
    winter_service: {
        '0': {
            text: 'Unknown',
            tag: '',
            color: '#ffffff'
        },
        '1': {
            text: 'Plowed pathway',
            tag: 'yes',
            color: '#1f69b7'
        },
        '2': {
            text: 'Non-plowed pathway',
            tag: 'no',
            color: '#f92e0a'
        },
        '3': {
            text: 'Shared with cars',
            tag: 'cars',
            color: '#484848'
        },
        '4': {
            text: 'Sidewalk, so likely yes',
            tag: 'sidewalk',
            color: '#8e6cb5'
        },
        '5': {
            text: 'Crossing',
            tag: 'crossing',
            color: '#000000'
        }
    }
};

function getKeyByValue(object, value) {
    if (!Array.isArray(Object.keys(object))) return null;

    for (let key of Object.keys(object)) {
        if (object[key]['tag'] === value) {
            return key;
        }
    }
    return Object.keys(object)[0]; //return first one - should be "unset" (other)
    //return .find(key => object[key]['tag'] === value);
}

//-- Define radius function
if (typeof Number.prototype.toRad === 'undefined') {
    Number.prototype.toRad = function() {
        return (this * Math.PI) / 180;
    };
}

//-- Define degrees function
if (typeof Number.prototype.toDeg === 'undefined') {
    Number.prototype.toDeg = function() {
        return this * (180 / Math.PI);
    };
}

//-- Define middle point function
function middlePoint(lat1, lng1, lat2, lng2) {
    //-- Longitude difference
    var dLng = (lng2 - lng1).toRad();

    //-- Convert to radians
    lat1 = lat1.toRad();
    lat2 = lat2.toRad();
    lng1 = lng1.toRad();

    var bX = Math.cos(lat2) * Math.cos(dLng);
    var bY = Math.cos(lat2) * Math.sin(dLng);
    var lat3 = Math.atan2(
        Math.sin(lat1) + Math.sin(lat2),
        Math.sqrt((Math.cos(lat1) + bX) * (Math.cos(lat1) + bX) + bY * bY)
    );
    var lng3 = lng1 + Math.atan2(bY, Math.cos(lat1) + bX);

    //-- Return result
    return [lng3.toDeg(), lat3.toDeg()];
}

function getValue(str, tag) {
    if (!str) return '';

    for (let ele of str.split(' ')) {
        const kv = ele.split('=');
        if (kv[0] == tag) {
            return kv[1];
        }
    }
    return '';
}

function getLanes(str) {
    const lanes = getValue(str, 'lanes');
    if (lanes == '') {
        return 1;
    }
    const oneway = getValue(str, 'oneway');
    if (oneway == 'yes') {
        return parseInt(lanes);
    }
    const reverse = getValue(str, 'reversedirection');
    let lanesdir = '';
    if (reverse == 'yes') {
        lanesdir = getValue(str, 'lanes:backward');
    } else {
        lanesdir = getValue(str, 'lanes:forward');
    }
    if (lanesdir == '') {
        const val = parseInt(lanes);
        return val % 2 ? (val + 1) / 2 : val / 2;
    }
    return parseInt(lanesdir);
}

BR.Elevation = L.Control.Heightgraph.extend({
    options: {
        width: $('#map').outerWidth(),
        height: 180,
        margins: {
            top: 20,
            right: 30,
            bottom: 30,
            left: 60
        },
        theme: 'steelblue-theme',
        mappings: colorMappings,
        expand: true,
        xTicks: 10,
        yTicks: 5
    },

    onAdd: function(map) {
        var container = L.Control.Heightgraph.prototype.onAdd.call(this, map);
        /*
        // revert registering touch events when touch screen detection is available and negative
        // see https://github.com/MrMufflon/Leaflet.Elevation/issues/67
        if (L.Browser.touch && BR.Browser.touchScreenDetectable && !BR.Browser.touchScreen) {
            this._background
              //  .on('touchmove.drag', null)
                .on('touchstart.drag', null)
                .on('touchstart.focus', null);
            L.DomEvent.off(this._container, 'touchend', this._dragEndHandler, this);

            this._background
                .on('mousemove.focus', this._mousemoveHandler.bind(this))
                .on('mouseout.focus', this._mouseoutHandler.bind(this))
                .on('mousedown.drag', this._dragStartHandler.bind(this))
                .on('mousemove.drag', this._dragHandler.bind(this));
            L.DomEvent.on(this._container, 'mouseup', this._dragEndHandler, this);
        }
*/
        return container;
    },

    addBelow: function(map) {
        // waiting for https://github.com/MrMufflon/Leaflet.Elevation/pull/66
        // this.width($('#map').outerWidth());
        this.options.width = $('#content').outerWidth();

        if (this.getContainer() != null) {
            this.remove(map);
        }

        function setParent(el, newParent) {
            newParent.appendChild(el);
        }
        this.addTo(map);
        // move elevation graph outside of the map
        setParent(this.getContainer(), document.getElementById('elevation-chart'));
    },

    buildProfile: function(steps, coords, tag, text) {
        const ret = {
            type: 'FeatureCollection',
            features: [],
            properties: {
                summary: tag,
                text: text
            }
        };

        let lastVal = 'dummy',
            curVal = '';
        feature = '';
        let key,
            i = 0,
            totalPoints = 0;

        for (let step of steps) {
            const long = parseInt(step[0]) / 1000000;
            const lat = parseInt(step[1]) / 1000000;
            const alt = parseFloat(step[2]);

            const str = step[9];
            curVal = getValue(str, tag);

            if (tag == 'maxspeed') {
                //tweaks to take into account road type, etc
                let val = getValue(str, 'highway');
                if (['footway', 'path', 'cycleway', 'steps', 'pedestrian'].includes(val)) {
                    curVal = 'no_cars';
                }
                if (val == 'footway') {
                    if (getValue(str, 'footway') == 'crossing') {
                        curVal = 'crossing';
                    }
                    if (getValue(str, 'footway') == 'sidewalk') {
                        curVal = 'sidewalk';
                    }
                }
            }
            if (tag == 'highway') {
                if (curVal == 'footway') {
                    const val = getValue(str, 'footway');
                    if (val == 'crossing') {
                        curVal = 'crossing';
                    }
                    if (val == 'sidewalk') {
                        curVal = 'sidewalk';
                    }
                }
                if (curVal == 'secondary_link') {
                    curVal = 'secondary';
                }
                if (curVal == 'tertiary_link') {
                    curVal = 'tertiary';
                }
                if (curVal == 'primary_link') {
                    curVal = 'primary';
                }
                if (curVal == 'service') {
                    const val = getValue(str, 'service');
                    if (val == 'driveway') {
                        curVal = 'driveway';
                    }
                    if (val == 'parking_aisle') {
                        curVal = 'parking_aisle';
                    }
                }
            }
            if (tag == 'cycleway') {
                if (curVal == '') {
                    curVal = getValue(str, 'cycleway:both');
                }
                if (curVal == '') {
                    const highway = getValue(str, 'highway');
                    if (highway == 'footway' || highway == 'path' || highway == 'pedestrian' || highway == 'steps') {
                        curVal = 'pathway';
                        if (getValue(str, 'footway') == 'crossing') {
                            curVal = 'crossing';
                        }
                        if (getValue(str, 'footway') == 'sidewalk') {
                            curVal = 'sidewalk';
                        }
                    }
                    if (highway == 'cycleway') {
                        curVal = 'track';
                    }
                }
                if (curVal == '') {
                    //if still no value
                    const reverse = getValue(str, 'reversedirection');
                    if (reverse == 'yes') {
                        curVal = getValue(str, 'cycleway:left');
                    } else {
                        curVal = getValue(str, 'cycleway:right');
                    }
                }
                if (curVal == 'opposite_lane') {
                    curVal = 'lane';
                }
                if (curVal == 'no') {
                    curVal = '';
                }
            }
            if (tag == 'surface') {
                //if surface unknown and it's a crossing => asphalt
                if (curVal == '') {
                    let val = getValue(str, 'footway');
                    if (val == 'crossing') {
                        curVal = 'asphalt';
                    } else {
                        val = getValue(str, 'highway');
                        if (val == 'track') {
                            curVal = 'unpaved';
                        }
                    }
                }
            }
            if (tag == 'width') {
                //tweaks to take into account road type, etc
                let val = getValue(str, 'highway');
                if (!['footway', 'path', 'cycleway', 'steps','pedestrian'].includes(val)) {
                    val = getLanes(str);
                    switch (val) {
                        case 1:
                            curVal = 'cars-1lane';
                            break;
                        case 2:
                            curVal = 'cars-2lanes';
                            break;
                        case 3:
                        default:
                            curVal = 'cars-3lanes';
                            break;
                    }
                } else {
                    if (parseFloat(curVal) > 5) {
                        curVal = '5';
                    }
                    /*if(curVal!=''){
                      val = getValue(str, 'oneway');
                      if(val='yes'){
                        curVal = 2*parseFloat(curVal);
                      }
                    }*/
                }
                if (val == 'footway') {
                    val = getValue(str, 'footway');
                    if (val == 'crossing') {
                        curVal = 'crossing';
                    }
                    if (val == 'sidewalk') {
                        curVal = 'sidewalk';
                    }
                }
            }
            if (tag == 'lit') {
                let val = getValue(str, 'highway');
                if (val == 'footway') {
                    val = getValue(str, 'footway');
                    if (val == 'crossing') {
                        curVal = 'crossing';
                    }
                }
            }
            if (tag == 'winter_service') {
                let val = getValue(str, 'highway');
                if (!['footway', 'path', 'cycleway', 'steps','pedestrian'].includes(val)) {
                    curVal = 'cars';
                } else {
                    if (curVal == '') {
                        const surface = getValue(str, 'surface');
                        if (['ground', 'gravel', 'unpaved', 'dirt', 'grass', 'fine_gravel'].includes(surface)) {
                            curVal = 'no';
                        }
                    }
                }
                if (val == 'track') {
                    curVal = 'no';
                }

                if (val == 'footway') {   //override winter_service for sidewalks and crsossings
                    if (getValue(str, 'footway') == 'crossing') {
                        curVal = 'crossing';
                    }
                    if (getValue(str, 'footway') == 'sidewalk') {
                        curVal = 'sidewalk';
                    }
                }
            }
            key = parseInt(getKeyByValue(colorMappings[tag], curVal));

            if (curVal != lastVal) {
                if (feature != '') {
                    //if not the first time
                    ret.features.push(feature);
                }

                const lastPoint =
                    feature == '' ? '' : feature.geometry.coordinates[feature.geometry.coordinates.length - 1];
                feature = {
                    type: 'Feature',
                    geometry: {
                        type: 'LineString',
                        coordinates: []
                    },
                    properties: {
                        attributeType: key,
                        text: colorMappings[tag][key].text,
                        tag: colorMappings[tag][key].tag
                    }
                };
                if (lastPoint != '') {
                    feature.geometry.coordinates.push(lastPoint);
                    //  i--;
                }
            }
            while (i < coords.length) {
                //insert additional nodes (for smoother profile)
                /*if (i > 0) {      //removed because breaks when crossing -90 longitude
                    const mid = middlePoint(coords[i - 1][0], coords[i - 1][1], coords[i][0], coords[i][1]);
                    feature.geometry.coordinates.push([mid[1], mid[0], (coords[i][2] + coords[i - 1][2]) / 2]);
                    totalPoints++;
                }*/
                feature.geometry.coordinates.push([coords[i][0], coords[i][1], coords[i][2]]);
                totalPoints++;
                i++;
                if (coords[i - 1][0] == long && coords[i - 1][1] == lat) break;
            }
            lastVal = curVal;
        }

        ret.features.push(feature);
        ret.properties.records = ret.features.length;

        return ret;
    },
    buildGeojson: function(segments) {
        if(segments.length==0){return []}
        const ret = [];
        let steps = [];
        let coords = [segments[0].feature.geometry.coordinates[0]];
        for (let segment of segments) {
            steps = steps.concat(segment.feature.properties.messages.slice(1));
            coords = coords.concat(segment.feature.geometry.coordinates.slice(1)); //cut off first coords (it's a duplicate)

            steps[steps.length - 1][0] = coords[coords.length - 1][0] * 1000000; //quick fix for last point
            steps[steps.length - 1][1] = coords[coords.length - 1][1] * 1000000;
        }

        ret.push(this.buildProfile(steps, coords, 'highway', 'Way Type'));
        ret.push(this.buildProfile(steps, coords, 'cycleway', 'Cycling Facility'));
        ret.push(this.buildProfile(steps, coords, 'width', 'Width'));
        ret.push(this.buildProfile(steps, coords, 'surface', 'Surface'));
        ret.push(this.buildProfile(steps, coords, 'maxspeed', 'Speed Limit'));
        ret.push(this.buildProfile(steps, coords, 'lit', 'Street Lights'));
        ret.push(this.buildProfile(steps, coords, 'winter_service', 'Snow Plowing'));
        return ret;
    },
    update: function(track, segments) {
        //this.clear();
        
        // bring height indicator to front, because of track casing in BR.Routing
        if (this._mouseHeightFocus) {
            var g = this._mouseHeightFocus[0][0].parentNode;
            g.parentNode.appendChild(g);
        }

        if (track/* && track.getLatLngs().length > 0*/) {
            //this.addData(track.toGeoJSON(), layer);
            const data = this.buildGeojson(segments);
            this.addData(data);
            //  layer.on('mouseout', this._hidePositionMarker.bind(this));
        }
    }
});
