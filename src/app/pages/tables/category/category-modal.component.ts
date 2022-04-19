import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Category } from 'src/app/models/category';

@Component({
  selector: 'app-category-modal',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './category-modal.component.html'
})
export class CategoryModalComponent implements OnInit {

  @Output() newItemEvent = new EventEmitter<string>();
  @Input() item: Category = { categoryID: null, categoryName: null, description: null };
  @Input() deleteProcess: boolean = false;

  constructor(private httpClient: HttpClient, private modalService: NgbModal) { }

  ngOnInit(): void {
  }

  categoryUrl = 'https://localhost:44310/api/Category/';

  onSubmit(data: Category) {
    if (data.categoryID > 0 && data.categoryName !== '' && data.description !== '') {
      this.httpClient.put<Category>(this.categoryUrl + this.item.categoryID, data).subscribe(() => {
        this.modalService.dismissAll();
        this.newItemEvent.emit();
      })
    } else {
      if (this.deleteProcess == true) {
        this.httpClient.delete(this.categoryUrl + this.item.categoryID).subscribe(() => {
          this.modalService.dismissAll();
          this.newItemEvent.emit();
        })
      } else {
        alert('Sa');
      }
    }
  }

  onPostSubmit(data: Category) {
    if (this.item.categoryID == null) {
      if (data.categoryName !== '' && data.description !== '') {
        this.httpClient.post(this.categoryUrl, data).subscribe(() => {
          this.modalService.dismissAll();
          this.newItemEvent.emit();
        })
      }else{
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
