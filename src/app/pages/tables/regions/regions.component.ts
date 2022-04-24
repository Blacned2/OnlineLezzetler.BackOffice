import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Country } from 'src/app/models/country';
import { Region } from 'src/app/models/region';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-regions',
  templateUrl: './regions.component.html' 
})
export class RegionsComponent implements OnInit {

  constructor(private httpClient:HttpClient,private modalService:NgbModal) { }

  selectedCountryID:number;

  ngOnInit(): void {
    this.getCountries();
  }

  regions:Region[] = [];

  countries:Country[] = []; 

  getCountries() {
    this.httpClient.get<Country[]>(environment.countryUrl).subscribe((data) => {
      this.countries = data; 
    })
  }

  getRegions(){
    this.regions = null;
    this.httpClient.get<Region[]>(environment.regionUrl+this.selectedCountryID).subscribe(data=>{
      this.regions = data;
    })
  }

  openXl(content) {
    this.modalService.open(content, { size: 'xl' });
  }
}
