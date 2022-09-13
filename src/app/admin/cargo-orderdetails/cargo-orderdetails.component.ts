import { Component, OnInit } from '@angular/core';
import { CargoOrderService } from 'src/app/Services/Admin/CargoOrder/cargo-order.service';


@Component({
  selector: 'app-cargo-orderdetails',
  templateUrl: './cargo-orderdetails.component.html',
  styleUrls: ['./cargo-orderdetails.component.css']
})
export class CargoOrderdetailsComponent implements OnInit {

  public C_details:any;
  constructor(private cargoorderService:CargoOrderService) { }

  ngOnInit(): void {
    this.C_details = {
      cargoId:"",
      cargoName:"",
      cargoPrice:"",
      custId:"",
      custName:"",
      custEmail:"",
      custPhNo:""
    
    }
    this.getCargoAllDetails();
  }

  getCargoAllDetails() {
    this.cargoorderService.getAllCargoOrder()
    .subscribe({
      next:(res)=>{
        this.C_details = res;
        console.table(res);
        console.log(this.C_details);
      },
      error:(err)=>{console.log(err)}
    })
  }
}
