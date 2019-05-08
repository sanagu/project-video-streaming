import { Component, OnInit } from '@angular/core';
import { UserUploadVideo } from './uploadVideo';
import { UserService } from './user.service';
import { Router } from '@angular/router';

@Component({
    templateUrl: "./user-upload.component.html",
    styleUrls: ["./user-upload.component.css"]
})
export class UploadComponent implements OnInit {

    video:UserUploadVideo;
    constructor(private userService: UserService,
        private router: Router){}

    ngOnInit(){
        this.video = new UserUploadVideo();
    }

    uploadVideo(){
        alert("uploading video method");
        this.userService.uploadVideo(this.video).subscribe((data)=>{
            console.log("uploaded success");
            if(data!=null){
                alert("done");
                this.router.navigate(["/signin"]);
            }
            
        });
    }
}