import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Country } from 'src/app/models/country';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html', 
})
export class CountryComponent implements OnInit {

  countries:Country[] = [];

  constructor(private modalService:NgbModal,private httpClient:HttpClient) { }

  ngOnInit(): void {
    this.getCountries();
  }

  openXl(content) {
    this.modalService.open(content, { size: 'xl' });
  }

  getCountries(){
    this.httpClient.get<Country[]>(environment.countryUrl).subscribe(data=>{
      this.countries = data;
    })
  }

}
