import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { PremiumComponent } from './premium.component';
import { premiumRoutes } from './premium.routes';

@NgModule({
    declarations: [PremiumComponent],
    imports :[BrowserModule, RouterModule.forChild(premiumRoutes)],
    exports:[PremiumComponent, RouterModule]
})
export class PremiumModule{


}