import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Actor } from '../../clases/actor';
import { FirebaseService } from '../../servicios/firebase.service';
import { Guid } from 'guid-typescript';

@Component({
  selector: 'app-alta-actores',
  templateUrl: './alta-actores.component.html',
  styleUrls: ['./alta-actores.component.css']
})
export class AltaActoresComponent implements OnInit {

  actor!: Actor;
  seleccionarPais: any;
  actorForm!: FormGroup;
  check: boolean = false;

  constructor(
    private firebaseService: FirebaseService,
    private formBuilder:FormBuilder
  ) 
  {
    this.actorForm = formBuilder.group({
      nombre: ["", Validators.required],
      apellido: ["", Validators.required],
      sexo: ["", Validators.required],
      fechaDeNacimiento: ["", Validators.required],
    })  
  }

  ngOnInit(): void {
  }

  onSubmit() {
    
    this.actor = new Actor(
      Guid.create().toString(), 
      this.actorForm.get("nombre")!.value, 
      this.actorForm.get("apellido")!.value, 
      this.actorForm.get("sexo")!.value, 
      this.actorForm.get("fechaDeNacimiento")!.value, 
      this.seleccionarPais.name,
      'https://d500.epimg.net/cincodias/imagenes/2016/07/04/lifestyle/1467646262_522853_1467646344_noticia_normal.jpg'

    );
    this.firebaseService.createActor(this.actor)
    .then( re => {
      console.log(re);
      this.actorForm.reset();
      this.seleccionarPais = null;
      this.check = false;
    })
    .catch( ex => console.log );
  }

  asignarPais(pais:any) {
    this.seleccionarPais = pais;
    this.check = true;
  }

}
