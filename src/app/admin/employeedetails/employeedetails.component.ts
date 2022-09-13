import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from 'src/app/Services/Admin/Employee/employee.service';

@Component({
  selector: 'app-employeedetails',
  templateUrl: './employeedetails.component.html',
  styleUrls: ['./employeedetails.component.css']
})
export class EmployeedetailsComponent implements OnInit {

  public E_details:any;
  constructor(private router:Router,private employeeService:EmployeeService) { }

  ngOnInit(): void {
    this.E_details = {
      empId:"",
      empName:"",
      empEmail:"",
      empPhNo:"",
    
    }
    this.getEmployeeAllDetails();
  }
  getEmployeeAllDetails() {
    this.employeeService.getAllEmployee()
    .subscribe({
      next:(res)=>{
        this.E_details = res;
        console.table(res);
        console.table(this.E_details);
      },
      error:(err)=>{console.log(err)}
    })
  }
  
  deleteEmployee(employeeId:string){
    this.employeeService.deleteEmployeeById(employeeId)
    .subscribe({
      next:(res)=>{
        alert("Deleted Sucessfully");
        this.getEmployeeAllDetails();
        console.log(res);
      },
      error:(err)=>{
        if(err.status == 200)
        {
          alert("Deleted Sucessfully");
          this.getEmployeeAllDetails();
        }
        else{
          alert("Failed Delete")
          console.log(err)
        }

      }
    })
  }

  updateEmployee(employeeId:string){
    this.router.navigate(['updateemp/'+employeeId])
  }

}
