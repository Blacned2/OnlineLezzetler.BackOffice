import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Employee } from 'src/app/models/employee';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-employee-modal',
  templateUrl: './employee-modal.component.html',
})
export class EmployeeModalComponent implements OnInit {

  @Output() newItemEvent = new EventEmitter<string>();
  @Input() item: Employee = {
    address: null,
    birthDate: null,
    employeeCityID: null,
    employeeID: null,
    firstName: null,
    hiredDate: null,
    lastName: null,
    notes: null,
    phone: null,
    photoPath: null,
    salary: null,
    title: null
  };
  @Input() deleteProcess: boolean = false;

  constructor(private httpClient: HttpClient, private modalService: NgbModal) { }

  ngOnInit(): void {
  }

  onSubmit(data: Employee) {
    if (this.item.employeeID > 0 &&
      this.item.firstName !== '' &&
      this.item.lastName !== '' &&
      this.item.phone !== '' &&
      this.item.title !== '' &&
      this.item.address !== '') {
      if (data.firstName !== '' &&
        data.lastName !== '' &&
        data.phone !== '' &&
        data.title !== '' &&
        data.address !== '') {
        this.httpClient.put<Employee>(environment.employeeUrl, data).subscribe((result) => {
          this.modalService.dismissAll();
          this.newItemEvent.emit();
        })
      } else {
        alert('Not allowed to leave it as empty')
      }
    } else {
      if (this.deleteProcess == true) {
        this.httpClient.delete(environment.employeeUrl + this.item.employeeID).subscribe(() => {
          this.modalService.dismissAll();
          this.newItemEvent.emit();
        })
      } else {
        alert(`Does'nt fount !`);
      }
    }
  }

  onPostSubmit(data: Employee) {
    if (this.item.employeeID == null) {
      if (data.firstName !== '' &&
        data.lastName !== '' &&
        data.phone !== '' &&
        data.title !== '' &&
        data.address !== '') {
        this.httpClient.post(environment.employeeUrl, data).subscribe(() => {
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
