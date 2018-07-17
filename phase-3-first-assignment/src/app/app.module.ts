
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ApRoutingModule } from './/ap-routing.module';
import { headersToString } from '../../node_modules/@types/selenium-webdriver/http';

@NgModule({
  declarations: [
    AppComponent,
  
  ],
  imports: [
    BrowserModule,
    ApRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
