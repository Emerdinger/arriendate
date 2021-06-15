import { Component, OnInit } from '@angular/core';
import { PublicacionesService } from "../../services/publicaciones.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-publicaciones',
  templateUrl: './publicaciones.component.html',
  styleUrls: ['./publicaciones.component.css']
})
export class PublicacionesComponent implements OnInit {

  publicaciones: any;
  sortPublicaciones: any;
  auxSort: any;
  tipo = '';
  bathrooms = '';
  rooms = '';
  strate = '';


  constructor(private publicacionesService: PublicacionesService, private router: Router) { }

  ngOnInit(): void {
    this.publicacionesService.getPublicaciones().subscribe(
      res => {
        res.forEach((element: any) => {
          element.title = element.title.substring(0, 30);
          element.price = Intl.NumberFormat().format(parseInt(element.price));
        });
        this.publicaciones = res
        this.sortPublicaciones = this.publicaciones;
      }
    )
  }

  ordenarPublicacionesTipo() {
    let result;

    if (this.tipo == '' || this.tipo == null) {
      this.sortPublicaciones = [];
      this.sortPublicaciones = this.publicaciones;
    } else {
      result = this.publicaciones.filter((word: { type: string; }) => word.type == this.tipo);
      this.sortPublicaciones = result;
    }

    if (this.bathrooms != '') {
      result = this.sortPublicaciones.filter((word: { bathrooms: string; }) => word.bathrooms == this.bathrooms)
      this.sortPublicaciones = result;
    }

    if (this.rooms != ''){
      result = this.sortPublicaciones.filter((word: { rooms: string; }) => word.rooms == this.rooms)
      this.sortPublicaciones = result;
    }

    if(this.strate != ''){
      result = this.sortPublicaciones.filter((word: { strate: string; }) => word.strate == this.strate)
      this.sortPublicaciones = result;
    }
  }
}
