import { Routes } from "@angular/router";
import { PassengerEditComponent } from "./features/passenger-edit/passenger-edit.component";
import { PassengerSearchComponent } from "./features/passenger-search/passenger-search.component";


export const PASSENGER_ROUTES: Routes = [
  {
    path: '',
    providers: [
    ],
    children: [
      {
        path: '',
        redirectTo: 'search',
        pathMatch: 'full'
      },
      {
        path: 'search',
        component: PassengerSearchComponent,
      },
      {
        path: 'edit/:id',
        component: PassengerEditComponent
      }
    ]
  }

];

export default PASSENGER_ROUTES;
