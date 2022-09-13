import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  
  baseUrl = "https://localhost:5001/api/Customers";

  
  constructor(private http: HttpClient) { }

  loginCustomer(customerCredential:any) : Observable<any>{
    return this.http.post<any>(this.baseUrl + "/login", customerCredential )
  }

  getCustomerById(id:any){
    return this.http.get<any>(this.baseUrl + "/Customer/" + id )
  }

  updateCustById(Id:any, custDetail:any):Observable<any>{
    console.table(custDetail)
    return this.http.put<any>(this.baseUrl + "/Customer/" + Id, custDetail);
  }


  registerCustomer(customerDetail: any) : Observable<any> {
    console.log(customerDetail)
    return this.http.post<any>(this.baseUrl, customerDetail )
  }

  customerToken(id: any) {
    sessionStorage.setItem("Customertoken", id);
  }

  gettCustomerToken(){
    return sessionStorage.getItem("Customertoken");
  }

}
