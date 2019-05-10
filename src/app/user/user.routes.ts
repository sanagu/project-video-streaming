import { Routes } from '@angular/router';
import { LoginComponent } from './user-login.component';
import { SignupComponent } from './user-signup.component';
import { SubscriptionComponent } from './user-subscription.component';
import { UploadComponent } from './user-upload.component';
import { LikedVideosComponent } from './user-liked-videos.component';
<<<<<<< HEAD
import { AdminComponent } from '../admin/admin.component';

export const userRoutes: Routes = [
     { path: "signin", component: LoginComponent },
=======
import { LogoutComponent } from './user-logout.component';

export const userRoutes: Routes = [
    { path: "login", component: LoginComponent },
>>>>>>> 9d123fb3ccdbb3881284e013a9914f984928a3bb
    {path: "signup", component: SignupComponent},
    {path:"logout", component :LogoutComponent},
    {path:"subscriptions", component: SubscriptionComponent},
    {path: "upload",component: UploadComponent},
    {path: "likedvideos", component: LikedVideosComponent}
]