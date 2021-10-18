import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { retry} from 'rxjs/operators';
import { AlumnoModel } from '../models/AlumnoModel';
import { NotaModel } from '../models/NotaModel';



@Injectable({
  providedIn: 'root'
})
export class AlumnoService {

  constructor(private http: HttpClient) { }

  listar(){
    const url =  environment.url + 'AlumnoController.php' ;

    return this.http.get<any>( url, {}).pipe(
      retry(1)
    );
  }

  obtenerPorId(id:number){
    const url =  environment.url + 'AlumnoController.php?id='+id ;

    return this.http.get<any>( url, {}).pipe(
      retry(1)
    );
  }

  crear(listNota:Array<NotaModel>, alumno: AlumnoModel){
    const url =  environment.url + 'AlumnoController.php' ;
    
    let body = {
      "ALUMNO":{
        "AL_NOMBRES":alumno.AL_NOMBRES,
        "AL_APELLIDOS":alumno.AL_APELLIDOS,
        "AL_FECHA_NAC":alumno.AL_FECHA_NAC,
        "AL_SEXO":alumno.AL_SEXO,
      },
      "NOTAS": listNota
    };

    return this.http.post<any>( url,body).pipe(
      retry(2)
    );
  }

  editar(alumno, id:number){
    const url =  environment.url + 'AlumnoController.php' ;
    
    let body = {
      "AL_ID":id,
      "AL_NOMBRES":alumno.nombres_form ,
      "AL_APELLIDOS":alumno.apellidos_form ,
      "AL_FECHA_NAC":alumno.date_form ,
      "AL_SEXO":alumno.sexo_form
    }

    return this.http.put<any>( url,body).pipe(
      retry(2)
    );
  }

  eliminar(id:number){
    const url =  environment.url + 'AlumnoController.php?id='+id;

    return this.http.delete<any>(url).pipe(
      retry(2)
    );
  }

}
