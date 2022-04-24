import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { City } from 'src/app/models/city';
import { Country } from 'src/app/models/country';
import { Region } from 'src/app/models/region';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-city-modal',
  templateUrl: './city-modal.component.html'
})
export class CityModalComponent implements OnInit {

  @Output() newItemEvent = new EventEmitter<string>();
  @Input() item: City = { cityID: null, cityName: null, postalCode: null, regionName: null, regionID: null };
  @Input() deleteProcess: boolean = false; 

  selectedCountryID:number;

  selectedRegionID:number;
 
  countries: Country[];

  regions: Region[];   

  constructor(private httpClient: HttpClient, private modalService: NgbModal) { }

  ngOnInit(): void {
    this.getCountries()
  }

  onSubmit(data: City) {
    if (this.item.cityID > 0 && this.item.cityName !== '' && this.item.postalCode !== '' && this.item.regionName) {
      if (data.cityName !== '' && data.postalCode !== '') {
        this.selectedRegionID = data.regionID;
        this.httpClient.put<City>(environment.cityUrl + this.item.cityID, data).subscribe((result) => {
          this.modalService.dismissAll();
          this.newItemEvent.emit();
        })
      } else {
        alert('Not allowed to leave it as empty')
      }
    } else {
      if (this.deleteProcess == true) {
        this.httpClient.delete(environment.cityUrl + this.item.cityID).subscribe(() => {
          this.modalService.dismissAll();
          this.newItemEvent.emit();
        })
      } else {
        alert(`Does'nt fount !`);
      }
    }
  }

  onPostSubmit(data: City) {
    if (this.item.cityID == null) {
      data.regionID = this.selectedRegionID;
      if (data.cityName !== '' && data.postalCode !== '' && data.regionID != null) {
        this.httpClient.post(environment.cityUrl, data).subscribe(() => {
          this.modalService.dismissAll();
          this.newItemEvent.emit();
        })
      } else {
        alert('You did not fill correctly')
      }
    }
  }

  openXl(content) {
    this.modalService.open(content, { size: 'xl' })
  }

  closeModal() {
    this.modalService.dismissAll();
  }

  getCountries() {
    this.httpClient.get<Country[]>(environment.countryUrl).subscribe((data) => {
      this.countries = data; 
    })
  }

  getRegions(){
    this.regions = null;
    this.httpClient.get<Region[]>(environment.regionUrl+this.selectedCountryID).subscribe(data=>{
      this.regions = data; 
      console.log(this.regions)
    })
  }
}
