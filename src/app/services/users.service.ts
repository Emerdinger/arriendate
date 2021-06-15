import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private URL = 'https://apiemerest.herokuapp.com/users'

  constructor(private httpClient: HttpClient, private router: Router) { }

  getProfile() {
    return this.httpClient.get<any>(this.URL + '/profile');
  }

  editProfile(user: {}){
    return this.httpClient.post<any>(this.URL + '/update', user);
  }

  searchProfile(username: {}){
    return this.httpClient.get<any>(this.URL + `/profile/${username}`);
  }

  confirmToken(user: {}, id:{}){
    return this.httpClient.post<any>(this.URL + `/resetpassword/${id}`, user);
  }

  changePassword(user:{}, id:{}){
    return this.httpClient.post<any>(this.URL + `/changepassword/${id}`, user);
  }

}
