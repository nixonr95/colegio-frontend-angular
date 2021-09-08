import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CursoService } from '../../../../services/curso.service';

@Component({
  selector: 'app-eliminar-curso',
  templateUrl: './eliminar-curso.component.html',
  styleUrls: ['./eliminar-curso.component.scss']
})
export class EliminarCursoComponent {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
              public dialog: MatDialogRef<any>,
              private cursoService: CursoService) { }

  eliminar() {
    this.cursoService.eliminarCurso(this.data.curso.id)
      .subscribe(resp => {
        window.location.reload();
      });
  }

}
