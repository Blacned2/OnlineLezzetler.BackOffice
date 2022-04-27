import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Shipper } from 'src/app/models/shipper';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-shipper',
  templateUrl: './shipper.component.html',
  styleUrls: ['./shipper.component.scss']
})
export class ShipperComponent implements OnInit {

  shippers:Shipper[] = [];

  constructor(private httpClient:HttpClient,private modalService:NgbModal) { }

  ngOnInit(): void {
    this.getShippers();
  }

  getShippers(){
    this.httpClient.get<Shipper[]>(environment.shipperUrl).subscribe(data=>{
      this.shippers = data;
    })
  }

  openXl(content) {
    this.modalService.open(content, { size: 'xl' });
  }
}
