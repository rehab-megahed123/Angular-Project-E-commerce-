import { Component } from '@angular/core';
import { IProduct } from '../../models/iproduct';
import { FormsModule } from '@angular/forms';
import { StaticProductsService } from '../../Services/static-products.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-add-product',
  imports: [FormsModule,RouterLink],
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.css'
})
export class AddProductComponent {
  constructor(private _ProductService:StaticProductsService){
    this._ProductService.addProduct(this.newproduct);
  }
  
  newproduct: IProduct={} as IProduct
  Submit() {
    console.log('Product Added:', this.newproduct);
    
  }

}
