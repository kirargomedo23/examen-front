
export class NotaModel{

    NO_PRACTICA_N1: number;
    NO_PRACTICA_N2: number;
    NO_PRACTICA_N3: number;
    NO_PARCIAL: number;
    NO_FINAL: number;

    CU_ID: number;

    constructor(NO_PRACTICA_N1:number, NO_PRACTICA_N2:number, NO_PRACTICA_N3: number, NO_PARCIAL: number, NO_FINAL:number,CU_ID:number){
        this.NO_PRACTICA_N1 = NO_PRACTICA_N1;
        this.NO_PRACTICA_N2 = NO_PRACTICA_N2;
        this.NO_PRACTICA_N3 = NO_PRACTICA_N3;
        this.NO_PARCIAL = NO_PARCIAL;
        this.NO_FINAL = NO_FINAL;
        this.CU_ID = CU_ID;

    }


}