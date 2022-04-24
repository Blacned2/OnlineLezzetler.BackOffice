import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Country } from 'src/app/models/country';
import { Region } from 'src/app/models/region';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-regions-modal',
  templateUrl: './regions-modal.component.html'
})
export class RegionsModalComponent implements OnInit {

  @Output() newItemEvent = new EventEmitter<string>();
  @Input() item: Region = { countryID: null, regionDescription: null, regionID: null };
  @Input() deleteProcess: boolean = false;

  selectedCountryID: number;

  countries: Country[]; 

  constructor(private httpClient:HttpClient,private modalService:NgbModal) { }

  ngOnInit(): void {
    this.getCountries(); 
  } 

  onSubmit(data: Region) {
    if (this.item.regionID == null) {
      data.countryID = this.selectedCountryID;
      if (data.regionDescription !== '' && data.countryID != null) {
        this.httpClient.post(environment.regionPostUrl, data).subscribe(() => { 
          this.modalService.dismissAll();
          this.newItemEvent.emit();
        })
      } else {
        alert('You did not fill correctly')
      }
    }else if(this.deleteProcess){
      this.httpClient.delete(environment.regionPostUrl + this.item.regionID).subscribe(() => {
        this.modalService.dismissAll();
        this.newItemEvent.emit();
      })
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

  

}
