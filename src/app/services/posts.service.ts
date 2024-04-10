import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Posts, ResponsePosts } from '../types/posts';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  constructor(public https:HttpClient) { }

  get(page:number):Observable<ResponsePosts>{
    return this.https.get<ResponsePosts>(`https://dummyjson.com/posts?skip=${(page-1)*10}&limit=10`)
  }
}
