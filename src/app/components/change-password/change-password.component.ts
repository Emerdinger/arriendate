import { Component, OnInit } from '@angular/core';
import { UsersService } from "../../services/users.service";
import { AuthService } from "../../services/auth.service";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {

  user = {
    password: '',
    confirmPassword: ''
  }

  id = ''

  error = {
    err: ''
  }

  constructor(private authService: AuthService,private usersService: UsersService, private _route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    if(this.authService.loggedIn()){
      this.router.navigate(['/home']);
    }
  }

  changePassword(){
    this.id = String(this._route.snapshot.paramMap.get('id'));
    this.usersService.confirmToken(this.user, this.id).subscribe(
      res => {
        if (res.error){

          this.error.err = res.error
        } else{
          this.error.err = 'Contraseña actualizada correctamente'
          setTimeout(() =>{
            this.router.navigate(['/signin']);
          },3000)
        }
      },
      err => {
        console.log(err);
      }
    )

  }

}
