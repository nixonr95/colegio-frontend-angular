import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ColegiosComponent } from './colegios/colegios.component';
import { EstudiantesComponent } from './estudiantes/estudiantes.component';
import { ProfesoresComponent } from './profesores/profesores.component';

const routes: Routes = [{
  path: '',
  children: [
    {path: 'colegios', component: ColegiosComponent},
    {path: 'estudiantes', component: EstudiantesComponent},
    {path: 'profesores', component: ProfesoresComponent},
    {path: '**', redirectTo: 'colegios'}
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
