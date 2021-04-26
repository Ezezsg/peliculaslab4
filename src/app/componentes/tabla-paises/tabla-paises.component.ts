import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FirebaseService } from '../../servicios/firebase.service';

@Component({
  selector: 'app-tabla-paises',
  templateUrl: './tabla-paises.component.html',
  styleUrls: ['./tabla-paises.component.css']
})
export class TablaPaisesComponent implements OnInit {

  listadoPaises!: any[];
  @Output() seleccionarPais = new EventEmitter<any>();

  constructor(private firebaseService: FirebaseService) { }

  ngOnInit(): void {
    this.firebaseService.obtenerPaises().subscribe((paises: any) =>{
  		console.log(paises);
  		this.listadoPaises = paises;
  	});
  }

  paisSelec(pais:any) {
    this.seleccionarPais.emit(pais);
  }

}
