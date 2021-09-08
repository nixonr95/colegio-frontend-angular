import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EstudianteService } from 'src/app/services/estudiante.service';
import { Estudiante } from '../../interfaces/estudiante.interface';
import { AgregarEditarEstudianteComponent } from './agregar-editar-estudiante/agregar-editar-estudiante.component';

@Component({
  selector: 'app-estudiantes',
  templateUrl: './estudiantes.component.html',
  styleUrls: ['./estudiantes.component.scss']
})
export class EstudiantesComponent {

  displayedColumns: string[] = ['id', 'name', 'Acción']
  dataTable!: Estudiante[];

  constructor(private estudianteService: EstudianteService,
              public dialog: MatDialog) { 

                this.estudianteService.getEstudiantes()
                .subscribe( resp => {
                  this.dataTable = resp.map( estudiante => {
                    return {id: estudiante.id_estudiante, name: estudiante.name_estudiante}; 
                  })
                })
                
              }


  agregar(title: string) {
    this.dialog.open(AgregarEditarEstudianteComponent, {
      data: {
        title
      }
    })
  }

}
