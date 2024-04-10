import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Products, ResponseProducts } from '../types/products';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ProductsService {

  constructor(public https:HttpClient) { }

  getProducts(page:number):Observable<ResponseProducts>{
    return this.https.get<ResponseProducts>(`https://dummyjson.com/products?skip=${(page-1)*10}&limit=10`)
  }
}
