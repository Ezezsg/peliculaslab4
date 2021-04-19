import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BienvenidoComponent } from './pages/bienvenido/bienvenido.component';
import { BusquedaPeliculaComponent } from './pages/busqueda-pelicula/busqueda-pelicula.component';

const routes: Routes = [
	{path: "bienvenido", component: BienvenidoComponent},
	{path: "", redirectTo: "bienvenido", pathMatch: "full"},
	{path: "busquedapelicula", component: BusquedaPeliculaComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
