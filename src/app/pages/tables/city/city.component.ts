import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs';
import { City } from 'src/app/models/city';
import { Country } from 'src/app/models/country';
import { Region } from 'src/app/models/region';
import { CityService } from 'src/app/services/city.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html'
})
export class CityComponent implements OnInit {

  constructor(
    private httpClient: HttpClient,
    private modalService: NgbModal,
    private cityService: CityService
  ) { }

  selectedCountryID: number;

  selectedRegionID: number;

  countries: Country[];

  regions: Region[];

  cities: City[]; 

  ngOnInit(): void {
    this.getCountries();
  }


  getCities() {
    this.cities = null;
    this.httpClient.get<City[]>(environment.cityUrl+this.selectedRegionID).subscribe((data) => {
      this.cities = data;
    })
  } 
 
  getCountries() {
    this.httpClient.get<Country[]>(environment.countryUrl).subscribe((data) => {
      this.countries = data;
    })
  }


  getRegions() {
    this.regions = null;
    this.httpClient.get<Region[]>(environment.regionUrl + this.selectedCountryID).subscribe(data => {
      this.regions = data; 
    })
  }

  openXl(content) {
    this.modalService.open(content, { size: 'xl' });
  }

}
