import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CustomersComponent} from "./customers/customers.component";
import {AccountsComponent} from "./accounts/accounts.component";
import {NewCustomerComponent} from "./new-customer/new-customer.component";
import {LoginComponent} from "./login/login.component";
import {AdminTemplateComponent} from "./admin-template/admin-template.component";
import {AuthorizationGuard} from "./guards/authorization.guard";
import {AuthenticationGuard} from "./guards/authentication.guard";
import {NotAuthorizedComponent} from "./not-authorized/not-authorized.component";

const routes: Routes = [
  {path:"login",component:LoginComponent},
  {path:"",redirectTo:"/login",pathMatch:"full"},
  {path:"admin",component:AdminTemplateComponent ,canActivate:[AuthenticationGuard],children:[
      {path:"accounts",component:AccountsComponent},
      {path:"customers",component:CustomersComponent},
      {path:"new-customer",canActivate:[AuthorizationGuard],component:NewCustomerComponent},
      {path:"notAuthorized",component:NotAuthorizedComponent}
    ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
