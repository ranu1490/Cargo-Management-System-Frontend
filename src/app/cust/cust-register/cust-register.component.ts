import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CustomerService } from 'src/app/Services/Customer/customer.service';

@Component({
  selector: 'app-cust-register',
  templateUrl: './cust-register.component.html',
  styleUrls: ['./cust-register.component.css']
})
export class CustRegisterComponent implements OnInit {

  public  custSignUpForm !:FormGroup
  constructor(private formBuilder : FormBuilder, private router:Router, private customerService : CustomerService) { }

  ngOnInit(): void {
    this.custSignUpForm=this.formBuilder.group({
      CustName:[''],
      CustAddress:[''],
      CustPhNo:[''],
      CustEmail:[''],
      CustPassword:['']
  })
  }

  CustomerSignup(){
    console.log("Login")
    console.log(this.custSignUpForm.value)
    const password = this.custSignUpForm.value.CustPassword;
    if(password.match(/[a-z]/g) && password.match(/[A-Z]/g) && password.match(/[0-9]/g) && password.match(/[^a-zA-Z\d]/g) && password.length >= 8){
      console.log("TRUE");
      this.customerService.registerCustomer(this.custSignUpForm.value)
      .subscribe({
        next:(res)=>{
          console.log(res);
          alert("SignUp Successful");
          this.custSignUpForm.reset();
          this.router.navigate(['customerlogin']);
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
