import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Category } from 'src/app/models/category';
import { environment } from 'src/environments/environment';

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
  
  onSubmit(data: Category) {
    if (this.item.categoryID > 0 && this.item.categoryName !== '' && this.item.description !== '') {
      if(data.categoryName !== '' && data.description !== '') {
        this.httpClient.put<Category>(environment.categoryUrl + this.item.categoryID, data).subscribe((result) => {
          this.modalService.dismissAll();
          this.newItemEvent.emit();
        }) 
      }else{
        alert('Not allowed to leave it as empty')
      }
    } else {
      if (this.deleteProcess == true) {
        this.httpClient.delete(environment.categoryUrl + this.item.categoryID).subscribe(() => {
          this.modalService.dismissAll();
          this.newItemEvent.emit();
        })
      } else {
        alert(`Does'nt fount !`);
      }
    }
  }

  onPostSubmit(data: Category) {
    if (this.item.categoryID == null) {
      if (data.categoryName !== '' && data.description !== '') {
        this.httpClient.post(environment.categoryUrl, data).subscribe(() => {
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
