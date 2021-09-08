import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ProfesorService } from '../../../services/profesor.service';

@Component({
  selector: 'app-agregar-editar-profesor',
  templateUrl: './agregar-editar-profesor.component.html',
  styleUrls: ['./agregar-editar-profesor.component.scss']
})
export class AgregarEditarProfesorComponent implements OnInit {

  miFormulario: FormGroup = this.fb.group({
    name_profesor: ['', [Validators.required]]
  })

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
              public dialog: MatDialogRef<any>,
              private fb: FormBuilder,
              private profesorService: ProfesorService) { }

  ngOnInit(): void {
    this.miFormulario.reset({
      name_profesor: this.data.datos?.name || ''
    })

  }

  agregarEditar() {
    if (this.data.title === 'Agregar') {
      this.profesorService.agregarProfesor(this.miFormulario.get('name_profesor')?.value)
        .subscribe(resp => {
          window.location.reload();
        })
    } else if (this.data.title === 'Editar') {
      this.profesorService.editarProfesor(this.data.datos.id, this.miFormulario.get('name_profesor')?.value)
        .subscribe(resp => {
          window.location.reload();
        })
    }
    
  }

}
