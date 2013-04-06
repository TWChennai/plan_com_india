$(function(){
    var data = [];
    $('#map').vectorMap({
      map: 'india_en',
        backgroundColor: '#333333',
        color: '#ffffff',
        hoverOpacity: 0.7,
        selectedColor: '#666666',
        enableZoom: true,
        showTooltip: true,
        values: {"in":"1430.02","zw":"5.57"},
        scaleColors: ['#C8EEFF', '#006491'],
        normalizeFunction: 'polynomial'
    });
});