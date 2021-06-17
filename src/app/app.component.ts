import { Component, OnInit } from '@angular/core';
import { AuthService } from "./services/auth.service";
import { UsersService } from "./services/users.service";
import { ProfilesComponent } from "./components/profiles/profiles.component";
import { Router } from '@angular/router'
import Swal from 'sweetalert2'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  search = ''

  constructor(public authService: AuthService, public router: Router, public usersService: UsersService) {}
  ngOnInit(): void {
  }

  searchUser(){
    this.router.navigate([`/profile/${this.search}`]).then(() =>{window.location.reload()});
  }

  title = 'EncuestApp';
}
