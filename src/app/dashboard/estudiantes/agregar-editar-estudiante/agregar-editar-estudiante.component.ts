import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { EstudianteService } from '../../../services/estudiante.service';

@Component({
  selector: 'app-agregar-editar-estudiante',
  templateUrl: './agregar-editar-estudiante.component.html',
  styleUrls: ['./agregar-editar-estudiante.component.scss']
})
export class AgregarEditarEstudianteComponent implements OnInit {

  miFormulario: FormGroup = this.fb.group({
    name_estudiante: ['', [Validators.required]]
  })

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
              public dialog: MatDialogRef<any>,
              private fb: FormBuilder,
              private estudianteService: EstudianteService) { }

  ngOnInit(): void {
    this.miFormulario.reset({
      name_estudiante: this.data.datos?.name || ''
    })

  }

  agregarEditar() {
    if (this.data.title === 'Agregar') {
      this.estudianteService.agregarEstudiante(this.miFormulario.get('name_estudiante')?.value)
        .subscribe(resp => {
          window.location.reload();
        })
    } else if (this.data.title === 'Editar') {
      this.estudianteService.editarEstudiante(this.data.datos.id, this.miFormulario.get('name_estudiante')?.value)
        .subscribe(resp => {
          window.location.reload();
        })
    }
    
  }

}
