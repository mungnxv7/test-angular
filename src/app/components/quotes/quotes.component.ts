import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { DataService } from '../../services/data.service';
import { QuotesService } from '../../services/quotes.service';
import { Quotes } from '../../types/quotes';

@Component({
  selector: 'app-quotes',
  standalone: true,
  imports: [NgFor],
  templateUrl: './quotes.component.html',
  styleUrl: './quotes.component.css'
})
export class QuotesComponent {
  constructor(private quotesService: QuotesService, private dataService:DataService){}
  quotes:Quotes[]=[]
  fetchData(inputData:number){
    this.quotesService.get(inputData).subscribe(response =>{
    this.quotes = response.quotes
    console.log(this.quotes);
    
  })
  }
  ngOnInit(): void {
    this.dataService.inputData.subscribe(data => {
      this.fetchData(data)
    });
    
  }  
}
