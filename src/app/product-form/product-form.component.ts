import { Component, OnInit } from '@angular/core';
import {HttpService} from '../services/http.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  name = '';
  constructor(private http: HttpService) { }

  ngOnInit(): void {
  }

  public save(): void {
    this.http.save(this.name);
  }
}
