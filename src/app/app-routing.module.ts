import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Components

import { HomeComponent } from "./components/home/home.component";
import { ProfileComponent } from "./components/profile/profile.component";
import { SigninComponent } from "./components/signin/signin.component";
import { SignupComponent } from "./components/signup/signup.component";
import { EditProfileComponent } from "./components/edit-profile/edit-profile.component";
import { ProfilesComponent } from './components/profiles/profiles.component';
import { SearchComponent } from "./components/search/search.component";
import { RecuperarPasswordComponent } from "./components/recuperar-password/recuperar-password.component";
import { ChangePasswordComponent } from "./components/change-password/change-password.component";
import { ChangePasswordUserComponent } from "./components/change-password-user/change-password-user.component";
import { EditarPublicacionComponent } from "./components/editar-publicacion/editar-publicacion.component";
import { CrearPublicacionComponent } from "./components/crear-publicacion/crear-publicacion.component";
import { PublicacionesComponent } from "./components/publicaciones/publicaciones.component";
import { PublicacionComponent } from "./components/publicacion/publicacion.component";

import { AuthGuard } from './auth.guard'

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
    
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'signin',
    component: SigninComponent
  },
  {
    path: 'signup',
    component: SignupComponent
  },
  {
    path: 'editProfile',
    component: EditProfileComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'profile/:id',
    component: ProfilesComponent
  },
  {
    path: 'search',
    component: SearchComponent
  },
  {
    path: 'forgotpassword',
    component: RecuperarPasswordComponent
  },
  {
    path: 'resetpassword/:id',
    component: ChangePasswordComponent
  },
  {
    path: 'changepassword/:id',
    component: ChangePasswordUserComponent
  },
  {
    path: 'publicacion/editar/:id',
    component: EditarPublicacionComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'publicacion/nueva/crear',
    component: CrearPublicacionComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'publicaciones',
    component: PublicacionesComponent
  },
  {
    path: 'publicacion/:id',
    component: PublicacionComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
