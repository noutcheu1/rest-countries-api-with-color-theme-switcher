import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { Routes } from '@angular/router';
import { CardFlagComponent } from './card-flag/card-flag.component';
import { CardDescriptionComponent } from './card-description/card-description.component';


const routes: Routes = [
  { path: 'home', component: CardFlagComponent },
  { path: 'detail', component: CardDescriptionComponent },
  {path: '', redirectTo: '/home', pathMatch: 'full'},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class FrontendRoutingModule { }
