import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { LayoutComponent } from './components/layout/layout.component';
import { HomeRoutingModule } from './home-routing.module';
import { UsersComponent } from './components/users/users.component';
import { ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule, HttpClient } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AddUserComponent } from './components/add-user/add-user.component';
import { EditUserComponent } from './components/edit-user/edit-user.component';



@NgModule({
  declarations: [
    HomeComponent,
    LayoutComponent,
    UsersComponent,
    AddUserComponent,
    EditUserComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    RouterModule,
    HttpClientModule,
    ReactiveFormsModule
  ]
})
export class HomeModule { }
