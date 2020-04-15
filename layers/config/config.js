BR.confLayers = {};

BR.confLayers.defaultBaseLayers = [
    '1065', //hike & bike
    'Esri.WorldImagery',
    'cyclosm',
    'standard',
    '1059' //public transit
];

// worldwide monolingual layers to add as default when browser language matches
BR.confLayers.languageDefaultLayers = [
    'osm-mapnik-german_style',
    'cyclosm',
    '1021' // sputnik.ru
];

BR.confLayers.defaultOverlays = [
    'Strava_Cycling_Heatmap',
    'HikeBike.HillShading',
    'Waymarked_Trails-Cycling',
    //'Waymarked_Trails-Hiking',
    'mapillary-coverage-raster'
];

BR.confLayers.legacyNameToIdMap = {
    'OpenStreetMap': 'standard',
    'OpenStreetMap.de': 'osm-mapnik-german_style',
    'OpenTopoMap': 'OpenTopoMap',
    'Esri Satellite Imagery': 'Esri.WorldImagery',
    'Cycling (Waymarked Trails)': 'Waymarked_Trails-Cycling',
    'Hiking (Waymarked Trails)': 'Waymarked_Trails-Hiking'
};

BR.confLayers.leafletProvidersIncludeList = [
    'Stamen.Terrain',
    'MtbMap',
    'OpenStreetMap.CH',
    'HikeBike.HillShading',
    'Esri.WorldImagery'
];