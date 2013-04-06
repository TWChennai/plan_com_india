$(function(){
    $('#map').vectorMap({
      map: 'in_mill_en',
      regionStyle: {
        initial: {
          fill: 'grey'
        }
      },
      backgroundColor: '#ffffff',
      markerStyle: {
        initial: {
            fill: '#F8E23B',
            stroke: '#383f47'
        }
      },
    });
});