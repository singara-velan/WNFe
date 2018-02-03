import { Component, OnInit } from '@angular/core';

declare var google: any;
let map, infoWindow;
@Component({
  selector: 'app-saloon-search',
  templateUrl: './saloon-search.component.html',
  styleUrls: ['./saloon-search.component.scss']
})
export class SaloonSearchComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.initMap();
  }

initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: { lat: 13.082346, lng: 80.270890 },
    zoom: 14
  });
  infoWindow = new google.maps.InfoWindow;

  // Try HTML5 geolocation.
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function (position) {
      var pos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };

      infoWindow.setPosition(pos);
      infoWindow.setContent('current location found.');
      infoWindow.open(map);
      map.setCenter(pos);
    }, function () {
      this.handleLocationError(true, infoWindow, map.getCenter());
    });
  } else {
    // Browser doesn't support Geolocation
    this.handleLocationError(false, infoWindow, map.getCenter());
  }
}

handleLocationError(browserHasGeolocation, infoWindow, pos) {
  infoWindow.setPosition(pos);
  infoWindow.setContent(browserHasGeolocation ?
    'Error: The Geolocation service failed.' :
    'Error: Your browser doesn\'t support geolocation.');
  infoWindow.open(map);
}

}
