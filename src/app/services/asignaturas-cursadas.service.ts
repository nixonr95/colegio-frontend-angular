import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { AsignaturaCursada } from '../interfaces/asignaturaCursada';

@Injectable({
  providedIn: 'root'
})
export class AsignaturasCursadasService {

  baseUrl: string = environment.baseUrl;

  constructor(private http: HttpClient) { }

  getAsignaturasCursadas() {
    return this.http.get<any[]>(`${this.baseUrl}/asignatura-cursada/listar`);
  }

  agregarAsignaturaCursada(id_asignatura: number, id_estudiante: number) {
    const body = {
      id_asignatura,
      id_estudiante
    }
    return this.http.post<any>(`${this.baseUrl}/asignatura-cursada/agregar`, body);
  }

  editarAsignatura(id: number, asignaturaCursada: AsignaturaCursada) {
    // const body: Asignatura = {
    //   salon: curso.salon,
    //   grado: curso.grado,
    //   id_colegio: curso.id_colegio
    // }
    // return this.http.put<any>(`${this.baseUrl}/asignatura/${id}`, body);
  }

  eliminarAsignatura(id: number) {
    return this.http.delete<any>(`${this.baseUrl}/asignatura/${id}`)
  }
}
