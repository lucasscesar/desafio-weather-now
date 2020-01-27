import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";
import { environment } from '../../../environments/environment';
import { City } from '../../models/city.model';

@Injectable({
  providedIn: 'root'
})
export class CityService {
  constructor(private http: HttpClient) { }

  getCityById(id: string): Observable<City> {
    return this.http.get<City>(`${environment.CITY_BY_ID}&id=${id}`);
  }
}