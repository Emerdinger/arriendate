import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../services/auth.service";

@Component({
  selector: 'app-como-funciona',
  templateUrl: './como-funciona.component.html',
  styleUrls: ['./como-funciona.component.css']
})
export class ComoFuncionaComponent implements OnInit {

  constructor(public authService: AuthService) { }

  ngOnInit(): void {
  }

}
