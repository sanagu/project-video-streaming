import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserProfile } from './user';
import { Observable } from 'rxjs';

@Injectable()
export class UserService{

    baseUrl = "http://localhost:8080";

    constructor(private http: HttpClient){}

    registerNewUser(user: UserProfile):Observable<UserProfile>{
        return this.http.post<UserProfile>(this.baseUrl+"/user",user);
    }

    userLogin(email: string, password: string){
        return this.http.get(this.baseUrl+"/user/"+email+"/"+password);
    }
}