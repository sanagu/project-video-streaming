import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';
import { Router } from '@angular/router';
import { UserModule } from './user.module';
import { UserProfile } from './user';
import { AuthenticationService } from './user-authenticate.service';
import { routerNgProbeToken } from '@angular/router/src/router_module';


@Component({
  templateUrl: "./user-login.component.html",
  styleUrls: ["./user-login.component.css"]
})
<<<<<<< HEAD
export class LoginComponent implements OnInit{
    
    signinFlag = false;

    constructor(private userService: UserService,
        private router: Router){}

        ngOnInit(){

        }

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
=======
export class LoginComponent {
  
  invalidLogin = false;

  constructor(private router: Router,
    private loginservice: AuthenticationService,
    private userService : UserService) { }

    ngOnInit() {
>>>>>>> 9d123fb3ccdbb3881284e013a9914f984928a3bb
    }

    checkLogin() {
      let email = (<HTMLInputElement>document.getElementById("email")).value;
      let password= (<HTMLInputElement>document.getElementById("password")).value;

      this.userService.userLogin(email,password).subscribe((data)=>{
        if(data!=null) {
          
          this.invalidLogin = this.loginservice.authenticate(true,email);;
          this.router.navigate(['/home']);
        } 
        else
        this.invalidLogin = true;

      })
      
    }
}




 

  

  
      

