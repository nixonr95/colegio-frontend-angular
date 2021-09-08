import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { EstudianteService } from '../../../services/estudiante.service';

@Component({
  selector: 'app-eliminar-estudiante',
  templateUrl: './eliminar-estudiante.component.html',
  styleUrls: ['./eliminar-estudiante.component.scss']
})
export class EliminarEstudianteComponent {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
  public dialog: MatDialogRef<any>,
  private estudianteService: EstudianteService) { }

  eliminar() {
    this.estudianteService.eliminarEstudiante(this.data.datos.id)
    .subscribe(rep => {
      window.location.reload();
    });
  }

}
