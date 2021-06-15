import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";
import { HttpClientModule, HTTP_INTERCEPTORS }from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SigninComponent } from './components/signin/signin.component';
import { SignupComponent } from './components/signup/signup.component';
import { HomeComponent } from './components/home/home.component';
import { ProfileComponent } from './components/profile/profile.component';

import { AuthGuard } from "./auth.guard";
import { TokenInterceptorService } from "./services/token-interceptor.service";
import { EditProfileComponent } from './components/edit-profile/edit-profile.component';
import { ProfilesComponent } from './components/profiles/profiles.component';
import { SearchComponent } from './components/search/search.component';
import { RecuperarPasswordComponent } from './components/recuperar-password/recuperar-password.component';
import { ChangePasswordComponent } from './components/change-password/change-password.component';
import { ChangePasswordUserComponent } from './components/change-password-user/change-password-user.component';
import { EditarPublicacionComponent } from './components/editar-publicacion/editar-publicacion.component';
import { CrearPublicacionComponent } from './components/crear-publicacion/crear-publicacion.component';
import { PublicacionesComponent } from './components/publicaciones/publicaciones.component';
import { PublicacionComponent } from './components/publicacion/publicacion.component';

@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    SignupComponent,
    HomeComponent,
    ProfileComponent,
    EditProfileComponent,
    ProfilesComponent,
    SearchComponent,
    RecuperarPasswordComponent,
    ChangePasswordComponent,
    ChangePasswordUserComponent,
    EditarPublicacionComponent,
    CrearPublicacionComponent,
    PublicacionesComponent,
    PublicacionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
