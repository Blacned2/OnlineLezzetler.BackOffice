import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Country } from 'src/app/models/country';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-country-modal',
  templateUrl: './country-modal.component.html',
})
export class CountryModalComponent implements OnInit {

  @Output() newItemEvent = new EventEmitter<string>();
  @Input() item: Country = { countryID: null, countryName: null, countryShortName: null };
  @Input() deleteProcess: boolean = false; 

  constructor(private httpClient:HttpClient,private modalService:NgbModal) { }

  ngOnInit(): void {
  }

  onSubmit(data: Country) {
    if (this.item.countryID > 0 && this.item.countryName !== '' && this.item.countryShortName !== '') {
      if (data.countryName !== '' && data.countryShortName !== '') {
        this.httpClient.put<Country>(environment.countryUrl, data).subscribe((result) => {
          this.modalService.dismissAll();
          this.newItemEvent.emit();
        })
      } else {
        alert('Not allowed to leave it as empty')
      }
    } else {
      if (this.deleteProcess == true) {
        this.httpClient.delete(environment.countryUrl + this.item.countryID).subscribe(() => {
          this.modalService.dismissAll();
          this.newItemEvent.emit();
        })
      } else {
        alert(`Does'nt fount !`);
      }
    }
  }

  onPostSubmit(data: Country) {
    if (this.item.countryID == null) {
      if (data.countryName !== '' && data.countryShortName !== '') {
        this.httpClient.post(environment.countryUrl, data).subscribe(() => {
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
