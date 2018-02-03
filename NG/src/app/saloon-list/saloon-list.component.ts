import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-saloon-list',
  templateUrl: './saloon-list.component.html',
  styleUrls: ['./saloon-list.component.scss']
})
export class SaloonListComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  navigate(saloonId) {
    this.router.navigate(['saloon', saloonId])
  }

}
