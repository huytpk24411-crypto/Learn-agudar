import { Component } from '@angular/core';
import { Product } from '../classes/IProducts';

@Component({
  selector: 'app-product-dropdown-list-component',
  standalone: false,
  styleUrl: './product-dropdown-list-component.css',
  templateUrl: './product-dropdown-list-component.html',
})
export class ProductDropdownListComponent {
  products: Product[] = [
      { id: 1, name: 'Iphone 14', price: 3000,image:"https://tse2.mm.bing.net/th/id/OIP.sgNJVRi0g2lNhqmqb0lz9gAAAA?r=0&rs=1&pid=ImgDetMain&o=7&rm=3" },
      { id: 2, name: 'Iphone 14 Pro', price: 4000,image:"https://th.bing.com/th/id/OIP.aGAthWYUEC0C-Y39z-AB9QHaEa?r=0&o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3" },
      { id: 3, name: 'Iphone 14 Pro Max', price: 5000,image:"https://24hstore.vn/upload_images/images/SEO/AUDIT/kich-thuoc-iphone-12/iphone-12-thuong-co-kich-thuoc-bao-nhieu-inch.jpg" },
  
    ];
}
