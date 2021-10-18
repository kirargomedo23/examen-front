import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AppComponent} from './app.component';

import {AuthSesionGuard} from './shared/guards/aut.guard';
import {LoginGuard} from './shared/guards/login.guard';


const routes: Routes = [{
  path: '',
  component:AppComponent,
  children: [
    { path: '', redirectTo: 'login', pathMatch: 'prefix' },
    { path: '', canActivate:[LoginGuard] ,loadChildren: () => import('./login/login.module').then(m => m.LoginModule) },
    { path: 'alumnos', canActivate:[AuthSesionGuard]  , loadChildren: () => import('./core/alumno.module').then(m => m.AlumnoModule) },
    { path: 'not-found', loadChildren: () => import('./not-found/not-found.module').then(m => m.NotFoundModule) },
    { path: '**', redirectTo: 'not-found' }
  ]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
