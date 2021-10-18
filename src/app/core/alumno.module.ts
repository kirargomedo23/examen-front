import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


import { AlumnoRoutingModule } from './alumno-routing.module';
import { AlumnoComponent } from './alumno.component';
import {CursoComponent} from './components/cursos/curso.component';
import { CrearComponent } from './components/crear/crear.component';
import { EditarComponent } from './components/editar/editar.component';

@NgModule({
  declarations: [AlumnoComponent,CursoComponent, CrearComponent, EditarComponent],
  imports: [
    CommonModule,FormsModule,
    AlumnoRoutingModule, ReactiveFormsModule,
    NgbModule
  ]
})
export class AlumnoModule { }
