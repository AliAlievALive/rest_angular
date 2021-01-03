import {Component, OnInit} from '@angular/core';
import {HttpService} from '../services/http.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  public products;

  constructor(private http: HttpService) {
    this.products = this.http.getProducts();
  }

  ngOnInit(): void {
  }
}
