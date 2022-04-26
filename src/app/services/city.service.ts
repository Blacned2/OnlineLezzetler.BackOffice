import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { City } from '../models/city';

@Injectable({
  providedIn: 'root'
})
export class CityService {

  cities:Observable<City[]>;

  constructor(private httpClient:HttpClient) { }

  GetCity(id:number):Observable<City[]>{
    this.httpClient.get<Observable<City[]>>(environment.cityUrl+id).subscribe(data=>{
      this.cities = data;
    })
    return this.cities;
  }
}
