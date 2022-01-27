import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminLayoutComponent } from './shared/admin-layout/admin-layout.component';
import { LoginPageComponent } from './login-page/login-page.component';
import {RouterModule} from "@angular/router";
import { AddPageComponent } from './add-page/add-page.component';
import { EditPageComponent } from './edit-page/edit-page.component';
import { DashboardPageComponent } from './dashboard-page/dashboard-page.component';
import { OrdersPageComponent } from './orders-page/orders-page.component';
import {ReactiveFormsModule} from "@angular/forms";
import {AuthGuard} from "../shared/auth.guard";




@NgModule({
  declarations: [
    AdminLayoutComponent,
    LoginPageComponent,
    AddPageComponent,
    EditPageComponent,
    DashboardPageComponent,
    OrdersPageComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      {
        path: '', component: AdminLayoutComponent, children: [
          {path: '', redirectTo: '/admin/login', pathMatch: 'full'},
          {path: 'login', component: LoginPageComponent},
          {path: 'dashboard', component: DashboardPageComponent, canActivate: [AuthGuard]},
          {path: 'add', component: AddPageComponent, canActivate: [AuthGuard]},
          {path: 'product/:id/edit', component: EditPageComponent, canActivate: [AuthGuard]},
          {path: 'orders', component: OrdersPageComponent, canActivate: [AuthGuard]}
        ]
      }
    ])
  ],
  exports: [RouterModule]
})
export class AdminModule { }
