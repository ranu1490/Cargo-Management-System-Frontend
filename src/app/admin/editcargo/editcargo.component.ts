import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CargoService } from 'src/app/Services/Admin/cargo/cargo.service';
import { CargoOrderService } from 'src/app/Services/Admin/CargoOrder/cargo-order.service';

@Component({
  selector: 'app-editcargo',
  templateUrl: './editcargo.component.html',
  styleUrls: ['./editcargo.component.css']
})
export class EditcargoComponent implements OnInit {

  public updCarForm !:FormGroup
  cargoId: any;
  constructor(private formBuilder : FormBuilder, private avtivatedRouter : ActivatedRoute,private cargoService:CargoService,private router:Router) { 
    this.cargoId = this.avtivatedRouter.snapshot.paramMap.get("cargoId")
  }

  ngOnInit(): void {
    this.updCarForm=this.formBuilder.group({
      
      CargoName:[''],
      Place: [''],
      OrderDate:[''],
      Price: ['']
  })
  }
  UpdateCar(){
    console.log("Update")
    console.log(this.updCarForm.value)
    console.log(this.cargoId)
    this.cargoService.updateCargoById(this.cargoId,this.updCarForm.value,)
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
