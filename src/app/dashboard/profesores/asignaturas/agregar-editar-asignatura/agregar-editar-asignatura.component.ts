import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Asignatura } from 'src/app/interfaces/asignatura.interface';
import { Curso } from 'src/app/interfaces/curso.interface';
import { AsignaturasService } from '../../../../services/asignaturas.service';
import { CursoService } from '../../../../services/curso.service';

@Component({
  selector: 'app-agregar-editar-asignatura',
  templateUrl: './agregar-editar-asignatura.component.html',
  styleUrls: ['./agregar-editar-asignatura.component.scss']
})
export class AgregarEditarAsignaturaComponent implements OnInit {

  asignatura!: Asignatura;
  cursos: Curso[] = [];
  miFormulario: FormGroup = this.fb.group({
    name: ['', [Validators.required]],
    curso: ['', [Validators.required]]
  })

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
              public dialog: MatDialogRef<any>,
              private fb: FormBuilder,
              private asignaturaService: AsignaturasService,
              private cursoService: CursoService) { }

  ngOnInit(): void {
    
    this.cursoService.getCursos()
      .subscribe(resp => {
        this.cursos = resp.map( curso => {
          return {id: curso.id_curso, salon: curso.salon, grado: curso.grado, id_colegio: curso.id_colegio};
        })
  
        console.log(this.cursos)
      })

    this.miFormulario.reset({
      name: this.data.asignatura?.name || '',
      curso: this.data.asignatura?.name_curso || ''
    })
  }

  agregarEditar() {
    if (this.data.title === 'Agregar') {
      // this.asignatura = {
      //   salon: this.miFormulario.get('salon')?.value,
      //   grado: this.miFormulario.get('grado')?.value,
      //   id_colegio: this.data.id_colegio
      // }
      // this.asignaturaService.agregarAsignatura(this.asignatura)
      //   .subscribe(resp => {
      //     window.location.reload();
      //   })
    } else if (this.data.title === 'Editar') {
      // this.asignatura = {
      //   salon: this.miFormulario.get('salon')?.value,
      //   grado: this.miFormulario.get('grado')?.value,
      //   id_colegio: this.data.curso?.id_colegio
      // }
      // this.asignaturaService.editarAsignatura(this.data.curso?.id ,this.asignatura)
      //   .subscribe(resp => {
      //     window.location.reload();
      //   })
    }
  }

}
