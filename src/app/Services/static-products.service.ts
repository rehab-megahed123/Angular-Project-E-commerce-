import { Injectable } from '@angular/core';
import { IProduct } from '../models/iproduct';

@Injectable({
  providedIn: 'root'
})
export class StaticProductsService {
products:IProduct[]
  constructor() {
    this. products=[
      {
        id:1,
        name:"Iphone11",
        catId:1,
        quantity:1,
        imgUrl:"https://fakeimg.pl/300/",
        price:50000
      },
      {
        id:2,
        name:"Iphone11 pro max",
        catId:1,
        quantity:4,
        imgUrl:"https://fakeimg.pl/300/",
        price:80000
      },
      {
        id:3,
        name:"LapTop",
        catId:2,
        quantity:2,
        imgUrl:"https://fakeimg.pl/300/",
        price:100000
      },
      {
        id:4,
        name:"Taplet",
        catId:3,
        quantity:4,
        imgUrl:"https://fakeimg.pl/300/",
        price:8000
      }
    ]
   }
   addProduct(product:IProduct){
    this.products.push(product)
   }
   getAllProducts():IProduct[]{
       return this.products
   }
   getProductById(id:number):IProduct|null{
    
   var res= this.products.find(a=>a.id==id)
  //  if(res!=null){
  //   return res;
  //  }else{
  //   return null;
  //  }
 return  res? res : null
    
   }
   getProductByCategoryId(catId:number):IProduct[]{
    if(catId==0){
      return this.products
    }else{
      var res=this.products.filter(a=>a.catId==catId);
      return res;
    }
   }
   mapProductToIds():number[]{
   return this.products.map(a=>a.id)
   }
   
}
