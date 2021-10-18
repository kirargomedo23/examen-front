import { Component, OnInit, ElementRef,ViewChild  } from '@angular/core';
import {CursoService} from '../../services/curso.service';
import {CursoModel} from '../../models/CursoModel';
import {  FormGroup, FormBuilder,  Validators  } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { RoutingHelper } from 'src/app/helpers/routing';


@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.css'],
  providers: [
    RoutingHelper
  ]
})
export class CrearComponent implements OnInit {

  cursoList: Array<CursoModel> = [];
  @ViewChild('modalCrear') elementCrear: ElementRef;


  alumnoForm: FormGroup;
  notaForm: FormGroup;

  disabledMasculino: boolean = false;
  disabledFemenino: boolean = false;

  hoy = new Date().toISOString().slice(0, 10);

  constructor(
    private cursoService: CursoService,
    private modal: NgbModal,
    private formBuilder: FormBuilder,
    private routerHelper: RoutingHelper
  ) { }

  ngOnInit(): void {
    this.listarCursos();
    this.inicializarNotaForm();
  }

  listarCursos(){
    this.cursoService.listar().subscribe((data) => {
      console.log('dat: ', data);
      this.cursoList = data.data;
      this.setCollapseInicial();
    }, error=> {

    });
  }

  inicializarAlumnoForm(){
    this.alumnoForm = this.formBuilder.group({
      nombre_form: ['', [Validators.required]],
      apellido_form: ['', [Validators.required]],
      fecha_form: ['', [Validators.required]],
      sexo_form: ['', [Validators.required]]
    });
  }

  inicializarNotaForm(){
    this.notaForm = this.formBuilder.group({
      practicaN1_form: ['', [Validators.required]],
      practicaN2_form: ['', [Validators.required]],
      practicaN3_form: ['', [Validators.required]],
      parcial_form: ['', [Validators.required]],
      final_form: ['', [Validators.required]]
    });
  }

  abrirModalCrear(){
    this.modal.open(this.elementCrear);
  }

  crear(){

  }

  setCollapseInicial(){
    for (let index = 0; index < this.cursoList.length; index++) {
      this.cursoList[index]['IS_COLLAPSED'] = true;
    }
  }

  setCollapsed(curso: CursoModel) {
    for (let index = 0; index < this.cursoList.length; index++) {
      if(this.cursoList[index] != curso) {
        this.cursoList[index]['IS_COLLAPSED'] = true;
      }
      else {
        curso['IS_COLLAPSED'] = !curso['IS_COLLAPSED'];
      }
    }
  }

  eventChangeMasculino(){
    this.disabledMasculino = !this.disabledMasculino;
  }

  eventChangeFemenino(){
    this.disabledFemenino = !this.disabledFemenino;
  }

  convertirFecha(){
    //2004-11-11.
    
  }

  redireccionar(){
    this.routerHelper.redireccionar('alumnos');
  }


  get nombre_form() {
    return this.alumnoForm.get('nombre_form');
  }

  get apellido_form() {
    return this.alumnoForm.get('apellido_form');
  }

  get fecha_form() {
    return this.alumnoForm.get('fecha_form');
  }

  get sexo_form() {
    return this.alumnoForm.get('sexo_form');
  }

  get practicaN1_form() {
    return this.notaForm.get('practicaN1_form');
  }

  get practicaN2_form() {
    return this.notaForm.get('practicaN2_form');
  }

  get practicaN3_form() {
    return this.notaForm.get('practicaN3_form');
  }

  get parcial_form() {
    return this.notaForm.get('parcial_form');
  }

  get final_form() {
    return this.notaForm.get('final_form');
  }



}
