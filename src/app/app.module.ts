import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {
  HttpClientModule,
  HTTP_INTERCEPTORS,
  HttpClient,
} from '@angular/common/http';
@NgModule({
  declarations: [AppComponent],
  entryComponents: [],

  imports: [FormsModule,BrowserModule, IonicModule.forRoot(), AppRoutingModule,
  HttpClientModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
