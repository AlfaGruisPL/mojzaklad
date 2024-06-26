import {Component} from '@angular/core';
import {DanePodstawoweService} from '../../../../../serwisy/dane-podstawowe.service';
import {FaIconsService} from "../../../../../serwisy/fa-icons.service";

@Component({
  selector: 'app-onas-kontakt',
  templateUrl: './onas-kontakt.component.html',
  styleUrls: [
    './onas-kontakt.component.scss',
    '../../informacja-onas.component.scss',
  ],
})
export class ONasKontaktComponent {
  constructor(public danePodstawowe_: DanePodstawoweService,
              public faIcons: FaIconsService) {
  }
}
