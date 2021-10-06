import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Product } from '../models/product';
import { ResponeseModel } from '../models/responseModel';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  
  apiUrl = "https://localhost:44369/api/"
  constructor(private httpClient:HttpClient ) { }
  

  getProducts():Observable<ListResponseModel<Product>> {
    let newPath= this.apiUrl + "products/getall"
    //gelen datayı productResponseModele Map ediceksin
   return this.httpClient.get<ListResponseModel<Product>>(newPath);
  }
  getProductsByCategory(categoryId:number):Observable<ListResponseModel<Product>> {
    let newPath= this.apiUrl + "products/getbycategory?categoryId="+categoryId
    //gelen datayı productResponseModele Map ediceksin
   return this.httpClient.get<ListResponseModel<Product>>(newPath);
  }
  add(product:Product):Observable<ResponeseModel> {
    return this.httpClient.post<ResponeseModel>(this.apiUrl+"products/add",product)
  }
}

