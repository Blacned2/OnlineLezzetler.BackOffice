import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core'; 
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { City } from 'src/app/models/city';
import { Country } from 'src/app/models/country';
import { Region } from 'src/app/models/region';
import { Supplier } from 'src/app/models/supplier';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-supplier',
  templateUrl: './supplier.component.html', 
})
export class SupplierComponent implements OnInit {

  cities:City[] = [];

  suppliers:Supplier[] = [];

  countries:Country[] = [];

  regions:Region[] = [];   

  selectedRegionID:number;selectedCityID:number;selectedCountryID:number;

  constructor(private httpClient:HttpClient,private modalService:NgbModal) { }

  ngOnInit(): void {
    this.getCountries();
  }

  getSuppliers(){
    this.suppliers = null;
    this.httpClient.get<Supplier[]>(environment.supplierGetUrl+this.selectedCityID).subscribe(data=>{
      this.suppliers = data;
    })
  }

  getCities(){ 
    this.httpClient.get<City[]>(environment.cityUrl+this.selectedRegionID).subscribe(data=>{
      this.cities = data;
    }) 
  }

  getCountries(){
    this.selectedRegionID = null;
    this.selectedCityID = null;
    this.httpClient.get<Country[]>(environment.countryUrl).subscribe(data=>{
      this.countries = data;
    })
  }

  getRegions(){
    this.selectedCityID = null;
    this.httpClient.get<Region[]>(environment.regionUrl+this.selectedCountryID).subscribe(data=>{
      this.regions = data;
    })
  }

  openXl(content) {
    this.modalService.open(content,{size:'lg',scrollable:true});
  }

}
