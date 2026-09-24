import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class CatalogService {
      // Sample prices in VND for the catalog exercise.
      datas=[ 
    {"Cateid":"cate1","CateName":"Ô tô hạng sang", 
      "Products":[ 
        {"ProductId":"p1","ProductName":"Lexus NX","Price":3500000000,
"Image":"assets/OIP.jpg"},
        {"ProductId":"p2","ProductName":"BMW 5 Series","Price":3000000000,
"Image":"assets/OIP (1).jpg"},
        {"ProductId":"p3","ProductName":"Audi e-tron GT","Price":5500000000,
      "Image":"assets/2025-audi-etron-gt-11.jpg"},
      ] 
    }, 
    {"Cateid":"cate2","CateName":"Ô tô thể thao và siêu sang", 
      "Products":[ 
        {"ProductId":"p4","ProductName":"Porsche 911","Price":8500000000,
"Image":"assets/OIP (2).jpg"},
        {"ProductId":"p5","ProductName":"Rolls-Royce Phantom","Price":46000000000,
"Image":"assets/5rollsroycephanto-image.jpeg"},
        {"ProductId":"p6","ProductName":"Mercedes-Maybach S 680","Price":16000000000,
"Image":"assets/2022-mercedes-maybach-s680.jpg"},
      ] 
    },
    ] 
   
  constructor() { } 
  getCategories() 
  { 
    return this.datas     
  } 
}
