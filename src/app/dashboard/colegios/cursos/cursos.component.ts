import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Curso } from '../../../interfaces/curso.interface';
import { CursoService } from '../../../services/curso.service';
import { AgregarEditarCursoComponent } from './agregar-editar-curso/agregar-editar-curso.component';
import { EliminarCursoComponent } from './eliminar-curso/eliminar-curso.component';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.scss']
})
export class CursosComponent implements OnInit {

  cursos: Curso[] = [];
  cursosDelColegio: Curso[] = [];

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
              public dialog: MatDialogRef<any>,
              private cursoService: CursoService,
              public dialog2: MatDialog) { }

  ngOnInit(): void {
    this.cursoService.getCursos()
    .subscribe( resp => {
      this.cursos = resp.map( curso => {
        return {id: curso.id_curso, salon: curso.salon, grado: curso.grado, id_colegio: curso.id_colegio};
      })

      this.cursos.forEach(curso => {
        if(curso.id_colegio === this.data.datos.id){
          this.cursosDelColegio.push(curso);
        }
      })
      
    })
  }

  agregar(title: string, id_colegio: number) {
    this.dialog2.open(AgregarEditarCursoComponent, {
      data: {
        title,
        id_colegio
      }
    })
  }

  editar(title: string, curso: Curso) {
    this.dialog2.open(AgregarEditarCursoComponent, {
      data: {
        title,
        curso
      }
    })
  }

  eliminar(curso: Curso) {
    this.dialog2.open(EliminarCursoComponent, {
      data: {
        curso
      }
    })
  }
}
