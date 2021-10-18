import { Injectable } from '@angular/core';

type AlertaTipo = 'success' | 'warning' | 'danger';

@Injectable()
export class AlertaHelper{

    tipoDeAlerta: AlertaTipo;
    mensajeAlerta: string;
    mostrarAlerta: boolean;

    constructor(tipoDeAlerta:AlertaTipo, mensajeAlerta:string, mostrarAlerta: boolean = false){
        this.tipoDeAlerta = tipoDeAlerta;
        this.mensajeAlerta = mensajeAlerta;
        this.mostrarAlerta = mostrarAlerta;
    }
    
}