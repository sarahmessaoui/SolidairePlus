import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUrl = 'http://localhost/Script/user.php?endpoint=';

  constructor(private http: HttpClient) { }

  getListeComptes(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}listCompte`);
  }

  updateCompte(data: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}updateCompte`, data);
  }
  modifierDons(data: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}update`, data);
  }
  publierDon(data: any): Observable<any> {
    return this.http.post<any>('http://localhost/Script/user.php?endpoint=add', data);
  }
  getListeDons(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}list`);
  }
  updateDon(data: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}update`, data);
  }
}
