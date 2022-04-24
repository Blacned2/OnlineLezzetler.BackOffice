import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { City } from '../models/city';

@Injectable({
  providedIn: 'root'
})
export class CityService {

  cities:Observable<City[]>;

  cityByRegionIDUrl:string = 'https://localhost:44310/api/City/GetCityListByRegionID?id='; 

  constructor(private httpClient:HttpClient) { }

  GetCity(id:number):Observable<City[]>{
    this.httpClient.get<Observable<City[]>>(this.cityByRegionIDUrl+id).subscribe(data=>{
      this.cities = data;
    })
    return this.cities;
  }
}
