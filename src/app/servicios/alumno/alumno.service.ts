import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlumnoService {

  http = inject(HttpClient);

  constructor() { }

  getAlumno(){
    return this.http.get<any[]>("https://api.github.com/users/GGomez98");
  }
}