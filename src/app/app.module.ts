import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterempComponent } from './admin/registeremp/registeremp.component';
import { AdministratorComponent } from './administrator/administrator.component';
import { DeleteempComponent } from './admin/deleteemp/deleteemp.component';
import { FirstpageComponent } from './firstpage/firstpage.component';
import { ModalComponent } from './modal/modal.component';
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
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { EditcargoComponent } from './admin/editcargo/editcargo.component';
import { UpdateempComponent } from './emp/updateemp/updateemp.component';
import { EmpupdcarComponent } from './emp/empupdcar/empupdcar.component';
import { BookComponent } from './cust/book/book.component';
import { CustRegisterComponent } from './cust/cust-register/cust-register.component';
import { EmployeedetailsComponent } from './admin/employeedetails/employeedetails.component';
import { CargodetailsComponent } from './admin/cargodetails/cargodetails.component';
import { CargoOrderdetailsComponent } from './admin/cargo-orderdetails/cargo-orderdetails.component';



@NgModule({
  declarations: [
    AppComponent,
    RegisterempComponent,
    AdministratorComponent,
    DeleteempComponent,
    FirstpageComponent,
    ModalComponent,
    LoginpageComponent,
    AddcargoComponent,
    EmployeeComponent,
    UpdatecustComponent,
    CusteditplacesComponent,
    CustloginComponent,
    CustomerloginComponent,
    CustomerComponent,
    UpdateselfComponent,
    ErrorPageComponent,
    UpdateEmployeeComponent,
    DeletecargoComponent,
    EditcargoComponent,
    UpdateempComponent,
    EmpupdcarComponent,
    BookComponent,
    CustRegisterComponent,
    EmployeedetailsComponent,
    CargodetailsComponent,
    CargoOrderdetailsComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
