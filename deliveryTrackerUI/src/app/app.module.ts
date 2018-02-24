import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';


import {AppComponent} from './app.component';
import {DeliveryService} from './delivery.service';
import {DeliveryComponent} from './delivery/delivery.component';
import {MessageService} from './message.service';
import {ShiftComponent} from './shift/shift.component';
import {MessagesComponent} from './messages/messages.component';


@NgModule({
  declarations: [
    AppComponent,
    DeliveryComponent,
    ShiftComponent,
    MessagesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [DeliveryService, MessageService],
  bootstrap: [AppComponent]
})
export class AppModule {}
