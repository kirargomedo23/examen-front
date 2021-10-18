import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';


import { AlertaHelper } from 'src/app/helpers/alerta';
import { RoutingHelper } from 'src/app/helpers/routing';
import { AlumnoService } from '../../services/alumno.service';


import {AlumnoModel} from '../../models/AlumnoModel';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css'],
  providers: [
    AlertaHelper,
    RoutingHelper
  ]
})
export class EditarComponent implements OnInit {

  alumno: AlumnoModel;
  @ViewChild('modalConfirmar') elemenConfirmar: ElementRef;

  

  alumnoForm: FormGroup;
  disabledMasculino: boolean = false;
  disabledFemenino:boolean = false;
  hoy = new Date().toISOString().slice(0, 10);


  constructor(
    private routerHelper: RoutingHelper,
    private formBuilder: FormBuilder ,
    private router:ActivatedRoute,
    private modal: NgbModal,
    private alumnoService: AlumnoService
  ) { }

  ngOnInit(): void {
    this.inicializarForm();
    this.obtenerDatos();
  }

  obtenerDatos(){
    let id = Number(this.router.snapshot.paramMap.get('id'));

    this.alumnoService.obtenerPorId(id).subscribe((data) => {
      this.alumno = data.data[0];
      console.log(this.alumno);
      this.updateSexo();
      this.updateValues();
    }, error=>{
      console.log(error);
    })
  }

  inicializarForm(){
    this.alumnoForm = this.formBuilder.group({
      nombres_form: ['', [Validators.required, Validators.pattern('[a-zñáéíóú A-ZÑÁÉÍÓÚ]+'), Validators.maxLength(50)]],
      apellidos_form: ['', [Validators.required, Validators.pattern('[a-zñáéíóú A-ZÑÁÉÍÓÚ]+'), Validators.maxLength(60)]],
      date_form: ['', [Validators.required]],
      sexo_form: ['', [Validators.required]]
    }); 
  }

  updateSexo(){
    (this.alumno.AL_SEXO == "M")?this.eventChangeFemenino():this.eventChangeMasculino();
  }

  abrirModalEditar(){
    this.modal.open(this.elemenConfirmar);
  }


  editar(){
    let id = Number(this.router.snapshot.paramMap.get('id'));
    
    (this.disabledMasculino == false)?this.sexo_form.setValue('M'):this.sexo_form.setValue('F');


    this.alumnoService.editar(this.alumnoForm.value, id).subscribe(data=> {
      this.modal.dismissAll();
      this.redireccionar('alumnos');
    }, error=>{

    });

  }

  updateValues() {
    this.nombres_form.setValue(this.alumno.AL_NOMBRES);
    this.apellidos_form.setValue(this.alumno.AL_APELLIDOS);
    this.date_form.setValue(this.alumno.AL_FECHA_NAC);
    this.sexo_form.setValue(this.alumno.AL_SEXO);
  }
  

  eventChangeMasculino(){
    this.disabledMasculino = !this.disabledMasculino;
  }

  eventChangeFemenino(){
    this.disabledFemenino = !this.disabledFemenino;
  }


  redireccionar(url){
    this.routerHelper.redireccionar(url);
  }

  get nombres_form() {
    return this.alumnoForm.get('nombres_form');
  }

  get apellidos_form() {
    return this.alumnoForm.get('apellidos_form');
  }

  get date_form() {
    return this.alumnoForm.get('date_form');
  }

  get sexo_form() {
    return this.alumnoForm.get('sexo_form');
  }

}
