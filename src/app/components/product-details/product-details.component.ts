import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { __param } from 'tslib';
import { StaticProductsService } from '../../Services/static-products.service';
import { IProduct } from '../../models/iproduct';
import { Location } from '@angular/common';


@Component({
  selector: 'app-product-details',
  imports: [],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent implements OnInit {
  
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
  currentId:number=0
  product:IProduct |null = null

  constructor(private _activatedRoute:ActivatedRoute,private _staticProductService:StaticProductsService ,private _locationService :Location,private _routerService :Router){
    this.IdsArray=this._staticProductService.mapProductToIds()
    
  }
  ngOnInit(): void {
  // this.currentId= Number(this._activatedRoute.snapshot.paramMap.get("id"))
  // this.product=this._staticProductService.getProductById(this.currentId)
  this._activatedRoute.paramMap.subscribe(
   param=>{
    this.currentId=Number(param.get("id"))
    this.product=this._staticProductService.getProductById(this.currentId)

   }
  );

   
  }
  IdsArray:number[]=[]
  CurrentIndex:number=0

}
