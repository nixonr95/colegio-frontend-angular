import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Curso } from '../interfaces/curso.interface';

@Injectable({
  providedIn: 'root'
})
export class CursoService {

  baseUrl: string = environment.baseUrl;

  constructor(private http: HttpClient) { }

  getCursos() {
    return this.http.get<any[]>(`${this.baseUrl}/curso/listar`);
  }

  getCursoById(id: number) {
    return this.http.get<Curso>(`${this.baseUrl}/curso/${id}`);
  }

  agregarCurso(curso: Curso) {
    const body: Curso = {
      salon: curso.salon,
      grado: curso.grado,
      id_colegio: curso.id_colegio
    }
    return this.http.post<any>(`${this.baseUrl}/curso/agregar`, body);
  }

  editarCurso(id: number, curso: Curso) {
    const body: Curso = {
      salon: curso.salon,
      grado: curso.grado,
      id_colegio: curso.id_colegio
    }
    return this.http.put<any>(`${this.baseUrl}/curso/${id}`, body);
  }

  eliminarCurso(id: number) {
    return this.http.delete<any>(`${this.baseUrl}/curso/${id}`)
  }
  
}
