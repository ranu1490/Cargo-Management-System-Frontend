import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CargoService } from 'src/app/Services/Admin/cargo/cargo.service';
import { CargoOrderService } from 'src/app/Services/Admin/CargoOrder/cargo-order.service';
import { CustomerService } from 'src/app/Services/Customer/customer.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  public C_details:any;
  constructor(private router:Router,private cargoService:CargoService, private cargoOrderService:CargoOrderService, private customerService:CustomerService) { }

  ngOnInit(): void {
    this.C_details = {
      empId:"",
      empName:"",
      empEmail:"",
      empPhNo:"",
    
    }
    this.getEmployeeAllDetails();
  }
  getEmployeeAllDetails() {
    this.cargoService.getAllCargo()
    .subscribe({
      next:(res)=>{
        this.C_details = res;
        console.table(res);
        console.table(this.C_details);
      },
      error:(err)=>{console.log(err)}
    })
  }
  
  BookCargo(CargoId:any){
    var employeeId = this.customerService.gettCustomerToken()
    this.cargoOrderService.BookCargoOrder(employeeId,CargoId)
    .subscribe({
      next:(res)=>{
        alert("Deleted Sucessfully");
        this.getEmployeeAllDetails();
        console.log(res);
      },
      error:(err)=>{
        if(err.status == 200)
        {
          alert("Booked Sucessfully");
          this.getEmployeeAllDetails();
        }
        else{
          alert("Failed Book")
          console.log(err)
        }

      }
    })
  }


}
