import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { Pelicula } from '../../clases/pelicula';

@Component({
  selector: 'app-tabla-peliculas',
  templateUrl: './tabla-peliculas.component.html',
  styleUrls: ['./tabla-peliculas.component.css']
})
export class TablaPeliculasComponent implements OnInit {

  @Input()listadoPeliculas!: Pelicula[]; 
  @Output()peliculaSeleccionadaEvento:EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  seleccioneUnaPelicula(pelicula:Pelicula){
  	this.peliculaSeleccionadaEvento.emit(pelicula);
  }

}
