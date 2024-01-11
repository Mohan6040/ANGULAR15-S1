import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class CustomersService {

  url='http://localhost:3000/customers'
  constructor(private http:HttpClient) { }
  getAllCustomers(){
    return this.http.get(this.url);
  }
  saveCustomerData(data: any){
    console.log(data);
    return this.http.post(this.url, data);
  }
  deleteCustomer(id:any){

    return this.http.delete(`${this.url}/${id}`)
  }
  getCustomerById(id:any){
    return this.http.get(`${this.url}/${id}`);

  }
  updateCustomerData(id:any,data:any){
    return this.http.put(`${this.url}/${id}`,data);

  }
}
