import { Component, OnInit } from '@angular/core';

declare var google: any;
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
    var uluru = { lat: -25.363, lng: 131.044 };
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 4,
      center: uluru
    });
    var marker = new google.maps.Marker({
      position: uluru,
      map: map
    });
  }

}
