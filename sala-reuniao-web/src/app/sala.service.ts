import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SalaService {

  private baseUrl = 'http://localhost:8082/api/v1/salas';

  constructor(private http: HttpClient) { }

  getsala(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  criarSala(sala: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, sala);
  }

  atualizarSala(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deletarSala(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getListaSalas(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
}
