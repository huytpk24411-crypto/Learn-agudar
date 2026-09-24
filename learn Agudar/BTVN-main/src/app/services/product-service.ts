import { Injectable } from '@angular/core';
@Injectable()
export class ProductService { 
  productsImage=[ 
    // Sample prices in VND for the product exercise.
    {"ProductId":"p1","ProductName":"iPhone 17 256GB","Price":24990000,"Image":"/assets/Apple-iPhone-17-hero-250909_inline.jpg.large_2x.jpg"},
    {"ProductId":"p2","ProductName":"iPhone 17 Pro 256GB","Price":34990000,"Image":"/assets/Apple-iPhone-17-Pro-color-lineup-250909_inline.jpg.large_2x.jpg"},
    {"ProductId":"p3","ProductName":"iPhone 17 Pro Max 256GB","Price":37990000,"Image":"/assets/Apple-iPhone-17-Pro-color-lineup-250909_inline.jpg.large_2x.jpg"},
  ] 
  constructor() { } 
  getProductsWithImages() 
  { 
    return this.productsImage 
  } 
  getProductDetail(id:any){ 
    
    return this.productsImage.find(x=>x.ProductId==id) 
  } 
} 
