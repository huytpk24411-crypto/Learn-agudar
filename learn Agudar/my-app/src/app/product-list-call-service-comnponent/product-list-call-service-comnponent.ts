import { Component } from '@angular/core';
import { Product } from '../classes/IProducts';
import { ProductService } from '../services/product-service';

@Component({
  selector: 'app-product-list-call-service-component',
  standalone: false,
  styleUrl: './product-list-call-service-comnponent.css',
  templateUrl: './product-list-call-service-comnponent.html',
})
export class ProductListCallServiceComnponent {
  minPrice: number | null = null;
  maxPrice: number | null = null;
  products: Product[] = []
  constructor(private ps: ProductService) {
    this.products = this.ps.getProductList();
  }
  doFilterByPrice(): void {
    this.products = this.ps.getProductList().filter(product =>
      (this.minPrice === null || product.price >= this.minPrice) &&
      (this.maxPrice === null || product.price <= this.maxPrice)
    );
  }
}
