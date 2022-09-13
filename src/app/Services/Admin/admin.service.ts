import { HttpClient } from '@angular/common/http';
import { Token } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  adminToken(token: any) {
      sessionStorage.setItem("AdminToken",token)
  }

  baseUrl = "https://localhost:5001/api/Admins";

  constructor(private http: HttpClient) { }

  loginAdmin(adminCredential:any) : Observable<any>{
    console.log(adminCredential)
    return this.http.post<any>(this.baseUrl + "/login", adminCredential )
  }

}
