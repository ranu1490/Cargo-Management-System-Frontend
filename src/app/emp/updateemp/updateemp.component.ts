import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-updateemp',
  templateUrl: './updateemp.component.html',
  styleUrls: ['./updateemp.component.css']
})
export class UpdateempComponent implements OnInit {

  public empUpdEmpForm !:FormGroup;
  constructor(private formBuilder : FormBuilder) { }

  ngOnInit(): void {
    this.empUpdEmpForm=this.formBuilder.group({
      EmpId:[''],
      EmpName:[''],
      EmpEmail: [''],
      Gender: [''],
      EmpPhNo: ['']
  })
  }
  EmpUpdateEmp(){
    console.log("update")
    console.log(this.empUpdEmpForm.value)
  }

}
