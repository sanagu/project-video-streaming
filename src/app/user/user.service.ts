import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserProfile } from './user';
import { Observable } from 'rxjs';
import { UserUploadVideo } from './uploadVideo';

@Injectable()
export class UserService{

    baseUrl = "http://localhost:8000";

    constructor(private http: HttpClient){}

    registerNewUser(user: UserProfile):Observable<UserProfile>{
        return this.http.post<UserProfile>(this.baseUrl+"/user",user);
    }

    // userLogin(email: string, password: string){
    //     return this.http.get(this.baseUrl+"/user/"+email+"/"+password);
    // }

    userSignIn(acceptedUser){
        return this.http.get(this.baseUrl+"/user/"+acceptedUser);

    }

    uploadVideo(video:UserUploadVideo):Observable<UserUploadVideo>{
        return this.http.post<UserUploadVideo>(this.baseUrl+"/upload",video);
    }
}