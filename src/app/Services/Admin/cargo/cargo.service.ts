import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CargoService {
  baseUrl = "https://localhost:5001/api/Cargoes";

  constructor(private http: HttpClient) { }

  getAllCargo():Observable<any>{
    return this.http.get<any>(this.baseUrl);
  }

  deleteCargoById(Id:string):Observable<any>{
    // var token = sessionStorage.getItem("token");
    return this.http.delete<any>(this.baseUrl + "/" + Id);
  }
  
  updateCargoById(Id:string, cargoDetail:any):Observable<any>{
    console.table(cargoDetail)
    
    return this.http.put<any>(this.baseUrl + "/" + Id, cargoDetail);
  }

  registerCargo(cargoDetail: any) : Observable<any> {
    console.log(cargoDetail)
    return this.http.post<any>(this.baseUrl, cargoDetail )
  }
}

