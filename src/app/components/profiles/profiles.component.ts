import { Component, OnInit } from '@angular/core';
import { UsersService } from "../../services/users.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-profiles',
  templateUrl: './profiles.component.html',
  styleUrls: ['./profiles.component.css']
})
export class ProfilesComponent implements OnInit {

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

  error = {
    err: ''
  }

  username = ''

  constructor(private usersService: UsersService, private _route: ActivatedRoute) { }

  ngOnInit(): void {
    this.username = String(this._route.snapshot.paramMap.get('id'));

    this.usersService.searchProfile(this.username).subscribe(
      res => {
        if( res.error){
          this.error.err = res.error
        }else{
          this.user = res
        }
      }
    )
    
  }

  searchProfile(){
    this.username = String(this._route.snapshot.paramMap.get('id'));

    this.usersService.searchProfile(this.username).subscribe(
      res => {
        if( res.error){
          this.error.err = res.error
        }else{
          this.user = res
        }
      }
    )
  }

}
