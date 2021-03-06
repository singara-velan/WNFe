import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SaloonDetailComponent } from './saloon-detail/saloon-detail.component';
import { SaloonSearchComponent } from './saloon-search/saloon-search.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: "home", component: HomeComponent },
  { path: "search", component: SaloonSearchComponent },
  { path: "saloon/:id", component: SaloonDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
