
export class AlumnoModel{

    AL_ID: number;
    AL_NOMBRES: string;
    AL_APELLIDOS: string;
    AL_ESTADO: boolean;
    AL_FECHA_NAC: string;
    AL_SEXO: string;

    constructor(AL_ID:number, AL_NOMBRES:string, AL_APELLIDOS: string, AL_ESTADO:boolean, AL_FECHA_NAC:string, AL_SEXO: string){
        this.AL_ID = AL_ID;
        this.AL_NOMBRES = AL_NOMBRES;
        this.AL_APELLIDOS = AL_APELLIDOS;
        this.AL_ESTADO = AL_ESTADO;
        this.AL_FECHA_NAC = AL_FECHA_NAC;
        this.AL_SEXO = AL_SEXO;

    }


}