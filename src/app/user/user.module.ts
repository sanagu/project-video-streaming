import { NgModule } from '@angular/core';
import { LoginComponent } from './user-login.component';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { userRoutes } from './user.routes';
import { SignupComponent } from './user-signup.component';
import { SubscriptionComponent } from './user-subscription.component';


@NgModule({
   declarations: [LoginComponent, SignupComponent, SubscriptionComponent],
   imports: [BrowserModule, RouterModule.forChild(userRoutes)],
   exports: [LoginComponent, SignupComponent, SubscriptionComponent, RouterModule]
})
export class UserModule { }