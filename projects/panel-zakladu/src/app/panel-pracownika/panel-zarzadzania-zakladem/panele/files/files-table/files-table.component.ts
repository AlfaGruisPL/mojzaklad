import { Component, ViewEncapsulation } from '@angular/core';
import { TableComponent } from '../../../../../komponets/table/table.component';
import { KwotaPipe } from '../../../../../rureczki/kwota.pipe';
import { TemplateIdDirective } from '../../../../../komponets/table/template-id.directive';
import { FilesService } from '../files.service';
import { DatePipe } from '@angular/common';
import { environment } from '../../../../../../environments/environment';
import { UploadFileComponent } from '../upload-file/upload-file.component';
import { ListonoszService } from '../../../../../serwisy/listonosz.service';
import { Drzwi } from '../../../../../enum/drzwi';
import { FileSizePipe } from '../../../../../rureczki/file-size.pipe';
import { NgbPopover } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-files-table',
  standalone: true,
  imports: [TableComponent, KwotaPipe, TemplateIdDirective, DatePipe, UploadFileComponent, FileSizePipe, NgbPopover],
  templateUrl: './files-table.component.html',
  styleUrl: './files-table.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class FilesTableComponent {
  env = environment;

  constructor(public files_: FilesService, public http_: ListonoszService) {}

  deleteImage(id: number) {
    this.http_
      .usun(Drzwi.deleteImage + '/' + id)
      .then(dane => {})
      .catch(() => {})
      .finally(() => {
        this.files_.FetchDataFromDB();
      });
  }
}