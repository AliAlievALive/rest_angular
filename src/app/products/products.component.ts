import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {Product} from '../models/Product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit, OnChanges {
  @Input() products;
  @Output() editedProduct: EventEmitter<Product> = new EventEmitter<Product>();

  constructor() {
  }

  ngOnInit(): void {
  }

  edit(product: Product): void {
    this.editedProduct.emit(product);
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }
}
