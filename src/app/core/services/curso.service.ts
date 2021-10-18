import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { retry} from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class CursoService {

  constructor(private http: HttpClient) { }

  listar(){
    const url =  environment.url + 'CursoController.php' ;

    return this.http.get<any>(url).pipe(
      retry(2)
    );
  }


}
