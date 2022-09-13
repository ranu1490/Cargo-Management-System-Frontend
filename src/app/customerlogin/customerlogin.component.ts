import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CustomerService } from '../Services/Customer/customer.service';

@Component({
  selector: 'app-customerlogin',
  templateUrl: './customerlogin.component.html',
  styleUrls: ['./customerlogin.component.css']
})
export class CustomerloginComponent implements OnInit {

  public  custLoginForm !:FormGroup
  constructor(private formBuilder : FormBuilder, private custLoginService : CustomerService, private router:Router) { }

  ngOnInit(): void {
    this.custLoginForm=this.formBuilder.group({
      CustEmail:[''],
      CustPassword:['']
  })
  }
  CustomerLogin(){
    console.log("Login")
    console.log(this.custLoginForm.value)
    const password = this.custLoginForm.value.CustPassword;
    if(password.match(/[a-z]/g) && password.match(/[A-Z]/g) && password.match(/[0-9]/g) && password.match(/[^a-zA-Z\d]/g) && password.length >= 8){
      console.log("TRUE");
      this.custLoginService.loginCustomer(this.custLoginForm.value)
      .subscribe({
        next:(res)=>{
          console.log(res);
          alert("Login Successful");
          this.custLoginService.customerToken(res.custId);
          this.custLoginForm.reset();
          this.router.navigate(['customer']);
        },
        error:(err)=>{
          console.log(err);
          alert("Something Wrong");
        }
      })
    }
    else{
      alert("Enter valid password")
    }
  }
  }


