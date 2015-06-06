(function() {
  "use strict";
  var citymap = {};
  citymap['chicago'] = {
    center: new google.maps.LatLng(41.878113, -87.629798),
    tweetTotal: 2714856
  };
  citymap['newyork'] = {
    center: new google.maps.LatLng(40.714352, -74.005973),
    tweetTotal: 8405837
  };
  citymap['losangeles'] = {
    center: new google.maps.LatLng(34.052234, -118.243684),
    tweetTotal: 3857799
  };
  citymap['vancouver'] = {
    center: new google.maps.LatLng(49.25, -123.1),
    tweetTotal: 603502
  };

  var cityCircle;

  function initialize() {
    // Create the map.
    var mapOptions = {
      zoom: 12,
      center: citymap['newyork'].center,//new google.maps.LatLng(37.09024, -95.712891),
      mapTypeId: google.maps.MapTypeId.TERRAIN,
      streetViewControl: false,
      styles: [
  {
    "featureType": "landscape.natural",
    "elementType": "geometry.fill",
    "stylers": [
      { "visibility": "on" },
      { "lightness": -100 }
    ]
  },{
    "featureType": "landscape.man_made",
    "stylers": [
      { "visibility": "off" }
    ]
  },{
    "featureType": "administrative",
    "stylers": [
      { "visibility": "off" }
    ]
  },{
    "featureType": "poi",
    "stylers": [
      { "visibility": "off" }
    ]
  },{
    "featureType": "road",
    "stylers": [
      { "visibility": "off" }
    ]
  },{
    "featureType": "transit",
    "stylers": [
      { "visibility": "off" }
    ]
  },{
    "featureType": "water",
    "elementType": "labels",
    "stylers": [
      { "visibility": "off" }
    ]
  },{
    "featureType": "water",
    "elementType": "geometry",
    "stylers": [
      { "visibility": "on" },
      { "color": "#ffffff" }
    ]
  },{
    "featureType": "landscape",
    "elementType": "labels",
    "stylers": [
      { "visibility": "off" }
    ]
  }
]

    };

    var map = new google.maps.Map(document.getElementById('map-canvas'),
        mapOptions);

    // Construct the circle for each value in citymap.
    // Note: We scale the area of the circle based on the tweetTotal.
    for (var city in citymap) {
      var populationOptions = {
        strokeColor: '#FF0000',
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: '#FF0000',
        fillOpacity: 0.7,
        map: map,
        center: citymap[city].center,
        radius: Math.sqrt(citymap[city].tweetTotal)
      };
      // Add the circle for this city to the map.
      cityCircle = new google.maps.Circle(populationOptions);
    }
  }

  google.maps.event.addDomListener(window, 'load', initialize);
}());
