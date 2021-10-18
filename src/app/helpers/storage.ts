import { Injectable } from '@angular/core';

@Injectable()
export class StorageHelper{

    constructor(){}

    setearkey(key: string, value: string) {
        localStorage.setItem(key, value);
    }
    
    existeKey(key: string) {
        return !!localStorage.getItem(key);
    }
    
    obtenerKey(key: string) {
        return localStorage.getItem(key);
    }
    
    eliminar(){
        localStorage.clear();
    }
}