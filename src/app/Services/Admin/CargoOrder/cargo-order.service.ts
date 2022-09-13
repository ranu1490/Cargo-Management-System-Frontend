import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CargoOrderService {
  
  baseUrl = "https://localhost:5001/api/CargoOrderDetails";

  constructor(private http: HttpClient) { }

  getAllCargoOrder():Observable<any>{
    return this.http.get<any>(this.baseUrl + "/GetOrderList");
  }

  BookCargoOrder(employeeId: any, CargoId: any) {
    return this.http.post<any>(this.baseUrl + "/CargoOrder", {custId:employeeId, cargoId:CargoId});
  }

}
