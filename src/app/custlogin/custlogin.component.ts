import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { EmployeeService } from '../Services/Admin/Employee/employee.service';

@Component({
  selector: 'app-custlogin',
  templateUrl: './custlogin.component.html',
  styleUrls: ['./custlogin.component.css']
})
export class CustloginComponent implements OnInit {

  public  empLoginForm !:FormGroup
  constructor(private formBuilder : FormBuilder, private empLoginService : EmployeeService, private router:Router) { }


  ngOnInit(): void {
    this.empLoginForm=this.formBuilder.group({
      EmpEmail:[''],
      Pass:['']
  })
  }
  EmployeeLogin(){
    console.log("Login")
    console.log(this.empLoginForm.value)
    const password = this.empLoginForm.value.Pass;
    if(password.match(/[a-z]/g) && password.match(/[A-Z]/g) && password.match(/[0-9]/g) && password.match(/[^a-zA-Z\d]/g) && password.length >= 8){
      console.log("TRUE");
      this.empLoginService.loginEmployee(this.empLoginForm.value)
      .subscribe({
        next:(res)=>{
          console.log(res);
          alert("Login Successful");
          //this.custLoginService.employeeToken(res.id);
          this.empLoginForm.reset();
          this.router.navigate(['employee']);
        },
        error:(err)=>{
          console.log(err);
          alert("Invalid Credentials, Please Enter valid details");
        }
      })
    }
    else{
      alert("Enter valid password")
    }
  }

}
