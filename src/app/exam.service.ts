import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExamService {
  private apiUrl = 'http://localhost:3000/exams'; // Cambia esto según tu configuración

  constructor(private http: HttpClient) {}

  getExams(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  // Métodos para crear, actualizar y eliminar exámenes
}
