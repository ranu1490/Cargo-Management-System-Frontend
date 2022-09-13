import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-updatecust',
  templateUrl: './updatecust.component.html',
  styleUrls: ['./updatecust.component.css']
})
export class UpdatecustComponent implements OnInit {

  public empUpdCustForm !:FormGroup;
  constructor(private formBuilder : FormBuilder) { }

  ngOnInit(): void {
    this.empUpdCustForm=this.formBuilder.group({
      CustId:[''],
      CustName:[''],
      CustAdd: [''],
      CustEmail: [''],
      CustPhNo: ['']
  })
  }
  EmpUpdateCust(){
    console.log("update")
    console.log(this.empUpdCustForm.value)
  }

}
