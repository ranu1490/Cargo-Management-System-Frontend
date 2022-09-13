import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdministratorComponent } from './administrator/administrator.component';
import { RegisterempComponent } from './admin/registeremp/registeremp.component';
import { DeleteempComponent } from './admin/deleteemp/deleteemp.component';
import { FirstpageComponent } from './firstpage/firstpage.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { AddcargoComponent } from './admin/addcargo/addcargo.component';
import { EmployeeComponent } from './employee/employee.component';
import { UpdatecustComponent } from './emp/updatecust/updatecust.component';
import { CusteditplacesComponent } from './emp/custeditplaces/custeditplaces.component';
import { CustloginComponent } from './custlogin/custlogin.component';
import { CustomerloginComponent } from './customerlogin/customerlogin.component';
import { CustomerComponent } from './customer/customer.component';
import { UpdateselfComponent } from './cust/updateself/updateself.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { UpdateEmployeeComponent } from './admin/update-employee/update-employee.component';
import { DeletecargoComponent } from './admin/deletecargo/deletecargo.component';
import { EditcargoComponent } from './admin/editcargo/editcargo.component';
import { EmpupdcarComponent } from './emp/empupdcar/empupdcar.component';
import { UpdateempComponent } from './emp/updateemp/updateemp.component';
import { BookComponent } from './cust/book/book.component';
import { CustRegisterComponent } from './cust/cust-register/cust-register.component';
import { EmployeedetailsComponent } from './admin/employeedetails/employeedetails.component';
import { CargodetailsComponent } from './admin/cargodetails/cargodetails.component';
import { CargoOrderdetailsComponent } from './admin/cargo-orderdetails/cargo-orderdetails.component';







const routes: Routes = [
  { path: '', component: FirstpageComponent},
  { path: 'administrator', component: AdministratorComponent},
  { path: 'registeremp', component: RegisterempComponent},
  { path: 'deleteemp', component: DeleteempComponent},
  { path: 'firstpage', component: FirstpageComponent},
  { path: 'loginpage', component: LoginpageComponent},
  { path: 'addcargo', component: AddcargoComponent},
  { path: 'employee', component: EmployeeComponent},
  { path: 'updatecust', component: UpdatecustComponent},
  { path: 'custeditplaces', component: CusteditplacesComponent},
  { path: 'EmplLogin', component: CustloginComponent},
  { path: 'customerlogin', component: CustomerloginComponent},
  { path: 'customer', component: CustomerComponent},
  { path: 'updateself', component: UpdateselfComponent},
  {path: 'updateemp/:employeeId',component:UpdateEmployeeComponent},
  {path: 'deletecargo',component:DeletecargoComponent},
  {path: 'editcargo/:cargoId',component:EditcargoComponent},
  {path: 'empupdcar',component:EmpupdcarComponent},
  {path: 'empupdateemp',component:UpdateempComponent},
  {path: 'book',component:BookComponent},
  {path: 'employeedetails',component:EmployeedetailsComponent},
  {path: 'cargodetails', component:CargodetailsComponent},
  {path: 'cargoorderdetails',component:CargoOrderdetailsComponent},
  {path: 'registercustomer',component:CustRegisterComponent},
  {path:'cargoorderdetails',component:CargoOrderdetailsComponent},
  {path: '**',component:ErrorPageComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
