import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder,  Validators } from '@angular/forms';
import {AlertaHelper} from '../helpers/alerta';
import {RoutingHelper} from '../helpers/routing';
import { StorageHelper } from '../helpers/storage';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [
    AlertaHelper,
    RoutingHelper,
    StorageHelper
  ]
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  alerta: AlertaHelper = new AlertaHelper('success', '');

  constructor(
    private formBuilder: FormBuilder,
    private router : RoutingHelper,
    private storageHelper: StorageHelper
  ) { }

  ngOnInit(): void {
    this.inicializarForm();
  }

  inicializarForm(){
    this.loginForm = this.formBuilder.group({
      usuario_form: ['', [Validators.required, Validators.pattern('[a-zñáéíóú A-ZÑÁÉÍÓÚ]+'), Validators.maxLength(20)]],
      contrasenia_form: ['', [Validators.required, Validators.pattern('[0-9]+'), Validators.maxLength(10)]]
    });
  }

  iniciarSesion(){
    if(this.usuario_form.value == 'ADMIN' && this.contrasenia_form.value == '123456'){
      this.storageHelper.setearkey("login", "true");
      this.router.redireccionar('alumnos');
    }else{
      this.alerta.tipoDeAlerta = 'danger';
      this.alerta.mensajeAlerta = 'Credenciales incorrectas';
      this.alerta.mostrarAlerta = true;
    }
  }


  get usuario_form() {
    return this.loginForm.get('usuario_form');
  }

  get contrasenia_form() {
    return this.loginForm.get('contrasenia_form');
  }


}
