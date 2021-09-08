import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Colegio } from '../interfaces/colegio.interface';

@Injectable({
  providedIn: 'root'
})
export class ColegioService {

  baseUrl: string = environment.baseUrl;

  constructor(private http: HttpClient) { }

  getColegios() {
    return this.http.get<any[]>(`${this.baseUrl}/colegio/listar`);
  }

  agregarColegio(colegio: string) {
    return this.http.post<any>(`${this.baseUrl}/colegio/agregar`, {name_colegio: colegio});
  }

  editarColegio(id: number ,colegio: string) {
    return this.http.put<any>(`${this.baseUrl}/colegio/${id}`, {name_colegio: colegio});
  }

  eliminarColegio(id: number) {
    return this.http.delete<any>(`${this.baseUrl}/colegio/${id}`)
  }

}
