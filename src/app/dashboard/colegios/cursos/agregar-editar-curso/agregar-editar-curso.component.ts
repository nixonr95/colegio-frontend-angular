import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CursoService } from '../../../../services/curso.service';
import { Curso } from '../../../../interfaces/curso.interface';

@Component({
  selector: 'app-agregar-editar-curso',
  templateUrl: './agregar-editar-curso.component.html',
  styleUrls: ['./agregar-editar-curso.component.scss']
})
export class AgregarEditarCursoComponent implements OnInit {

  curso!: Curso;
  miFormulario: FormGroup = this.fb.group({
    grado: ['', [Validators.required]],
    salon: ['', [Validators.required]]
  })

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
              public dialog: MatDialogRef<any>,
              private fb: FormBuilder,
              private cursoService: CursoService) { }

  ngOnInit(): void {
    this.miFormulario.reset({
      grado: this.data.curso?.grado || '',
      salon: this.data.curso?.salon || ''
    })
  }

  agregarEditar() {
    if (this.data.title === 'Agregar') {
      this.curso = {
        salon: this.miFormulario.get('salon')?.value,
        grado: this.miFormulario.get('grado')?.value,
        id_colegio: this.data.id_colegio
      }
      this.cursoService.agregarCurso(this.curso)
        .subscribe(resp => {
          window.location.reload();
        })
    } else if (this.data.title === 'Editar') {
      this.curso = {
        salon: this.miFormulario.get('salon')?.value,
        grado: this.miFormulario.get('grado')?.value,
        id_colegio: this.data.curso?.id_colegio
      }
      this.cursoService.editarCurso(this.data.curso?.id ,this.curso)
        .subscribe(resp => {
          window.location.reload();
        })
    }
    
  }


}
