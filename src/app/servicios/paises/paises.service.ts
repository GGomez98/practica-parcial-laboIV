import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PaisesService {

  constructor(private http: HttpClient) { }

  getPaisesEuropa(){
    return this.http.get<any[]>("https://restcountries.com/v3.1/region/europe");
  }
  getPaisesAfrica(){
    return this.http.get<any[]>("https://restcountries.com/v3.1/region/africa");
  }
}
