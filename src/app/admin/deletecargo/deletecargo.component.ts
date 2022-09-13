import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-deletecargo',
  templateUrl: './deletecargo.component.html',
  styleUrls: ['./deletecargo.component.css']
})
export class DeletecargoComponent implements OnInit {

  public delCarForm !:FormGroup
  constructor(private formBuilder : FormBuilder) { }

  ngOnInit(): void {
    this.delCarForm=this.formBuilder.group({
      CargoId:[''],
      CargoName:[''],
      Place: ['']
  })
  }
  DeleteCar(){
    console.log("Delete")
    console.log(this.delCarForm.value)
  }

}
