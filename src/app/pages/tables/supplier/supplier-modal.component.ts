import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'; 
import { NgbModal } from '@ng-bootstrap/ng-bootstrap'; 
import { City } from 'src/app/models/city';
import { Country } from 'src/app/models/country';
import { Region } from 'src/app/models/region';
import { Supplier } from 'src/app/models/supplier';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-supplier-modal',
  templateUrl: './supplier-modal.component.html',
})
export class SupplierModalComponent implements OnInit {

  @Output() newItemEvent = new EventEmitter<string>();
  @Input() item: Supplier = { address: null, cityID: null, companyName: null, contactName: null, fax: null, homePage: null, phone: null, supplierID: null };
  @Input() deleteProcess: boolean = false;

  cities: City[] = [];

  regions: Region[] = [];

  countries: Country[] = [];

  suppliers: Supplier[] = []; 

  selectedCountryID: string; selectedRegionID: string; selectedCityID: string;

  constructor(private httpClient: HttpClient, public modalService: NgbModal) { }

  ngOnInit(): void {
    this.getCountries();
  }

  getCountries() {
    this.selectedRegionID = null;
    this.selectedCityID = null;
    this.httpClient.get<Country[]>(environment.countryUrl).subscribe(data => {
      this.countries = data;
      console.log(this.countries);
    })
  }

  getRegions() {
    this.selectedCityID = null;
    this.httpClient.get<Region[]>(environment.regionUrl + this.selectedCountryID).subscribe(data => {
      this.regions = data;
    })
  }

  getCities() {
    this.httpClient.get<City[]>(environment.cityUrl + this.selectedRegionID).subscribe(data => {
      this.cities = data;
    })
  }

  getSuppliers() {
    this.suppliers = null;
    this.httpClient.get<Supplier[]>(environment.supplierGetUrl + this.selectedCityID).subscribe(data => {
      this.suppliers = data;
    })
  }

  openXl(content) {
    this.modalService.open(content, { scrollable: true })
  }

  closeModal() {
    this.modalService.dismissAll();
  }

  onSubmit(data: Supplier) {
    this.httpClient.put(environment.supplierUrl+this.item.supplierID,data).subscribe(()=>{
      this.modalService.dismissAll();
      this.newItemEvent.emit();
    })
  }

  onDelete(){
    this.httpClient.delete(environment.supplierUrl+this.item.supplierID).subscribe(()=>{
      this.modalService.dismissAll();
      this.newItemEvent.emit();
    })
  }

  onPostSubmit(data: Supplier) {
    this.httpClient.post(environment.supplierUrl,data).subscribe(()=>{
      this.modalService.dismissAll();
      this.newItemEvent.emit();
    })
  }
}
