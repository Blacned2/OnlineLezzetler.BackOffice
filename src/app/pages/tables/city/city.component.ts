import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { City } from 'src/app/models/city';
import { Country } from 'src/app/models/country';
import { Region } from 'src/app/models/region';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html'
})
export class CityComponent implements OnInit {

  constructor(private httpClient: HttpClient, private modalService: NgbModal) { }

  switcher: boolean = true;

  searchString: string | unknown;

  searchedCountries: Country[] = null;

  searchedRegions: Region[];

  selectedCountry:number;

  selectedRegion: number;

  countries: Country[];

  regions: Region[];

  cities: City[];

  cityUrl: string = 'https://localhost:44310/api/City/';

  countryUrl: string = 'https://localhost:44310/api/Country/';

  regionSrcUrl: string = 'https://localhost:44310/api/Region/Search';

  ngOnInit(): void {
    this.getCities();
    this.getCountries();
  }

  getCities() {
    this.httpClient.get<City[]>(this.cityUrl).subscribe((data) => {
      this.cities = data;
    })
  } 

  getCountries() {
    this.httpClient.get<Country[]>(this.countryUrl).subscribe((data) => {
      this.countries = data;
    })
  }

  getRegions(number:number) {
    this.httpClient.post<Region[]>(this.regionSrcUrl,number).subscribe((data) => {
      this.regions = data; 
    })
  }

  openXl(content) {
    this.modalService.open(content, { size: 'xl' });
  }

}
