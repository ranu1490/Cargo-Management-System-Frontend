import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-empupdcar',
  templateUrl: './empupdcar.component.html',
  styleUrls: ['./empupdcar.component.css']
})
export class EmpupdcarComponent implements OnInit {

  public empUpdCarForm !:FormGroup
  constructor(private formBuilder : FormBuilder) { }

  ngOnInit(): void {
    this.empUpdCarForm=this.formBuilder.group({
      CargoId:[''],
      CargoName:[''],
      Place: [''],
      Price: ['']
  })
  }
  EmpUpdateCar(){
    console.log("Update")
    console.log(this.empUpdCarForm.value)
  }

}
