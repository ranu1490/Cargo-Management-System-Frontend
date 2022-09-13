import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  baseUrl = "https://localhost:5001/api/Employees";

  constructor(private http: HttpClient) { }

  getAllEmployee():Observable<any>{
    return this.http.get<any>(this.baseUrl);
  }

  deleteEmployeeById(Id:string):Observable<any>{
    // var token = sessionStorage.getItem("token");
    return this.http.delete<any>(this.baseUrl + "/" + Id);
  }

  

  updateEmployeeById(Id:string, EmpDetails:any):Observable<any>{
    console.table(EmpDetails)
    
    return this.http.put<any>(this.baseUrl + "/" + Id, EmpDetails);
  }
  
  registerEmployee(employeeDetail: any) : Observable<any> {
    console.log(employeeDetail)
    return this.http.post<any>(this.baseUrl, employeeDetail )
  }

  loginEmployee(employeeCredential:any) : Observable<any>{
    return this.http.post<any>(this.baseUrl + "/login", employeeCredential)
  }
}
