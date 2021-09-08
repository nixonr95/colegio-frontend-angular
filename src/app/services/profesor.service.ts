import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProfesorService {

  baseUrl: string = environment.baseUrl;

  constructor(private http: HttpClient) { }

  getProfesores() {
    return this.http.get<any[]>(`${this.baseUrl}/profesor/listar`);
  }

  agregarProfesor(profesor: string) {
    return this.http.post<any>(`${this.baseUrl}/profesor/agregar`, {name_profesor: profesor});
  }

  editarProfesor(id: number, profesor: string) {
    return this.http.put<any>(`${this.baseUrl}/profesor/${id}`, {name_profesor: profesor});
  }

  eliminarProfesor(id: number) {
    return this.http.delete<any>(`${this.baseUrl}/profesor/${id}`)
  }
  
}
