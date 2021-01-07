import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { ProductsComponent } from './products/products.component';
import { ProductFormComponent } from './product-form/product-form.component';
import {FormsModule} from '@angular/forms';
import { ProductRowComponent } from './product-row/product-row.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    ProductFormComponent,
    ProductRowComponent
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
