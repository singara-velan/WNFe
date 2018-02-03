import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SaloonListComponent } from './saloon-list/saloon-list.component';
import { SaloonDetailComponent } from './saloon-detail/saloon-detail.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HeaderComponent } from './shared/header/header.component';
import { SaloonSearchComponent } from './saloon-search/saloon-search.component';
import { SliderComponent } from './shared/slider/slider.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SaloonListComponent,
    SaloonDetailComponent,
    FooterComponent,
    HeaderComponent,
    SaloonSearchComponent,
    SliderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
