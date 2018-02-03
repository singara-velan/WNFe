import { Component, OnInit } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    $('#imageGallery').lightSlider({
      gallery: true,
      autoWidth: true,
      item: 1,
      loop: true,
      thumbItem: 9,
      slideMargin: 0,
      enableDrag: false,
      currentPagerPosition: 'left',
      onSliderLoad: function (el) {
        // el.lightGallery({
        //     selector: '#imageGallery .lslide'
        // });
      }
    });
  }


}
