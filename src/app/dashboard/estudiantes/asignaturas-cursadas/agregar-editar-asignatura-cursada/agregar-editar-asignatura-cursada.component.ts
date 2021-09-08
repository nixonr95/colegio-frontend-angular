import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AsignaturaCursada } from 'src/app/interfaces/asignaturaCursada';
import { AsignaturasService } from 'src/app/services/asignaturas.service';
import { Asignatura } from '../../../../interfaces/asignatura.interface';
import { AsignaturasCursadasService } from '../../../../services/asignaturas-cursadas.service';

@Component({
  selector: 'app-agregar-editar-asignatura-cursada',
  templateUrl: './agregar-editar-asignatura-cursada.component.html',
  styleUrls: ['./agregar-editar-asignatura-cursada.component.scss']
})
export class AgregarEditarAsignaturaCursadaComponent implements OnInit {

  asignaturaCursada!: AsignaturaCursada;
  asignaturas: Asignatura[] = [];
  miFormulario: FormGroup = this.fb.group({
    asignatura: ['', [Validators.required]]
  })

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
              public dialog: MatDialogRef<any>,
              private fb: FormBuilder,
              private asignaturaService: AsignaturasService,
              private asignaturasCursadasService: AsignaturasCursadasService) { }

  ngOnInit(): void {
    
    this.asignaturaService.getAsignaturas()
      .subscribe(resp => {
        this.asignaturas = resp.map( asignatura => {
          return {
            id: asignatura.id_asignatura,
            id_curso: asignatura.id_curso,
            id_profesor: asignatura.id_profesor,
            name: asignatura.name_asignatura
          };
        })

      })

    this.miFormulario.reset({
      asignatura: this.data.asignatura?.name || ''
    })
  }

  agregarEditar() {
    if (this.data.title === 'Agregar') {
      console.log(this.miFormulario.get('asignatura')?.value)
      console.log(this.data.id_estudiante)
      
      this.asignaturasCursadasService.agregarAsignaturaCursada(this.miFormulario.get('asignatura')?.value, this.data.id_estudiante)
        .subscribe(resp => {
          console.log(resp)
          // window.location.reload();
        })
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
