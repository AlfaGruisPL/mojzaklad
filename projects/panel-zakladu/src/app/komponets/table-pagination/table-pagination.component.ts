import { Component, EventEmitter, Input, Output } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NgbPagination } from "@ng-bootstrap/ng-bootstrap";
import { FormsModule } from "@angular/forms";

@Component({
  selector: "app-table-pagination",
  standalone: true,
  imports: [CommonModule, NgbPagination, FormsModule],
  templateUrl: "./table-pagination.component.html",
  styleUrls: ["./table-pagination.component.scss"]
})
export class TablePaginationComponent {
  @Input({ required: true })
  page: number = 0;

  @Input()
  collectionSize = 0;

  @Input()
  pageSize = 0;

  @Output()
  pageSizeChange = new EventEmitter<number>();

  @Output()
  pageChange = new EventEmitter<number>();

  @Input()
  recordOnPage = 10;

  @Output()
  recordOnPageChange = new EventEmitter<number>();

  pageCount(): number {
    return Math.ceil(this.collectionSize / this.pageSize);
  }
}
