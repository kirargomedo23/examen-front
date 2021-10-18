import { Injectable } from '@angular/core';
import { Router } from '@angular/router';


@Injectable()
export class RoutingHelper{
    constructor(
        private router: Router
    ){

    }

    redireccionar(url){
        this.router.navigate([url]);
    }
}