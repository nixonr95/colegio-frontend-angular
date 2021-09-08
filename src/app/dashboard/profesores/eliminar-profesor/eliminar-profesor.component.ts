import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ProfesorService } from '../../../services/profesor.service';

@Component({
  selector: 'app-eliminar-profesor',
  templateUrl: './eliminar-profesor.component.html',
  styleUrls: ['./eliminar-profesor.component.scss']
})
export class EliminarProfesorComponent {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
              public dialog: MatDialogRef<any>,
              private profesorService: ProfesorService) { }

  eliminar() {
    this.profesorService.eliminarProfesor(this.data.datos.id)
      .subscribe(resp => {
        window.location.reload();
      });
  }

}
