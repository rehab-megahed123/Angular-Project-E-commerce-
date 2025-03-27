import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from '../models/iproduct';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ApiProductsService {
  getAllProducts():Observable<IProduct[]>{
    return this._httpClientService.get<IProduct[]>(`${environment.baseUrl}/products`)
  }
  getProductById(id:number):Observable<IProduct>{
    return this._httpClientService.get<IProduct>(`${environment.baseUrl}/products/${id}`)
      
  }
getProductByCategoryId(catId:number):Observable<IProduct[]>{
  
     return this._httpClientService.get<IProduct[]>(`${environment.baseUrl}/products?catId=${catId}`)
}
addProduct( product:IProduct){
  
}
deleteProduct(){

}
  constructor(private _httpClientService:HttpClient) { }
}
