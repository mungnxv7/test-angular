import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { Products } from '../../types/products';
import { ProductsService } from '../../services/products.service';
import { ProductsItemComponent } from '../products-item/products-item.component';
import { NgFor } from '@angular/common';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [ProductsItemComponent ,NgFor],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  constructor(private productService: ProductsService, private dataService:DataService){}
  products:Products[]=[]
  fetchData(inputData:number){
    this.productService.getProducts(inputData).subscribe(response =>{
    this.products = response.products
  })
  }
  ngOnInit(): void {
    this.dataService.inputData.subscribe(data => {
      this.fetchData(data)
    });
    
  }  
 
}
