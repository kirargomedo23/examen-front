
export class CursoModel{

    CU_ID: number;
    CU_DESCRIPCION: string;
    CU_NOMBRE: string;
    CU_OBLIGATORIEDAD: boolean;

    constructor(CU_ID:number, CU_DESCRIPCION:string, CU_NOMBRE: string, CU_OBLIGATORIEDAD:boolean){
        this.CU_ID = CU_ID;
        this.CU_DESCRIPCION = CU_DESCRIPCION;
        this.CU_NOMBRE = CU_NOMBRE;
        this.CU_OBLIGATORIEDAD = CU_OBLIGATORIEDAD;

    }


}