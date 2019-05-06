import { NgModule } from '@angular/core';
import { ReportComponent } from './report.component';
import { TotalUserComponent } from './totaluser.component';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { adminRoutes } from './admin.routes';





@NgModule({
    declarations:[
        ReportComponent,
        TotalUserComponent
    ],
    imports:[
        BrowserModule,RouterModule.forChild(adminRoutes)
    ],
    exports:[
        ReportComponent,
        TotalUserComponent,
        RouterModule
    ]
})
export class AdminModule{

}