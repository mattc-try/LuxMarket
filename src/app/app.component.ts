import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from './product.service';
import { Product } from './product';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  products: Product[];

  constructor(private productService: ProductService) {
    this.products = this.productService.getProducts();
  }
}