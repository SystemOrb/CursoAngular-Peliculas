/*
Routes
*/
import { RouterModule, Routes } from '@angular/router';
import { DetailsComponent } from './components/details/details.component';
import {ExplorerComponent} from './components/explorer/explorer.component';
import { HomeComponent } from './components/home/home.component';
const APP_ROUTES: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'explorer', component: ExplorerComponent },
  { path: 'details/:id', component: DetailsComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES,{useHash:true});
