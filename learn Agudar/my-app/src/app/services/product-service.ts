import { Injectable } from '@angular/core';
import { Product } from '../classes/IProducts';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  products: Product[] = [
    { id: 1, name: 'Laptop', price: 999, image: '' },
    { id: 2, name: 'Smartphone', price: 699, image: '' },
    { id: 3, name: 'Tablet', price: 399, image: '' },
  ];

  constructor() {}

  getProductList() {
    return this.products;
  }
}
