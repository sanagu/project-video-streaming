import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './app.routes';
import { WelcomeComponent } from './welcome.component';
import { PremiumModule } from './premium/premium.module';
import { UserModule } from './user/user.module';
import { AdminModule } from './admin/admin.module';


@NgModule({
  declarations: [
    AppComponent, WelcomeComponent
  ],
  imports: [
    BrowserModule, RouterModule.forRoot(appRoutes), PremiumModule, UserModule,AdminModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  
}
