import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  show_login=false;
  show_button=true;
  login_open(){
    this.show_login=true;
    this.show_button=false;
  }
  login_close(){
    this.show_login=false;
    this.show_button=true;
  }

}
