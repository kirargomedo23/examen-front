import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule, FormsModule,
    LoginRoutingModule, ReactiveFormsModule ,
    NgbModule
  ]
})
export class LoginModule { }
