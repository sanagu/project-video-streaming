import { NgModule } from '@angular/core';
import { LoginComponent } from './user-login.component';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { userRoutes } from './user.routes';
import { SignupComponent } from './user-signup.component';


@NgModule({
   declarations: [LoginComponent, SignupComponent],
   imports: [BrowserModule, RouterModule.forChild(userRoutes)],
   exports: [LoginComponent, SignupComponent, RouterModule]
})
export class UserModule { }