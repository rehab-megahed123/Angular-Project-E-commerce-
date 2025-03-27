import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { IProduct } from '../../models/iproduct';
import { CommonModule } from '@angular/common';
import { ICategory } from '../../models/icategory';
import { FormsModule } from '@angular/forms';
import { HighlightTagDirective } from '../../directives/highlight-tag.directive';
import { SquarePipe } from '../../pipes/square.pipe';
import { OrderComponent } from '../order/order.component';
import { StaticProductsService } from '../../Services/static-products.service';
import { Route, Router, RouterLink } from '@angular/router';
import { ApiProductsService } from '../../Services/api-products.service';

@Component({
  selector: 'app-products',
  imports: [CommonModule,FormsModule,HighlightTagDirective,SquarePipe,RouterLink],
  templateUrl: './products.component.html',
  styleUrls:['./products.component.css']
})
export class ProductsComponent implements OnChanges,OnInit {
navigateTodetails(id:number) {
  //  this.router.navigateByUrl(`/Details/${id}`)    
   this.router.navigate(['/Details',id])
}
 @Input() receivedCategoryId:number=0
  filterList:IProduct[]
  num:number=4
  products:IProduct[]=[] as IProduct[];
  totalOrderPrice :number;
 //define event 
@Output() onTotalPriceChanged :EventEmitter<number>
  buy(count:string,price:number){
    this.totalOrderPrice += +count*price
    this.onTotalPriceChanged.emit(this.totalOrderPrice)
    

  }
  // filter(){
  //   if(this.receivedCategoryId==0){
  //     this.filterList=this.products
  //   }else{
  //   this.filterList=this.products.filter((product)=>product.catId==this.receivedCategoryId);
  //   }
  // }

  constructor(private _productApiService:ApiProductsService,
    private router:Router
  ){

    
  this.onTotalPriceChanged=new EventEmitter<number>(); 
  this.totalOrderPrice=0;
 //  this. products=this._staticProductService.getAllProducts()
    this.filterList=this.products;
  }
  ngOnInit(): void {
    this._productApiService.getAllProducts().subscribe({
      next:(arr)=>{
        this.products=arr
        this.filterList=arr
      },
      error:()=>{}
    })
  }
  ngOnChanges() {
  // this.filterList= this._staticProductService.getProductByCategoryId(this.receivedCategoryId)
  this._productApiService.getProductByCategoryId(this.receivedCategoryId).subscribe(
    {
      next:(arr)=>{this.filterList=arr},
      error:()=>{}
    }
    
  )
  }
  

}
