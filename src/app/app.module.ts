import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BienvenidoComponent } from './pages/bienvenido/bienvenido.component';
import { BusquedaPeliculaComponent } from './pages/busqueda-pelicula/busqueda-pelicula.component';
import { TablaPeliculasComponent } from './componentes/tabla-peliculas/tabla-peliculas.component';
import { DetallePeliculaComponent } from './componentes/detalle-pelicula/detalle-pelicula.component';
import { AltaPeliculaComponent } from './componentes/alta-pelicula/alta-pelicula.component';

import { FirebaseService } from './servicios/firebase.service';

import { environment } from '../environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AltaActoresComponent } from './pages/alta-actores/alta-actores.component';
import { TablaPaisesComponent } from './componentes/tabla-paises/tabla-paises.component';


@NgModule({
  declarations: [
    AppComponent,
    BienvenidoComponent,
    BusquedaPeliculaComponent,
    TablaPeliculasComponent,
    DetallePeliculaComponent,
    AltaPeliculaComponent,
    AltaActoresComponent,
    TablaPaisesComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule, // firestore
    AngularFireAuthModule, // auth
    AngularFireStorageModule, // storage
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [FirebaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
