import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerService } from 'src/app/Services/Customer/customer.service';

@Component({
  selector: 'app-updateself',
  templateUrl: './updateself.component.html',
  styleUrls: ['./updateself.component.css']
})
export class UpdateselfComponent implements OnInit {

  public custUpdCustForm !:FormGroup;
  custId:any;
  custPass:any;
  constructor(private formBuilder : FormBuilder, private avtivatedRouter : ActivatedRoute,private customerService:CustomerService,private router:Router) { 
   this.custId = this.customerService.gettCustomerToken();
  }

  ngOnInit(): void {
    this.getCustomerRecord(this.custId)
  }

  getCustomerRecord(custId: any) {
    this.customerService.getCustomerById(custId)
    .subscribe({
      next:(res)=>{
        console.log(res.custPassword);
        this.custPass = res.custPassword;
        this.custUpdCustForm=this.formBuilder.group({
          //CustId:[''],
          CustName:[''],
          CustAddress: [''],
          CustEmail: [''],
          CustPhNo: [''],
          CustPassword:res.custPassword
      })
      },
      error:(err)=>{
        console.log(err);
      }
    })
  }

  CustUpdateCust(){
    console.log("update")
    console.log(this.custUpdCustForm.value)
    console.log(this.custId)
    this.customerService.updateCustById(this.custId, this.custUpdCustForm.value)
    .subscribe({
      next:(res)=>{
        alert("Updated Sucessfully");
       // this.router.navigate(['employeedetails']);
      //  this.getEmployeeAllDetails();
        console.log(res);
      },
      error:(err)=>{
        if(err.status == 200)
        {
          alert("Updated Sucessfully");
         // this.router.navigate(['employeedetails']);
         // this.getEmployeeAllDetails();
        }
        else{
          alert("Failed Update")
          console.log(err)
        }
      }
    })
  }


}
