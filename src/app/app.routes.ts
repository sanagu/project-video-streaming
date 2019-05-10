import {Routes} from '@angular/router'
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome.component';
import { LoginComponent } from './user/user-login.component';
export const appRoutes : Routes=[
    {path:"home", component:WelcomeComponent},
    {path:"", component:WelcomeComponent},
    {path:"app",component:LoginComponent}


];