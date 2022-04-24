import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Category } from 'src/app/models/category';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  encapsulation: ViewEncapsulation.None
})
export class CategoryComponent implements OnInit {

  closeResult: string;

  catId: number = 0;  

  constructor(private httpClient: HttpClient, private modalService: NgbModal) { }

  categories: Category[] = [];

  singleCategory: Category = { categoryID: 0, categoryName: '', description: '' };

  ngOnInit(): void {
    this.getCategories();
  }

  getCategories() {
    this.httpClient.get<Category[]>(environment.categoryUrl).subscribe((data) => {
      this.categories = data;
    });
  }

  openWindowCustomClass(content, id: number) {

    this.modalService.open(content, { windowClass: 'dark-modal', animation: true });
    this.httpClient.get<Category>(environment.categoryUrl + id).subscribe(data => {
      this.singleCategory = data;
      this.catId = id;
    });
  }

  openXl(content) {
    this.modalService.open(content, { size: 'xl' });
  }
 
}
