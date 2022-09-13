import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-deleteemp',
  templateUrl: './deleteemp.component.html',
  styleUrls: ['./deleteemp.component.css']
})
export class DeleteempComponent implements OnInit {
  public delEmpForm !:FormGroup;

  constructor(private formBuilder : FormBuilder) { }

  ngOnInit(): void {
    this.delEmpForm=this.formBuilder.group({
      EmpId:[''],
      EmpName:['']
  })
  }

  DeleteEmp()
  {
    console.log("delete")
    console.log(this.delEmpForm.value)
  }

}
