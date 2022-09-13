import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from 'src/app/Services/Admin/Employee/employee.service';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {

  public updEmpForm !:FormGroup;
  employeeId: any;
  constructor(private formBuilder : FormBuilder, private avtivatedRouter : ActivatedRoute,private employeeService:EmployeeService, private router:Router) {
    this.employeeId = this.avtivatedRouter.snapshot.paramMap.get("employeeId")
   }

  ngOnInit(): void {
    this.updEmpForm=this.formBuilder.group({
      // EmpId:this.employeeId,
      EmpName:[''],
      EmpEmail: [''],
      EmpPhNo: [''],
      Pass:['Empl@123']
  })
  }

  UpdateEmp(){
    console.log("update")
    console.log(this.updEmpForm.value)
    console.log(this.employeeId)
    this.employeeService.updateEmployeeById(this.employeeId,this.updEmpForm.value)
    .subscribe({
      next:(res)=>{
        alert("Updated Sucessfully");
        //this.router.navigate(['employeedetails']);
      //  this.getEmployeeAllDetails();
        console.log(res);
      },
      error:(err)=>{
        if(err.status == 200)
        {
          alert("Updated Sucessfully");
          //this.router.navigate(['employeedetails']);
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
