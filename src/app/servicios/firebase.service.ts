import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Actor } from '../clases/actor';
import { Pelicula } from '../clases/pelicula';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  private url = environment.urlPaises;

  constructor(
    private db: AngularFirestore, 
    private http: HttpClient
  ) { }

  // Paises
  
  public obtenerPaises(){
    return this.http.get(this.url);
  }

// PELICULAS

  public createPelicula(pelicula: Pelicula) {
    return this.db.collection('peliculas').doc((pelicula.id).toString()).set({...pelicula});
  }

  public getPelicula(documentId: string) {
    return this.db.collection('peliculas').doc(documentId).get();
  }

  public getPeliculas() {
    // return this.db.collection('peliculas').get();
    return this.db.collection('peliculas').snapshotChanges();
  }

  public updatePelicula(documentId: string, pelicula: Pelicula) {
    return this.db.collection('peliculas').doc(documentId).set(pelicula);
  }

  public deletePelicula(documentId: string) {
    return this.db.collection('peliculas').doc(documentId).delete();
  }

  // ACTORES

  public createActor(actor: Actor) {
    return this.db.collection('actores').doc((actor.id).toString()).set({...actor});
  }

  public getActor(documentId: string) {
    return this.db.collection('actores').doc(documentId).get();
  }

  public getActores() {
    return this.db.collection('actores').valueChanges();
  }

  public updateActor(documentId: string, actor: Actor) {
    return this.db.collection('actores').doc(documentId).set({...actor});
  }

  public deleteActor(documentId: string){
    return this.db.collection('actores').doc(documentId).delete();
  }
}
