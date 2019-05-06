import {Routes} from '@angular/router'
import { ReportComponent } from './report.component';
import { TotalUserComponent } from './totaluser.component';

export const adminRoutes: Routes=[
    {path:"report", component:ReportComponent},
    {path:"forget",component:TotalUserComponent}

]