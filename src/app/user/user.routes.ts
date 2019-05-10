import { Routes } from '@angular/router';
import { LoginComponent } from './user-login.component';
import { SignupComponent } from './user-signup.component';
import { SubscriptionComponent } from './user-subscription.component';
import { UploadComponent } from './user-upload.component';
import { LikedVideosComponent } from './user-liked-videos.component';
import { AdminComponent } from '../admin/admin.component';

export const userRoutes: Routes = [
     { path: "signin", component: LoginComponent },
    {path: "signup", component: SignupComponent},
    {path:"subscriptions", component: SubscriptionComponent},
    {path: "upload",component: UploadComponent},
    {path: "likedvideos", component: LikedVideosComponent}
]