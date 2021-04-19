import { Component, OnInit } from '@angular/core';
import { Pelicula } from '../../clases/pelicula';

@Component({
  selector: 'app-busqueda-pelicula',
  templateUrl: './busqueda-pelicula.component.html',
  styleUrls: ['./busqueda-pelicula.component.css']
})
export class BusquedaPeliculaComponent implements OnInit {

  listadoDePeliculas: Pelicula[] = [
  	{id: 1, nombre:"El hombre de acero", tipo: "Acción", fechaDeEstreno: "2013/06/14", cantidadDePublico: "500", fotoDePelicula: "https://http2.mlstatic.com/D_NQ_NP_914832-MLA32519892305_102019-O.jpg"},
  	{id: 2, nombre:"Batman vs Superman: El origen de la justicia", tipo: "Acción", fechaDeEstreno: "2016/04/25", cantidadDePublico: "300", fotoDePelicula: "https://images-na.ssl-images-amazon.com/images/I/512CL2VISIL._AC_.jpg"},
  	{id: 3, nombre:"La Liga de la Justicia de Zack Snyder", tipo: "Acción", fechaDeEstreno: "2021/04/18", cantidadDePublico: "3000", fotoDePelicula: "https://spoiler.bolavip.com/__export/1592497829102/sites/bolavip/img/2020/06/18/snyder_cut_justice_league_hbo_max_crop1592497753437.jpg_554688468.jpg"}
  ];
  peliculaSeleccionada!: Pelicula;

  constructor() { 
  	
  }

  ngOnInit(): void {
  }

  cargarPeliculaSeleccionada(pelicula: Pelicula){
  	this.peliculaSeleccionada = pelicula;
  }

  cargarNuevaPelicula(pelicula:Pelicula){
    this.listadoDePeliculas.push(pelicula);
  }

}
