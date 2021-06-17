import { Component, OnInit } from '@angular/core';
import { UsersService } from "../../services/users.service";
import { AuthService } from "../../services/auth.service";
import { PublicacionesService } from "../../services/publicaciones.service";
import Swal from "sweetalert2"

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

  constructor(private authService: AuthService, private usersService: UsersService, private publicacionesService: PublicacionesService) { }

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
        if (res.error) {
          this.error.err = res.error
        } else {
          this.publicaciones = res
        }
      }
    )

  }

  changePassword() {
    this.authService.cambiarPassword(this.user).subscribe(
      res => {
        if (res.error) {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Algo salio mal!'
          })
        } else {
          Swal.fire({
            icon: 'success',
            title: 'Cambio de contraseña en proceso',
            text: 'Se le ha enviado un correo con las instrucciones!'
          })
        }
      }
    )
  }

  eliminarPublicacion(id: any) {
    Swal.fire({
      title: '¿Estás seguro de eliminar la publicación?',
      text: 'Una vez eliminada no podrás recuperarla!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Si, eliminar!',
      cancelButtonText: 'No, mantenerla'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Eliminada!',
          'La publicación a sido eliminada.',
          'success'
        ).then(() => {
          this.publicacionesService.deletePublicacion(id).subscribe(
            res => {
              if (res.error) {
                this.error.err = res.error;
              } else {
                window.location.reload();
              }
            }
          )
        })
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'Cancelado',
          'Tu publicación está a salvo :)!',
          'error'
        )
      }
    })
  }

}
