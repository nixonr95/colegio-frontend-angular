import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AsignaturaCursada, AsignaturaCursadaEstudiante } from '../../../interfaces/asignaturaCursada';
import { AsignaturasCursadasService } from '../../../services/asignaturas-cursadas.service';
import { AgregarEditarAsignaturaCursadaComponent } from './agregar-editar-asignatura-cursada/agregar-editar-asignatura-cursada.component';
import { EliminarAsignaturaCursadaComponent } from './eliminar-asignatura-cursada/eliminar-asignatura-cursada.component';
import { AsignaturasService } from '../../../services/asignaturas.service';

@Component({
  selector: 'app-asignaturas-cursadas',
  templateUrl: './asignaturas-cursadas.component.html',
  styleUrls: ['./asignaturas-cursadas.component.scss']
})
export class AsignaturasCursadasComponent implements OnInit {

  asignaturasCursadas: AsignaturaCursada[] = [];
  asignaturasDelEstudiante: AsignaturaCursadaEstudiante[] = [];

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
              public dialog: MatDialogRef<any>,
              private asignaturasCursadasService: AsignaturasCursadasService,
              private asignaturaService: AsignaturasService,
              public dialog2: MatDialog) { }

  ngOnInit(): void {
    this.asignaturasCursadasService.getAsignaturasCursadas()
    .subscribe( resp => {
      this.asignaturasCursadas = resp.map( asignaturaCursada => {
        return {id: asignaturaCursada.id_asignaturas_cursadas , id_asignatura: asignaturaCursada.id_asignatura,
                id_estudiante: asignaturaCursada.id_estudiante};
      })

      this.asignaturasCursadas.forEach(asignaturaCursada => {
        if(asignaturaCursada.id_estudiante === this.data.datos.id){
          this.asignaturasDelEstudiante.push(asignaturaCursada);
        }
      })

      this.asignaturasDelEstudiante.forEach((asignatura, i) => {
        this.asignaturaService.getAsignaturaById(asignatura.id_asignatura)
          .subscribe(resp => {
            this.asignaturasDelEstudiante[i] = {
              id: asignatura.id,
              id_estudiante: asignatura.id_estudiante,
              id_asignatura: asignatura.id_asignatura,
              name_asignatura: resp.name_asignatura
            }
          })
      })
      
    })
  }

  agregar(title: string, id_estudiante: number) {
    this.dialog2.open(AgregarEditarAsignaturaCursadaComponent, {
      data: {
        title,
        id_estudiante
      }
    })
  }

  editar(title: string, asignaturaCursada: AsignaturaCursada) {
    this.dialog2.open(AgregarEditarAsignaturaCursadaComponent, {
      data: {
        title,
        asignaturaCursada
      }
    })
  }

  eliminar(asignaturaCursada: AsignaturaCursada) {
    this.dialog2.open(EliminarAsignaturaCursadaComponent, {
      data: {
        asignaturaCursada
      }
    })
  }

}
