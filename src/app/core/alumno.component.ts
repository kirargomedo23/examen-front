import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder,  Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';


import {AlertaHelper} from '../helpers/alerta';
import { RoutingHelper } from '../helpers/routing';


import {AlumnoModel} from './models/AlumnoModel';
import {AlumnoService} from './services/alumno.service';

@Component({
  selector: 'app-alumno',
  templateUrl: './alumno.component.html',
  styleUrls: ['./alumno.component.css'],
  providers: [
    AlertaHelper,
    RoutingHelper
  ]
})
export class AlumnoComponent implements OnInit {


  @ViewChild('modalConfirmacionEliminar') elementEliminar: ElementRef;



  
  AlumnoList: Array<AlumnoModel> = [];
  alertaPrincipal: AlertaHelper = new AlertaHelper('success', '');
  alertaModalEliminar: AlertaHelper = new AlertaHelper('success', '');
  alumno: AlumnoModel;


  alumnoID: number;

  carga:boolean = false;


  constructor(
    private formBuilder: FormBuilder ,
    private modal: NgbModal,
    private alumnoService: AlumnoService,
    private router: RoutingHelper
  ) { }

  ngOnInit(): void {
    this.listarAlumnos();
  }

  listarAlumnos(){
    this.alumnoService.listar().subscribe(data =>{
      console.log(data);
      this.AlumnoList = data.data;
    }, error=>{
      this.alertaPrincipal.tipoDeAlerta = 'danger';
      this.alertaPrincipal.mostrarAlerta = true;
      this.alertaPrincipal.mensajeAlerta = 'Ocurrió un problema al momento de obtener los datos. Por favor, intente de nuevo.';
    });
  }

  abrirModalConfirmacion(id:number){
    this.alertaModalEliminar.mostrarAlerta = false;
    this.alumnoID = id;
    this.modal.open(this.elementEliminar);
  }

  eliminarAlumno(){
    this.carga = true;
    this.alumnoService.eliminar(this.alumnoID).subscribe(data=>{
      this.modal.dismissAll();

      this.carga = false;
      this.alertaPrincipal.tipoDeAlerta = 'success';
      this.alertaPrincipal.mostrarAlerta = true;
      this.alertaPrincipal.mensajeAlerta = 'Acción realizado con éxito';
      setTimeout(() => {
        this.listarAlumnos();
      }, 800);
    }, error=>{
      this.carga = false;
      this.alertaModalEliminar.tipoDeAlerta = 'danger';
      this.alertaModalEliminar.mostrarAlerta = true;
      this.alertaModalEliminar.mensajeAlerta = 'Ocurrió un problema al momento de eliminar el dato. Por favor, intente de nuevo.';
    });
  }


  redireccionar(url){
    this.router.redireccionar(url);
  }

}
