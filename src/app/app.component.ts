import { Component, OnInit } from '@angular/core';
import { LoginComponent } from './user/user-login.component';
import { AuthenticationService } from './user/user-authenticate.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit {
  title = 'fun-video';

  
  constructor(private loginService:AuthenticationService){ }
  ngOnInit() {
  }
  
 openNav() {
  //  alert(this.isAvailable);
  document.getElementById("mySidenav").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
  document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}

closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
  document.body.style.backgroundColor = "white";
}




}
