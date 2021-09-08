import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Asignatura } from '../interfaces/asignatura.interface';

@Injectable({
  providedIn: 'root'
})
export class AsignaturasService {

  baseUrl: string = environment.baseUrl;

  constructor(private http: HttpClient) { }

  getAsignaturas() {
    return this.http.get<any[]>(`${this.baseUrl}/asignatura/listar`);
  }

  getAsignaturaById(id: number) {
    return this.http.get<any>(`${this.baseUrl}/asignatura/${id}`);
  }

  agregarAsignatura(asignatura: Asignatura) {
    // const body: Asignatura = {
    //   salon: asignatura.salon,
    //   grado: curso.grado,
    //   id_colegio: curso.id_colegio
    // }
    // return this.http.post<any>(`${this.baseUrl}/asignatura/agregar`, body);
  }

  editarAsignatura(id: number, asignatura: Asignatura) {
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
