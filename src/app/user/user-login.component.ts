import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';
import { Router } from '@angular/router';


@Component({
    templateUrl:"./user-login.component.html",
    styleUrls : ["./user-login.component.css"]
})
export class LoginComponent{
    
    signinFlag = true;
    constructor(private userService: UserService,
        private router: Router){}

    userLogin(){
        let email = (<HTMLInputElement>document.getElementById("email")).value;
        let password= (<HTMLInputElement>document.getElementById("password")).value;
        this.userService.userLogin(email, password).subscribe((data)=>{
            if(data!=null)
            {
                alert("done");
                this.signinFlag = false;
                this.router.navigate([""]);
            }
                
            this.signinFlag = true;

        });
    }

    signIn():boolean{
        if(this.signinFlag==undefined)
            return true;
        else
            return false;
    }
    

}