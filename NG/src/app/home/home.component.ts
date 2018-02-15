import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  show_button = false;
  constructor() { }

  ngOnInit() {
  }

  menuToggle() {
    this.show_button = !this.show_button;
  }
}
