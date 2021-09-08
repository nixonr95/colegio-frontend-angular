import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AsignaturasCursadasService } from '../../../../services/asignaturas-cursadas.service';

@Component({
  selector: 'app-eliminar-asignatura-cursada',
  templateUrl: './eliminar-asignatura-cursada.component.html',
  styleUrls: ['./eliminar-asignatura-cursada.component.scss']
})
export class EliminarAsignaturaCursadaComponent {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
              public dialog: MatDialogRef<any>,
              private asignaturaCursadaService: AsignaturasCursadasService) { }

  eliminar() {
    console.log(this.data)
    // this.cursoService.eliminarCurso(this.data.curso.id)
    //   .subscribe(resp => {
    //     window.location.reload();
    //   });
  }


}
