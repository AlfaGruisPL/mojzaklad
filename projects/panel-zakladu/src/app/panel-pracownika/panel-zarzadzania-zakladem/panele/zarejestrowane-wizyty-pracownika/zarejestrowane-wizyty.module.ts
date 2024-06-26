import { NgModule } from '@angular/core';
import {
  NgbDropdown,
  NgbDropdownItem,
  NgbDropdownMenu,
  NgbDropdownToggle,
  NgbPagination,
} from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ZarejestrowaneWizytyRoutingModule } from './zarejestrowane-wizyty-routing.module';
import { ZarejestrowaneWizytyPracownikaComponent } from './zarejestrowane-wizyty-pracownika.component';
import { ZarejestrowaneWizytyTabelaComponent } from './zarejestrowane-wizyty-tabela/zarejestrowane-wizyty-tabela.component';
import { KalendarzKomponentModule } from '../../kalendarz-komponent/kalendarz-komponent.module';
import { CommonModule } from '@angular/common';
import { TablePaginationComponent } from '../../../../komponets/table-pagination/table-pagination.component';
import { TableComponent } from '../../../../komponets/table/table.component';
import { TemplateIdDirective } from '../../../../komponets/table/template-id.directive';
import { TabelaPrzerwComponent } from './tabela-przerw/tabela-przerw.component';

@NgModule({
  declarations: [ZarejestrowaneWizytyPracownikaComponent, ZarejestrowaneWizytyTabelaComponent],
  imports: [
    CommonModule,
    KalendarzKomponentModule,
    NgbPagination,
    NgbDropdown,
    NgbDropdownItem,
    NgbDropdownMenu,
    NgbDropdownToggle,
    FormsModule,
    FontAwesomeModule,
    ZarejestrowaneWizytyRoutingModule,
    TablePaginationComponent,
    TableComponent,
    TemplateIdDirective,
    TabelaPrzerwComponent,
  ],
})
export class ZarejestrowaneWizytyModule {}
