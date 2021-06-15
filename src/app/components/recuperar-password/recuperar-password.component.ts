import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-recuperar-password',
  templateUrl: './recuperar-password.component.html',
  styleUrls: ['./recuperar-password.component.css']
})
export class RecuperarPasswordComponent implements OnInit {

  user = {
    email: ''
  }

  error = {
    err: ''
  }

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    if(this.authService.loggedIn()){
      this.router.navigate(['/home']);
    }
  }

  recuperarPassword(){
    this.authService.recuperarPassword(this.user).subscribe(
      res => {
        if (res.error){

          this.error.err = res.error
        } else{
          this.router.navigate(['/home']);
        }
      },
      err => {
        console.log(err);
      }
    )

  }

}
