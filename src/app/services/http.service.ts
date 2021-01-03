import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
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

  public save(name): void {
    // const myHeaders = new HttpHeaders().set('Authorization', 'my-auth-token');
    const body = {text: name};
    this.http.post<any>('http://localhost:8080/product', body).subscribe(res => {
      console.log(res);
    });
  }
}
