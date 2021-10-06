import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../models/category';
import { ListResponseModel } from '../models/listResponseModel';


@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  
  apiUrl = "https://localhost:44369/api/categories/getall"
  constructor(private httpClient:HttpClient ) { }
  

  getCategories():Observable<ListResponseModel<Category>> {
    //gelen datayı productResponseModele Map ediceksin
   return this.httpClient.get<ListResponseModel<Category>>(this.apiUrl);
  }
}

