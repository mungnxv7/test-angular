import { Component } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Comment } from '../../types/comments';
import { CommentService } from '../../services/comment.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-comment',
  standalone: true,
  imports: [NgFor],
  templateUrl: './comment.component.html',
  styleUrl: './comment.component.css'
})
export class CommentComponent {
  constructor(private commentService: CommentService, private dataService:DataService){}
  comments:Comment[]=[]
  fetchData(inputData:number){
    this.commentService.get(inputData).subscribe(response =>{
    this.comments = response.comments
    console.log(this.comments);
    
  })
  }
  ngOnInit(): void {
    this.dataService.inputData.subscribe(data => {
      this.fetchData(data)
    });
    
  }  
}
