import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FrontendModule } from 'src/frontend/frontend.module';
import { FrontendComponent } from 'src/frontend/frontend.component';
@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    FrontendModule,
  ],
  providers: [],
  bootstrap: [AppComponent, FrontendComponent]
})
export class AppModule { }
