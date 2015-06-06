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
      center: citymap['newyork'].center,
      mapTypeId: google.maps.MapTypeId.TERRAIN,
      streetViewControl: false,
      styles: [
        {
          "featureType": "landscape.natural",
          "elementType": "geometry.fill",
          "stylers": [
            { "visibility": "on" },
            { "color": "#a5a5a" }
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
          "featureType": "road.highway",
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
            { "color": "#a5a5a5" }
          ]
        },{
          "featureType": "landscape",
          "elementType": "labels",
          "stylers": [
            { "visibility": "off" }
          ]
        },{
          "featureType": "road",
          "elementType": "labels",
          "stylers": [
            { "visibility": "off" }
          ]
        },{
          "featureType": "road",
          "stylers": [
            { "saturation": 12 },
            { "gamma": 0.98 }
          ]
        },{
          "featureType": "road",
          "elementType": "geometry",
          "stylers": [
            { "color": "#d2d2d2" }
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
        strokeWeight: 0,
        fillColor: '#f27d0c',
        fillOpacity: 1,
        map: map,
        center: citymap[city].center,
        radius: 100
      };
      // Add the circle for this city to the map.
      cityCircle = new google.maps.Circle(populationOptions);
    }
  }

  google.maps.event.addDomListener(window, 'load', initialize);
}());
