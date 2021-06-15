import { Component, OnInit } from '@angular/core';
import { PublicacionesService } from "../../services/publicaciones.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-crear-publicacion',
  templateUrl: './crear-publicacion.component.html',
  styleUrls: ['./crear-publicacion.component.css']
})
export class CrearPublicacionComponent implements OnInit {

  error = {
    err: ''
  }

  publicacion = {
    _id: '',
    title: '',
    lease: '',
    description: '',
    type: '',
    bathrooms: '',
    antiquity: '',
    rooms: '',
    mt2: '',
    strate: '',
    price: '',
    street: '',
    phone: '',
    piso: '',
    city: ''
  }

  constructor(private publicacionesService: PublicacionesService, private router: Router) { }

  ngOnInit(): void {
  }

  crearPublicacion(){
    this.publicacionesService.crearPublicacion(this.publicacion).subscribe(
      res => {
        if (res.error){
          this.error.err = res.error
        }else{
          this.router.navigate(['/profile']);
        }
      }
    )
  }

}
