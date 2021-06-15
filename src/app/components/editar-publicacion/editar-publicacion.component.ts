import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { PublicacionesService } from "../../services/publicaciones.service";

@Component({
  selector: 'app-editar-publicacion',
  templateUrl: './editar-publicacion.component.html',
  styleUrls: ['./editar-publicacion.component.css']
})
export class EditarPublicacionComponent implements OnInit {

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

  constructor(private _route: ActivatedRoute, private publicacionesService: PublicacionesService, private router: Router) { }

  ngOnInit(): void {

    this.publicacionesService.getPublicacion(String(this._route.snapshot.paramMap.get('id'))).subscribe(
      res => {
        if( res.error){
          this.error.err = res.error
        }else{
          this.publicacion = res
        }
      }
    )
  }

  editarPublicacion(){
    console.log(this.publicacion._id)
    this.publicacionesService.editPublicacion(this.publicacion).subscribe(
      res => {
        if(res.error){
          this.error.err = res.error;
        }else{
          this.router.navigate(['/profile']);
        }
      }
    )
  }

}
