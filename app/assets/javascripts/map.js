var Map = {
    _init: function() {
        this.map = new L.Map('map_leaflet');
        this.overlays = [];

        var hull = new L.LatLng(13.8, 77);
        var osmUrl='http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
        var osmAttrib='Map data © openstreetmap contributors';
        var osm = new L.TileLayer(osmUrl,{minZoom:6,maxZoom:18,attribution:osmAttrib});
        this.map.setView(hull,8);
        this.map.addLayer(osm);
    },
    Add: function(index, lat, lun, size, color) {
        color = color ? 'red' : color;
        var circle = L.circle([lat, lun], 1000 * size, {
            color: color,
            fillColor: '#f03',
            fillOpacity: 0.5
        }).addTo(this.map);  
        this.overlays[index] = circle;   
    }
}

$(function(){
    Map._init();
    $('.slider').slider().on('slide', function(evt) {
        var index = evt.value;
            if (this.currentIndex != index) {
            var value = data[keys[index]];
			console.log(value);
			$.each(value, function(key, val){
	           if (value && value != "0") {
	                Map.Add(index, val[0], val[1], val[2]);
	           }				
			});
        }
        this.currentIndex = index;
    });
});