import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CursoService } from 'src/app/services/curso.service';
import { Asignatura, AsignaturaPorfesor } from '../../../interfaces/asignatura.interface';
import { AsignaturasService } from '../../../services/asignaturas.service';
import { Curso } from '../../../interfaces/curso.interface';
import { AgregarEditarAsignaturaComponent } from './agregar-editar-asignatura/agregar-editar-asignatura.component';

@Component({
  selector: 'app-asignaturas',
  templateUrl: './asignaturas.component.html',
  styleUrls: ['./asignaturas.component.scss']
})
export class AsignaturasComponent implements OnInit {

  asignaturas: Asignatura[] = [];
  asignaturasDelProfesor: AsignaturaPorfesor[] = [];
  cursosProfesor: Curso[] = [];

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
              public dialog: MatDialogRef<any>,
              private asignaturaService: AsignaturasService,
              private cursoService: CursoService,
              public dialog2: MatDialog) { }

  ngOnInit(): void {
    this.asignaturaService.getAsignaturas()
    .subscribe( resp => {
      this.asignaturas = resp.map( asignatura => {
        return {id: asignatura.id_asignatura, name: asignatura.name_asignatura,
                id_profesor: asignatura.id_profesor, id_curso: asignatura.id_curso};
      })

      this.asignaturas.forEach(asignatura => {
        if(asignatura.id_profesor === this.data.datos.id){
          this.asignaturasDelProfesor.push(asignatura);
        }
      })

      this.asignaturasDelProfesor.forEach((asignatura, i) => {
        this.cursoService.getCursoById(asignatura.id_curso)
          .subscribe(resp => {
            this.asignaturasDelProfesor[i] = {
              id: asignatura.id,
              name: asignatura.name,
              id_profesor: asignatura.id_profesor,
              id_curso: asignatura.id_curso,
              name_curso: resp.grado.toString() + resp.salon
            }
          })
      })

    })
  }

  agregar(title: string, id_profesor: number) {
    this.dialog2.open(AgregarEditarAsignaturaComponent, {
      data: {
        title,
        id_profesor
      }
    })
  }

  editar(title: string, asignatura: Asignatura) {
    this.dialog2.open(AgregarEditarAsignaturaComponent, {
      data: {
        title,
        asignatura
      }
    })
  }

  eliminar(asignatura: Asignatura) {
    // this.dialog2.open(EliminarCursoComponent, {
    //   data: {
    //     curso
    //   }
    // })
  }
}
