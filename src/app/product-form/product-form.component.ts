import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {Product} from '../models/Product';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit, OnChanges {
  @Input() products: Array<Product>;
  @Input() editedProduct: Product;
  newProduct: Product = {name: ''} as Product;

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
  }

  public save(): void {
    if (this.newProduct.id) {
      this.http.put(`http://localhost:8080/product/${this.newProduct.id}`, {name: this.newProduct.name}).subscribe(data => {
      });
    } else {
      this.http.post<Product>('http://localhost:8080/product', this.newProduct).subscribe(data => {
        this.products.push(data);
      });
    }
    this.newProduct = {id: undefined, name: ''};
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.editedProduct.currentValue) {
      this.newProduct = changes.editedProduct.currentValue;
    }
  }
}
