import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Shipper } from 'src/app/models/shipper';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-shipper-modal',
  templateUrl: './shipper-modal.component.html',
})
export class ShipperModalComponent implements OnInit {

  @Output() newItemEvent = new EventEmitter<string>();
  @Input() item: Shipper = { companyName: null, phone: null, shipperID: null };
  @Input() deleteProcess: boolean = false;

  constructor(private httpClient: HttpClient, private modalService: NgbModal) { }

  ngOnInit(): void {
  }

  onSubmit(data: Shipper) {
    if (this.item.shipperID == null) {
      if (data.companyName !== '' && data.phone != null) {
        this.httpClient.post(environment.shipperUrl, data).subscribe(() => { 
          this.modalService.dismissAll();
          this.newItemEvent.emit();
        })
      } else {
        alert('You did not fill correctly')
      }
    }else if(this.deleteProcess){
      this.httpClient.delete(environment.shipperUrl + this.item.shipperID).subscribe(() => {
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

}
