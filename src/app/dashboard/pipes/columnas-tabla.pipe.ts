import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'columnasTabla'
})
export class ColumnasTablaPipe implements PipeTransform {

  transform(titulo: string, tipo: string ): any {
    if(tipo === 'colegio'){
      switch (titulo) {
        case 'id':
          return 'Id';
        
        case 'name':
          return 'Colegio';
      
        default:
          return titulo;
      }
    }

    if(tipo === 'estudiante'){
      switch (titulo) {
        case 'id':
          return 'Id';
        
        case 'name':
          return 'Estudiante';
      
        default:
          return titulo;
      }
    }

    if(tipo === 'profesor'){
      switch (titulo) {
        case 'id':
          return 'Id';
        
        case 'name':
          return 'Profesor';
      
        default:
          return titulo;
      }
    }

  }

}
