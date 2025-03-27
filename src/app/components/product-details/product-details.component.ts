import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { __param } from 'tslib';
import { StaticProductsService } from '../../Services/static-products.service';
import { IProduct } from '../../models/iproduct';
import { Location } from '@angular/common';
import { ApiProductsService } from '../../Services/api-products.service';


@Component({
  selector: 'app-product-details',
  imports: [],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent implements OnInit {
  currentId:number=0;
  product:IProduct |null = null
  IdsArray:number[]=[]
  CurrentIndex:number=0
  constructor(private _activatedRoute:ActivatedRoute,private _apiProductService:ApiProductsService,private _locationService :Location,private _routerService :Router,private _staticProductService:StaticProductsService){
      this.IdsArray=this._staticProductService.mapProductToIds()
      
    }
  
    Previous() {
      this.CurrentIndex= this.IdsArray.findIndex(a=>a==this.currentId)
     
     if(this.CurrentIndex!==0){
     this._routerService.navigate(['/Details',this._staticProductService.products[this.CurrentIndex-1].id])
     }
    
    }
    Next() {
 
      this.CurrentIndex= this.IdsArray.findIndex(a=>a==this.currentId)
     if(this.CurrentIndex!==this.IdsArray.length-1)
    {
     this._routerService.navigate(['/Details',this._staticProductService.products[this.CurrentIndex+1].id])
    }
 

}
Back() {
  this._locationService.back() 
}
  
  

 
  ngOnInit(): void {
   //this.currentId= Number(this._activatedRoute.snapshot.paramMap.get("id"))
   
  // this.product=this._staticProductService.getProductById(this.currentId)
  this._activatedRoute.paramMap.subscribe(
   param=>{
    this.currentId=Number(param.get("id"))
   // this.product=this._staticProductService.getProductById(this.currentId)
    this._apiProductService.getProductById(this.currentId).subscribe({
      next:(product)=>{
        console.log(product)
        this.product=product},
      error:(err)=>{console.log(err)}
    })
   }
  );

   
  }
 
}
