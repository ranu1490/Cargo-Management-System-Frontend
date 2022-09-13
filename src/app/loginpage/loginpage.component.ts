import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminService } from '../Services/Admin/admin.service';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css']
})
export class LoginpageComponent implements OnInit {

  public  adminLoginForm !:FormGroup
  constructor(private formBuilder : FormBuilder, private adminLoginService : AdminService, private router:Router) { }

  ngOnInit(): void {
    this.adminLoginForm=this.formBuilder.group({
      Email:[''],
      Pass:['']
  })
  }
  AdminLogin(){
    console.log("Login")
    console.log(this.adminLoginForm.value)
    const password = this.adminLoginForm.value.Pass;
    if(password.match(/[a-z]/g) && password.match(/[A-Z]/g) && password.match(/[0-9]/g) && password.match(/[^a-zA-Z\d]/g) && password.length >= 8){
      console.log("TRUE");
      this.adminLoginService.loginAdmin(this.adminLoginForm.value)
      .subscribe({
        next:(res)=>{
          console.log(res);
          alert("Login Successful");
          this.adminLoginService.adminToken(res.token);
          this.adminLoginForm.reset();
          this.router.navigate(['administrator']);
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
