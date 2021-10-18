import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { retry} from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class NotaService {

  constructor(private http: HttpClient) { }

  listar(id:number){
    const url =  environment.url + 'NotaController.php?id='+id ;

    return this.http.get<any>(url).pipe(
      retry(1)
    );
  }


}
