var Map = {
    _init: function() {
        this.map = new L.Map('map_leaflet');
        this.overlays = [];
        this.markers = new L.MarkerClusterGroup();

        var hull = new L.LatLng(13.8, 77);
        var osmUrl='http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
        var osmAttrib='Map data © openstreetmap contributors';
        var osm = new L.TileLayer(osmUrl,{minZoom:6,maxZoom:18,attribution:osmAttrib});

        this.map.setView(hull,8);
        this.map.addLayer(osm);
        this.map.addLayer(this.markers);
    },
    Add: function(lat, lng, victims) {
        var marker = new L.Marker(new L.LatLng(lat, lng), { title: victims, singleMarkerMode : false });
        this.markers.bindPopup(victims);
        this.markers.addLayer(marker);
    }
}

$(function(){
    Map._init();
    $('.slider').slider().on('slide', function(evt) {
        var index = evt.value;
        if (this.currentIndex != index) {
          var key = keys[index];
            if (key) {
              $("#date").html("As of " + key);
              var value = data[key];
        		  $.each(value, function(key, val){
                if (value && value != "0") {
                  var victims = val[2] ? val[2] : 1;
                  Map.Add(val[0], val[1], victims);
               }
      		});
        }
        this.currentIndex = index;
      }
    });
});