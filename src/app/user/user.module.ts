import { NgModule } from '@angular/core';
import { LoginComponent } from './user-login.component';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { userRoutes } from './user.routes';
import { SignupComponent } from './user-signup.component';
import { SubscriptionComponent } from './user-subscription.component';
import { UploadComponent } from './user-upload.component';
import { LikedVideosComponent } from './user-liked-videos.component';


@NgModule({
   declarations: [LoginComponent, SignupComponent, UploadComponent, LikedVideosComponent, SubscriptionComponent],
   imports: [BrowserModule, RouterModule.forChild(userRoutes)],
   exports: [LoginComponent, SignupComponent, LikedVideosComponent, SubscriptionComponent,UploadComponent, RouterModule]
})
export class UserModule { }