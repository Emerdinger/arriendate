import { Component, OnInit } from '@angular/core';
import { UsersService } from "../../services/users.service";
import { Router } from '@angular/router'

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
    this.usersService.editProfile(this.user).subscribe(
      res => {
        this.user = res
        this.router.navigate(['/profile']);
      },
      err => {
        console.log(err);
      }
    )
    console.log(this.user);
  }

}
