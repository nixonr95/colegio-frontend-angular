import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Colegio } from '../../interfaces/colegio.interface';
import { ColegioService } from '../../services/colegio.service';
import { AgregarEditarComponent } from './agregar-editar/agregar-editar.component';

@Component({
  selector: 'app-colegios',
  templateUrl: './colegios.component.html',
  styleUrls: ['./colegios.component.scss']
})
export class ColegiosComponent implements OnInit {

  displayedColumns: string[] = ['id', 'name', 'Acción']
  dataTable!: Colegio[];

  constructor(private colegioService: ColegioService,
              public dialog: MatDialog) {
    this.colegioService.getColegios()
    .subscribe( resp => {
      this.dataTable = resp.map( colegio => {
        return {id: colegio.id_colegio, name: colegio.name_colegio}; 
      })
      // console.log(this.dataTable)
    })
   }

  ngOnInit(): void {
   
  }

  agregar(title: string) {
    this.dialog.open(AgregarEditarComponent, {
      data: {
        title
      }
    })
  }

}
