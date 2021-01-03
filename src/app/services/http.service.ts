import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Product} from '../models/Product';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) {
  }

  public getProducts(): Array<Product> {
    const result: Array<Product> = [];
    this.http.get<Array<Product>>('http://localhost:8080/product').subscribe(items => {
      items.forEach(product => {
        result.push(product);
      });
    });
    return result;
  }
}
