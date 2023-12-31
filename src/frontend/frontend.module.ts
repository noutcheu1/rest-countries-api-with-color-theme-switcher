import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FrontendComponent } from './frontend.component';
import { NavComponent } from './nav/nav.component';
import { CardFlagComponent } from './card-flag/card-flag.component';
import { CardDescriptionComponent } from './card-description/card-description.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { FrontendRoutingModule } from './frontend-routing.module';
import { RangePipe } from './card-flag/range.pipe';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    FrontendComponent,
    NavComponent,
    CardFlagComponent,
    CardDescriptionComponent,
    RangePipe
  ],
  imports: [
    CommonModule,
    FrontendRoutingModule,
    AppRoutingModule,
    FormsModule
  ],
  exports: [FrontendComponent],
  providers: []
})
export class FrontendModule { }
