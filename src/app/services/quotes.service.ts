import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ResponseQuotes } from '../types/quotes';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class QuotesService {

  constructor(public https:HttpClient) { }

  get(page:number):Observable<ResponseQuotes>{
    return this.https.get<ResponseQuotes>(`https://dummyjson.com/quotes?skip=${(page-1)*10}&limit=10`)
  }
}
