import { Component, Input } from '@angular/core';
import { Products } from '../../types/products';

@Component({
  selector: 'app-products-item',
  standalone: true,
  imports: [],
  templateUrl: './products-item.component.html',
  styleUrl: './products-item.component.css'
})
export class ProductsItemComponent {
@Input() product: Products |null = null
}
