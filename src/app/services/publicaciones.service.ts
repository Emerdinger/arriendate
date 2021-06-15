import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class PublicacionesService {

  private URL = 'https://apiemerest.herokuapp.com/publicaciones'

  constructor(private httpClient: HttpClient, private router: Router) { }

  getUserPublicaciones(){
    return this.httpClient.get<any>(this.URL + '/publicaciones/usuario');
  }

  getPublicacion(id: any){
    return this.httpClient.get<any>(this.URL + `/publicacion/get/${id}`);
  }

  getPublicacionVer(id: any){
    return this.httpClient.get<any>(this.URL + `/publicaciones/get/publicacion/${id}`);
  }

  editPublicacion(publicacion: {}){
    return this.httpClient.post<any>(this.URL + '/publicacion/editar', publicacion);
  }

  deletePublicacion(id: any){
    return this.httpClient.delete<any>(this.URL + `/publicacion/eliminar/${id}`);
  }

  crearPublicacion(publicacion: {}){
    return this.httpClient.post<any>(this.URL + '/nuevo/publicacion', publicacion);
  }

  getPublicaciones(){
    return this.httpClient.get<any>(this.URL + '/publicaciones');
  }

  postComment(idPost: any, comment: {}){
    return this.httpClient.post<any>(this.URL + `/publicacion/comentar/${idPost}`, comment);
  }

  deleteComment(id: any, eliminar: {}){
    return this.httpClient.post<any>(this.URL + `/publicacion/comentario/eliminar/${id}`, eliminar);
  }

}
