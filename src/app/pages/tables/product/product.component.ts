import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { City } from 'src/app/models/city';
import { Country } from 'src/app/models/country';
import { Product } from 'src/app/models/product';
import { Region } from 'src/app/models/region';
import { Supplier } from 'src/app/models/supplier';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  products: Product[] = [];

  cities: City[] = [];

  regions: Region[] = [];

  suppliers: Supplier[] = [];

  countries: Country[] = [];

  searchSupplierString: string = null;

  selectedCountryID: number; selectedRegionID: number; selectedCityID: number; selectedSupplierID: number;

  constructor(private httpClient: HttpClient, private modalService: NgbModal) { }

  ngOnInit(): void {
  }

  getCities() {
    this.httpClient.get<City[]>(environment.cityUrl+this.selectedRegionID).subscribe(data=>{
      this.cities = data;
    })
  }

  getRegions() {
    this.httpClient.get<Region[]>(environment.regionUrl+this.selectedCountryID).subscribe(data=>{
      this.regions = data;
    })
  }

  getCountries() {
    this.httpClient.get<Country[]>(environment.countryUrl).subscribe(data => {
      this.countries = data;
    })
  }

  getProducts() {

  }

  openXl(content) {
    this.modalService.open(content, { size: 'lg', scrollable: true });
  }

}
