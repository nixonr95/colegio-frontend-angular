import { AfterViewInit, Component, Input, OnChanges, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { AgregarEditarComponent } from '../../colegios/agregar-editar/agregar-editar.component';
import { EliminarComponent } from '../../colegios/eliminar/eliminar.component';
import { AgregarEditarEstudianteComponent } from '../../estudiantes/agregar-editar-estudiante/agregar-editar-estudiante.component';
import { EliminarEstudianteComponent } from '../../estudiantes/eliminar-estudiante/eliminar-estudiante.component';
import { AgregarEditarProfesorComponent } from '../../profesores/agregar-editar-profesor/agregar-editar-profesor.component';
import { EliminarProfesorComponent } from '../../profesores/eliminar-profesor/eliminar-profesor.component';
import { CursosComponent } from '../../colegios/cursos/cursos.component';
import { AsignaturasComponent } from '../../profesores/asignaturas/asignaturas.component';
import { AsignaturasCursadasComponent } from '../../estudiantes/asignaturas-cursadas/asignaturas-cursadas.component';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.scss']
})
export class TablaComponent implements AfterViewInit, OnChanges {

  @Input() tipo!: string; 
  @Input() displayedColumns!: string[];
  @Input() dataTable!: any;
  dataSource = new MatTableDataSource<any>(this.dataTable);

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(public dialog: MatDialog) {
    // this.dataSource = new MatTableDataSource(this.dataTable);
  }

  ngOnChanges(): void {
    this.dataSource = new MatTableDataSource(this.dataTable);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  editar(title: string, datos: any) {
    if (this.tipo === 'colegio') {
      this.dialog.open(AgregarEditarComponent, {
        data: {
          title,
          datos
        }
      })
    }

    if (this.tipo === 'estudiante') {
      this.dialog.open(AgregarEditarEstudianteComponent, {
        data: {
          title,
          datos
        }
      })
    }

    if (this.tipo === 'profesor') {
      this.dialog.open(AgregarEditarProfesorComponent, {
        data: {
          title,
          datos
        }
      })
    }

  }

  eliminar(datos: any) {
    if (this.tipo === 'colegio') {
      this.dialog.open(EliminarComponent,{
        data: {
          datos
        }
      })
    }

    if (this.tipo === 'estudiante') {
      this.dialog.open(EliminarEstudianteComponent,{
        data: {
          datos
        }
      })
    }

    if (this.tipo === 'profesor') {
      this.dialog.open(EliminarProfesorComponent,{
        data: {
          datos
        }
      })
    }

  }

  informacion(datos: any) {
    if (this.tipo === 'colegio') {
      this.dialog.open(CursosComponent,{
        data: {
          datos
        }
      })
    }

    if (this.tipo === 'profesor') {
      this.dialog.open(AsignaturasComponent,{
        data: {
          datos
        }
      })
    }

    if (this.tipo === 'estudiante') {
      this.dialog.open(AsignaturasCursadasComponent,{
        data: {
          datos
        }
      })
    }

  }


}
