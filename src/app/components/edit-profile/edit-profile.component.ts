import { Component, OnInit } from '@angular/core';
import { UsersService } from "../../services/users.service";
import { Router } from '@angular/router'
import Swal from 'sweetalert2'

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {

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

  constructor(private usersService: UsersService, private router: Router) { }

  ngOnInit(): void {
    this.usersService.getProfile().subscribe(
      res => {
        this.user = res
      },
      err => {
        console.log(err);
      }
    )
  }

  editProfile(){
    Swal.fire({
      title: '¿Seguro que quiere guardar los cambios?',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: `Guardar`,
      denyButtonText: `No guardar`,
      cancelButtonText: `Cancelar`
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire('Guardado correctamente!', '', 'success').then(()=>{
          this.usersService.editProfile(this.user).subscribe(
            res => {
              this.user = res
              this.router.navigate(['/profile']);
            },
            err => {
              console.log(err);
            }
          )
        })
      } else if (result.isDenied) {
        Swal.fire('Los cambios no han sido guardados', '', 'info').then(()=>{
          this.router.navigate(['/profile']);
        })
      }
    })
  }
}
