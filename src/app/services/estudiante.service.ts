import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EstudianteService {

  baseUrl: string = environment.baseUrl;

  constructor(private http: HttpClient) { }

  getEstudiantes() {
    return this.http.get<any[]>(`${this.baseUrl}/estudiante/listar`);
  }

  agregarEstudiante(estudiante: string) {
    console.log(estudiante)
    return this.http.post<any>(`${this.baseUrl}/estudiante/agregar`, {name_estudiante: estudiante});
  }

  editarEstudiante(id: number ,estudiante: string) {
    return this.http.put<any>(`${this.baseUrl}/estudiante/${id}`, {name_estudiante: estudiante});
  }

  eliminarEstudiante(id: number) {
    return this.http.delete<any>(`${this.baseUrl}/estudiante/${id}`)
  }

}
