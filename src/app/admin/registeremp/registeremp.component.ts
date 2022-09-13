import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { EmployeeService } from 'src/app/Services/Admin/Employee/employee.service';

@Component({
  selector: 'app-registeremp',
  templateUrl: './registeremp.component.html',
  styleUrls: ['./registeremp.component.css']
})
export class RegisterempComponent implements OnInit {

  public regEmpForm !:FormGroup;

  constructor(private formBuilder : FormBuilder, private router:Router, private employeeService : EmployeeService) { }


  ngOnInit(): void {
    this.regEmpForm=this.formBuilder.group({
    
      EmpName:[''],
      EmpEmail: [''],
      // Gender: [''],
      EmpPhNo: [''],
      Pass:"Empl@123"
  })
  }

  RegisterEmp(){
    console.log("register")
    console.log(this.regEmpForm.value)
    const password = this.regEmpForm.value.Pass;
    if(password.match(/[a-z]/g) && password.match(/[A-Z]/g) && password.match(/[0-9]/g) && password.match(/[^a-zA-Z\d]/g) && password.length >= 8){
     console.log("TRUE");
      this.employeeService.registerEmployee(this.regEmpForm.value)
      .subscribe({
        next:(res)=>{
          console.log(res);
          alert("SignUp Successful");
          this.regEmpForm.reset();
          this.router.navigate(['employeedetails']);
        },
        error:(err)=>{
          console.log(err);
          alert("Something Wrong!!");
        }
      })
    }
     else{
       alert("Enter valid password")
     }
  
    }
}
