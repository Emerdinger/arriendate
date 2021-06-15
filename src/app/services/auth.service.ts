import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Router } from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private URL = 'https://apiemerest.herokuapp.com/users'

  constructor(private http: HttpClient, private router: Router) { }

  getUserLogged(){
    return this.http.get<any>(this.URL + '/');
  }

  signUp(user: {}){
    return this.http.post<any>(this.URL + '/register', user);
  }

  signIn(user: {}){
    return this.http.post<any>(this.URL + '/login', user)
  }

  recuperarPassword(user: {}){
    return this.http.post<any>(this.URL + '/forgotpassword', user)
  }

  cambiarPassword(user: {}){
    return this.http.post<any>(this.URL + '/changepassword', user)
  }

  loggedIn(){
    if(localStorage.getItem('token')){
      return true;
    }else{
      return false;
    }
  }

  getToken(){
    return localStorage.getItem('token');
  }

  logOut(){
    localStorage.removeItem('token');
    this.router.navigate(['/signin']);
  }

}
