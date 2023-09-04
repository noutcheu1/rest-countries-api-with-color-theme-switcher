import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FrontendComponent } from './frontend.component';
import { NavComponent } from './nav/nav.component';
import { CardFlagComponent } from './card-flag/card-flag.component';
import { CardDescriptionComponent } from './card-description/card-description.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { FrontendRoutingModule } from './frontend-routing.module';


@NgModule({
  declarations: [
    FrontendComponent,
    NavComponent,
    CardFlagComponent,
    CardDescriptionComponent
  ],
  imports: [
    CommonModule,
    FrontendRoutingModule,
    AppRoutingModule
  ],
  exports: [FrontendComponent],
  providers: []
})
export class FrontendModule { }
