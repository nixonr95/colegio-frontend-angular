import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ColegioService } from 'src/app/services/colegio.service';

@Component({
  selector: 'app-eliminar',
  templateUrl: './eliminar.component.html',
  styleUrls: ['./eliminar.component.scss']
})
export class EliminarComponent {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
              public dialog: MatDialogRef<any>,
              private colegioService: ColegioService) { }

  eliminar() {
    this.colegioService.eliminarColegio(this.data.datos.id)
      .subscribe(resp => {
        window.location.reload();
      });
  }

}
