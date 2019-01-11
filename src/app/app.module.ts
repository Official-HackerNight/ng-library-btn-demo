import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HnClickerLibModule } from 'hn-clicker-lib';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HnClickerLibModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
