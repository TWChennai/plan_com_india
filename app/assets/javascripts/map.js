$(function(){
    var map;
    var hull = new L.LatLng(13.0810, 80.2740);
    function initmap() {
        map = new L.Map('map_leaflet');
        var osmUrl='http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
        var osmAttrib='Map data © openstreetmap contributors';
        var osm = new L.TileLayer(osmUrl,{minZoom:8,maxZoom:18,attribution:osmAttrib});

        map.setView(hull,11);
        map.addLayer(osm);
    }
    initmap();

    var circle = L.circle([13, 80], 5000, {
        color: 'red',
        fillColor: '#f03',
        fillOpacity: 0.5
    }).addTo(map);
});