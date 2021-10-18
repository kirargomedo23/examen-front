import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AlumnoComponent} from './alumno.component';
import { CrearComponent } from './components/crear/crear.component';
import {CursoComponent} from './components/cursos/curso.component';
import { EditarComponent } from './components/editar/editar.component';

const routes: Routes = [
  {
    path: '',
    component: AlumnoComponent
  },
  {
    path: 'cursos/:id',
    component: CursoComponent
  },
  {
    path: 'crear',
    component: CrearComponent
  },
  {
    path: 'editar/:id',
    component: EditarComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlumnoRoutingModule { }
