import { Routes } from '@angular/router';
import { LoginComponent } from './user-login.component';
import { SignupComponent } from './user-signup.component';
import { SubscriptionComponent } from './user-subscription.component';

export const userRoutes: Routes = [
    { path: "signin", component: LoginComponent },
    {path: "signup", component: SignupComponent},
    {path:"forget", component: SubscriptionComponent}
]