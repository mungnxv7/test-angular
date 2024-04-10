import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ResponseComment } from '../types/comments';

@Injectable({
  providedIn: 'root'
})
export class CommentService {
  constructor(public https:HttpClient) { }

  get(page:number):Observable<ResponseComment>{
    return this.https.get<ResponseComment>(`https://dummyjson.com/comments?skip=${(page-1)*10}&limit=10`)
  }
}
