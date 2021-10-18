import { Component, OnInit } from '@angular/core';
import { AlertaHelper } from 'src/app/helpers/alerta';
import { RoutingHelper } from 'src/app/helpers/routing';
import {NotaService} from '../../services/nota.service';


import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.css'],
  providers: [
    AlertaHelper,
    RoutingHelper
  ]
})
export class CursoComponent implements OnInit {

  cursoList:any = [];

  constructor(
    private notaService: NotaService,
    private router:ActivatedRoute,
    private routerHelper: RoutingHelper
  ) { }

  ngOnInit(): void {
    this.listar();
  }

  listar(){
    let id = Number(this.router.snapshot.paramMap.get('id'));

    
    this.notaService.listar(id).subscribe(data=>{
      console.log(data);
      this.cursoList = data.data;
    }, error=>{

    });
  }

  editar(){}

  redireccionar(){
    this.routerHelper.redireccionar('alumnos');
  }

}
