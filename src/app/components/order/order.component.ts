import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ICategory } from '../../models/icategory';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from "../products/products.component";
import { StaticProductsService } from '../../Services/static-products.service';

@Component({
  selector: 'app-order',
  imports: [FormsModule, CommonModule, ProductsComponent],
  templateUrl: './order.component.html',
  styleUrl: './order.component.css'
})
export class OrderComponent implements AfterViewInit{
 @ViewChild('Input') myinput!:ElementRef
 @ViewChild(ProductsComponent) productObj!:ProductsComponent
  receivedTotalPrice:number=0
receiveTotalPrice(top:number) {
this.receivedTotalPrice=top
}

 totalOrderPrice :number=0;
   categoryList:ICategory[]
   selectedCategoryId:number=0
   constructor(){
    this.categoryList=[
      {
        id:1,
        name:"MobilePhones",

      },
      {
        id:2,
        name:"Laptop",
        
      },
      {
        id:3,
        name:"Tablet",
        
      }

    ];
   }
  ngAfterViewInit(): void {
    this.myinput.nativeElement.value="Rehab"
    console.log(this.productObj.filterList)
  }
     
}
