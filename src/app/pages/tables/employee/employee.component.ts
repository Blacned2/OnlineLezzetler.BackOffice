import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Employee } from 'src/app/models/employee';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
})
export class EmployeeComponent implements OnInit {

  constructor(private httpClient:HttpClient,private modalService:NgbModal) { }

  employees: Employee[] = [];

  ngOnInit(): void {
    this.getEmployees();
  }

  getEmployees(){
    this.httpClient.get<Employee[]>(environment.employeeUrl).subscribe(data=>{
      this.employees = data;
    })
  }

  openXl(content){
    this.modalService.open(content,{size:'lg',scrollable:true});
  }
}
