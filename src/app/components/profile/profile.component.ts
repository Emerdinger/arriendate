import { Component, OnInit } from '@angular/core';
import { UsersService } from "../../services/users.service";
import { AuthService } from "../../services/auth.service";
import { PublicacionesService } from "../../services/publicaciones.service";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user = {
    username: '',
    description: '',
    email: '',
    name: '',
    lastname: '',
    cellphone: '',
    address: '',
    twitter: '',
    instagram: '',
    facebook: ''
  }

  publicaciones: any;

  error = {
    err: '',
    errorPassword: ''
  }

  constructor(private authService: AuthService,private usersService: UsersService, private publicacionesService: PublicacionesService) { }

  ngOnInit(): void {
    this.usersService.getProfile().subscribe(
      res => {
        this.user = res
      },
      err => {
        console.log(err);
      }
    )

    this.publicacionesService.getUserPublicaciones().subscribe(
      res => {
        if(res.error){
          this.error.err = res.error
        }else{
          this.publicaciones = res
        }
      }
    )
    
  }

  changePassword(){
    this.authService.cambiarPassword(this.user).subscribe(
      res => {
        if(res.error){
          this.error.errorPassword = res.error
        }else{
          this.error.errorPassword = res.msg
        }
      }
    )
  }

  eliminarPublicacion(id: any){
    this.publicacionesService.deletePublicacion(id).subscribe(
      res => {
        if(res.error){
          this.error.err = res.error;
        }else{
          window.location.reload();
        }
      }
    )
  }

}
