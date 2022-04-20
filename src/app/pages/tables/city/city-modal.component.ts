import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { City } from 'src/app/models/city';

@Component({
  selector: 'app-city-modal',
  templateUrl: './city-modal.component.html'
})
export class CityModalComponent implements OnInit {

  @Output() newItemEvent = new EventEmitter<string>();
  @Input() item: City = {cityID:null,cityName:null,postalCode:null,regionName:null};
  @Input() deleteProcess: boolean = false;

  cityUrl = 'https://localhost:44310/api/City/';

  constructor(private httpClient:HttpClient,private modalService:NgbModal) { }

  ngOnInit(): void {
  }

  onSubmit(data: City) {
    if (this.item.cityID > 0 && this.item.cityName !== '' && this.item.postalCode !== '' && this.item.regionName) {
      if(data.cityName !== '' && data.regionName !== '' && data.postalCode !== '') {
        this.httpClient.put<City>(this.cityUrl + this.item.cityID, data).subscribe((result) => {
          this.modalService.dismissAll();
          this.newItemEvent.emit();
        }) 
      }else{
        alert('Not allowed to leave it as empty')
      }
    } else {
      if (this.deleteProcess == true) {
        this.httpClient.delete(this.cityUrl + this.item.cityID).subscribe(() => {
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
      if (data.cityName !== '' && data.regionName !== '' && data.postalCode !== '') {
        this.httpClient.post(this.cityUrl, data).subscribe(() => {
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

}
