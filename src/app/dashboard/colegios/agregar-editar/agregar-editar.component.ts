import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ColegioService } from '../../../services/colegio.service';

@Component({
  selector: 'app-agregar-editar',
  templateUrl: './agregar-editar.component.html',
  styleUrls: ['./agregar-editar.component.scss']
})
export class AgregarEditarComponent implements OnInit {

  miFormulario: FormGroup = this.fb.group({
    name_colegio: ['', [Validators.required]]
  })

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
              public dialog: MatDialogRef<any>,
              private fb: FormBuilder,
              private colegioService: ColegioService) { }

  ngOnInit(): void {
    this.miFormulario.reset({
      name_colegio: this.data.datos?.name || ''
    })

  }

  agregarEditar() {
    if (this.data.title === 'Agregar') {
      this.colegioService.agregarColegio(this.miFormulario.get('name_colegio')?.value)
        .subscribe(resp => {
          window.location.reload();
        })
    } else if (this.data.title === 'Editar') {
      this.colegioService.editarColegio(this.data.datos.id, this.miFormulario.get('name_colegio')?.value)
        .subscribe(resp => {
          window.location.reload();
        })
    }
    
  }

}
