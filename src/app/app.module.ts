import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { TransportFormComponent } from './transport-form/transport-form.component';
import { FormsHeadComponent } from './forms-head/forms-head.component';

@NgModule({
  declarations: [
    AppComponent,
    TransportFormComponent,
    FormsHeadComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
