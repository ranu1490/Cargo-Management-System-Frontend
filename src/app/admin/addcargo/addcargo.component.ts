import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CargoService } from 'src/app/Services/Admin/cargo/cargo.service';

@Component({
  selector: 'app-addcargo',
  templateUrl: './addcargo.component.html',
  styleUrls: ['./addcargo.component.css']
})
export class AddcargoComponent implements OnInit {

  public regCarForm !:FormGroup
  constructor(private formBuilder : FormBuilder,private router:Router, private cargoService : CargoService) { }


  ngOnInit(): void {
    this.regCarForm=this.formBuilder.group({
      CargoName:[''],
      Place: [''],
      OrderDate:[''],
      Price: 0
  })
  }
  RegisterCar()
  {
    console.log("register")
    console.log(this.regCarForm.value)
    this.cargoService.registerCargo(this.regCarForm.value)
      .subscribe({
        next:(res)=>{
          console.log(res);
          alert("Register Successful");
          this.regCarForm.reset();
          this.router.navigate(['cargodetails']);
        },
        error:(err)=>{
          console.log(err);
          alert("Something Wrong!!");
        }
      })
  }

}
