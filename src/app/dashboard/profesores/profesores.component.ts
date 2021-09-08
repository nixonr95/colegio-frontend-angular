import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Profesor } from 'src/app/interfaces/profesor.interface';
import { ProfesorService } from '../../services/profesor.service';
import { AgregarEditarProfesorComponent } from './agregar-editar-profesor/agregar-editar-profesor.component';

@Component({
  selector: 'app-profesores',
  templateUrl: './profesores.component.html',
  styleUrls: ['./profesores.component.scss']
})
export class ProfesoresComponent implements OnInit {

  displayedColumns: string[] = ['id', 'name', 'Acción']
  dataTable!: Profesor[];

  constructor(private profesorService: ProfesorService,
              public dialog: MatDialog) {
    this.profesorService.getProfesores()
    .subscribe( resp => {
      this.dataTable = resp.map( profesor => {
        return {id: profesor.id_profesor, name: profesor.name_profesor}; 
      })
      // console.log(this.dataTable)
    })
   }

  ngOnInit(): void {
   
  }

  agregar(title: string) {
    this.dialog.open(AgregarEditarProfesorComponent, {
      data: {
        title
      }
    })
  }

}
