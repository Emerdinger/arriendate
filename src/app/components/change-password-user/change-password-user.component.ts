import { Component, OnInit } from '@angular/core';
import { UsersService } from "../../services/users.service";
import { AuthService } from "../../services/auth.service";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: 'app-change-password-user',
  templateUrl: './change-password-user.component.html',
  styleUrls: ['./change-password-user.component.css']
})
export class ChangePasswordUserComponent implements OnInit {

  user = {
    password: '',
    confirmPassword: ''
  }

  id = ''

  error = {
    err: ''
  }


  constructor(private authService: AuthService, private usersService: UsersService, private _route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    if(this.authService.loggedIn()){
      
    }else{
      this.router.navigate(['/signin']);
    }
  }

  changePassword(){
    this.id = String(this._route.snapshot.paramMap.get('id'));
    this.usersService.changePassword(this.user, this.id).subscribe(
      res => {
        if (res.error){
          this.error.err = res.error
        } else{
          this.error.err = 'Contraseña actualizada correctamente'
          setTimeout(() =>{
            this.router.navigate(['/home']);
          },3000)
        }
      },
      err => {
        console.log(err);
      }
    )

  }

}
