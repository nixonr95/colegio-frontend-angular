import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { ColegiosComponent } from './colegios/colegios.component';
import { EstudiantesComponent } from './estudiantes/estudiantes.component';
import { TablaComponent } from './components/tabla/tabla.component';
import { MaterialModule } from '../material/material.module';
import { ColumnasTablaPipe } from './pipes/columnas-tabla.pipe';
import { AgregarEditarComponent } from './colegios/agregar-editar/agregar-editar.component';
import { ReactiveFormsModule } from '@angular/forms';
import { EliminarComponent } from './colegios/eliminar/eliminar.component';
import { AgregarEditarEstudianteComponent } from './estudiantes/agregar-editar-estudiante/agregar-editar-estudiante.component';
import { EliminarEstudianteComponent } from './estudiantes/eliminar-estudiante/eliminar-estudiante.component';
import { ProfesoresComponent } from './profesores/profesores.component';
import { AgregarEditarProfesorComponent } from './profesores/agregar-editar-profesor/agregar-editar-profesor.component';
import { EliminarProfesorComponent } from './profesores/eliminar-profesor/eliminar-profesor.component';
import { CursosComponent } from './colegios/cursos/cursos.component';
import { AgregarEditarCursoComponent } from './colegios/cursos/agregar-editar-curso/agregar-editar-curso.component';
import { EliminarCursoComponent } from './colegios/cursos/eliminar-curso/eliminar-curso.component';
import { AsignaturasComponent } from './profesores/asignaturas/asignaturas.component';
import { EliminarAsignaturaComponent } from './profesores/asignaturas/eliminar-asignatura/eliminar-asignatura.component';
import { AgregarEditarAsignaturaComponent } from './profesores/asignaturas/agregar-editar-asignatura/agregar-editar-asignatura.component';
import { AsignaturasCursadasComponent } from './estudiantes/asignaturas-cursadas/asignaturas-cursadas.component';
import { AgregarEditarAsignaturaCursadaComponent } from './estudiantes/asignaturas-cursadas/agregar-editar-asignatura-cursada/agregar-editar-asignatura-cursada.component';
import { EliminarAsignaturaCursadaComponent } from './estudiantes/asignaturas-cursadas/eliminar-asignatura-cursada/eliminar-asignatura-cursada.component';



@NgModule({
  declarations: [
    ColegiosComponent,
    EstudiantesComponent,
    TablaComponent,
    ColumnasTablaPipe,
    AgregarEditarComponent,
    EliminarComponent,
    AgregarEditarEstudianteComponent,
    EliminarEstudianteComponent,
    ProfesoresComponent,
    AgregarEditarProfesorComponent,
    EliminarProfesorComponent,
    CursosComponent,
    AgregarEditarCursoComponent,
    EliminarCursoComponent,
    AsignaturasComponent,
    EliminarAsignaturaComponent,
    AgregarEditarAsignaturaComponent,
    AsignaturasCursadasComponent,
    AgregarEditarAsignaturaCursadaComponent,
    EliminarAsignaturaCursadaComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MaterialModule,
    ReactiveFormsModule
  ]
})
export class DashboardModule { }
