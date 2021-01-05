import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {HttpService} from '../services/http.service';
import {Product} from '../models/Product';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit, OnChanges {
  @Output() product: EventEmitter<Product> = new EventEmitter<Product>();
  @Input() updatedProduct: Product;
  newProduct: Product = new Product(undefined, '');
  constructor(private http: HttpService) {
  }

  ngOnInit(): void {
  }

  public save(): void {
    if (this.newProduct.name) {
      this.product.emit(this.http.save(this.newProduct));
      this.newProduct.id = undefined;
      this.newProduct.name = '';
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.updatedProduct) {
      this.newProduct = changes.updatedProduct.currentValue;
    }
  }
}
