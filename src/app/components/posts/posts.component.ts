import { Component } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Posts } from '../../types/posts';
import { PostsService } from '../../services/posts.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-posts',
  standalone: true,
  imports: [NgFor],
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.css'
})
export class PostsComponent {
  constructor(private postService: PostsService, private dataService:DataService){}
  posts:Posts[]=[]
  fetchData(inputData:number){
    this.postService.get(inputData).subscribe(response =>{
    this.posts = response.posts
    console.log(this.posts);
    
  })
  }
  ngOnInit(): void {
    this.dataService.inputData.subscribe(data => {
      this.fetchData(data)
    });
    
  }  
 
}
