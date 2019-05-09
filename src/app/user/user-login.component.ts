import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';
import { Router } from '@angular/router';
import { UserModule } from './user.module';
import { UserProfile } from './user';
import { AuthenticationService } from './user-authenticate.service';


@Component({
    templateUrl:"./user-login.component.html",
    styleUrls : ["./user-login.component.css"]
})
export class LoginComponent{
    

        email = 'prangshu'
        password = 'password'
        invalidLogin = false
      
        constructor(private router: Router,
          private loginservice: AuthenticationService) { }
      
        ngOnInit() {
        }
      
        checkLogin() {
          if (this.loginservice.authenticate(this.email, this.password)
          ) {
            this.router.navigate(['/home'])
            this.invalidLogin = false
          } else
            this.invalidLogin = true
        }
      
      }