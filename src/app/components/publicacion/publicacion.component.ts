import { Component, OnInit } from '@angular/core';
import { PublicacionesService } from "../../services/publicaciones.service";
import { AuthService } from "../../services/auth.service";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: 'app-publicacion',
  templateUrl: './publicacion.component.html',
  styleUrls: ['./publicacion.component.css']
})
export class PublicacionComponent implements OnInit {
  number = 0
  usuarioLogged = ''
  anuncios: any = []
  comments: any = []
  deleteComment = {
    commentId: ''
  }
  comment = {
    body: ''
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
    city: '',
    createdAt: new Date().toISOString()
  }

  error = {
    err: ''
  }

  constructor(private publicacionesService: PublicacionesService, private _router: ActivatedRoute, private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.publicacionesService.getPublicacionVer(String(this._router.snapshot.paramMap.get('id'))).subscribe(
      res => {
        if(res.error){
          this.error.err = res.error;
        }else{
          this.publicacion = res;
          this.publicacion.price = Intl.NumberFormat().format(parseInt(this.publicacion.price));
          this.comments = res.comments
          this.comments.forEach((element: any) =>{
            element.createdAt = element.createdAt.slice(0,10);
          })
        }
      }
    )
    this.publicacionesService.getPublicaciones().subscribe(
      res => {
        res.forEach((element: any) => {
          if (this.number < 4) {
            element.title = element.title.substring(0, 15);
            element.price = Intl.NumberFormat().format(parseInt(element.price));
            this.anuncios.push(element);
            this.number++
          }else{
            return
          }
        });
      }
    )
    this.authService.getUserLogged().subscribe(
      res => {
        this.usuarioLogged = res;
      }
    )
  }

  comentar(){
    console.log(String(this._router.snapshot.paramMap.get('id')))
    this.publicacionesService.postComment(String(this._router.snapshot.paramMap.get('id')), this.comment).subscribe(
      res => {
        if (res.error){
          this.error.err = res.error;
          console.log(res.error)
        }else{
          window.location.reload()
        }
      }
    )
  }

  eliminarComentario(commentId:any) {
    this.deleteComment.commentId = commentId;
    this.publicacionesService.deleteComment(String(this._router.snapshot.paramMap.get('id')),this.deleteComment).subscribe(
      res => {
        if (res.error){
          console.log(res.error);
        }else{
          window.location.reload();
        }
      }
    )
  }

  reload(id:any){
    this.router.navigate([`/publicacion/${id}`]).then(() =>{window.location.reload()});
  }
}
