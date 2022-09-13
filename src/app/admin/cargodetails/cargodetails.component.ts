import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CargoService } from 'src/app/Services/Admin/cargo/cargo.service';

@Component({
  selector: 'app-cargodetails',
  templateUrl: './cargodetails.component.html',
  styleUrls: ['./cargodetails.component.css']
})
export class CargodetailsComponent implements OnInit {

  public C_details:any;
  constructor(private router:Router,private cargoService:CargoService) { }

  ngOnInit(): void {
    this.C_details = {
      cargoId:"",
      cargoName:"",
      orderDate:"",
      place:"",
      price:""
    
    }
    this.getCargoAllDetails();
  }
  getCargoAllDetails() {
    this.cargoService.getAllCargo()
    .subscribe({
      next:(res)=>{
        this.C_details = res;
        console.table(res);
        console.log(this.C_details);
      },
      error:(err)=>{console.log(err)}
    })
  }
  
  deleteCargo(cargoId:string){
    this.cargoService.deleteCargoById(cargoId)
    .subscribe({
      next:(res)=>{
        alert("Deleted Sucessfully");
        this.getCargoAllDetails();
        console.log(res);
      },
      error:(err)=>{
        if(err.status == 200)
        {
          alert("Deleted Sucessfully");
          this.getCargoAllDetails();
        }
        else{
          alert("Failed Delete")
          console.log(err)
        }

      }
    })
  }
  updateCargo(cargoId:string){
    this.router.navigate(['editcargo/'+cargoId])
  }


}
