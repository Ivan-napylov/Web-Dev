import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Company, Vacansy } from './interfaces';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private BASE_URL = 'http://127.0.0.1:8000'; // твой Django сервер

  constructor(private http: HttpClient) {}

  getCompanies(): Observable<Company[]> {
    return this.http.get<Company[]>(`${this.BASE_URL}/companies/`);
  }

  getVacanciesByCompanyId(id: number): Observable<Vacansy[]> {
    return this.http.get<Vacansy[]>(`${this.BASE_URL}/companies/${id}/vacancies/`);
  }
}
