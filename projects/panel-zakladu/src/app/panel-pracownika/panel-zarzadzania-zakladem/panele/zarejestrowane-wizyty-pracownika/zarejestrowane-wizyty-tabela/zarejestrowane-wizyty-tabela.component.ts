import { Component, OnDestroy, OnInit } from '@angular/core';
import { Wizyta } from '../../../../../klasy/panelPracownika/wizyta';
import { ListonoszService } from '../../../../../serwisy/listonosz.service';
import { Drzwi } from '../../../../../enum/drzwi';
import { HttpParams } from '@angular/common/http';
import { debounceTime, skip, Subscription } from 'rxjs';
import { KalendarzZarzadzanieTerminemComponent } from '../../../kalendarz-komponent/kalendarz-zarzadzanie-terminem/kalendarz-zarzadzanie-terminem.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { KalendarzKomponentService } from '../../../kalendarz-komponent/kalendarz-komponent.service';
import { ZarzadzanieTerminemService } from '../../../kalendarz-komponent/kalendarz-zarzadzanie-terminem/zarzadzanie-terminem.service';

@Component({
  selector: 'app-zarejestrowane-wizyty-tabela',
  templateUrl: './zarejestrowane-wizyty-tabela.component.html',
  styleUrls: ['./zarejestrowane-wizyty-tabela.component.scss'],
})
export class ZarejestrowaneWizytyTabelaComponent implements OnInit, OnDestroy {
  filter = 'przyszle';
  pageSize = 15;
  wizyty: Array<Wizyta> = [];
  iloscWizytOgolna = 0;
  strona = 1;
  pobieranieDanych = false;
  wyszukiwarka = '';
  protected readonly Math = Math;
  private sub: undefined | Subscription;

  constructor(
    private listonosz: ListonoszService,
    private modal: NgbModal,
    public Kalendarz_: KalendarzKomponentService,
    public zarzadzanieTerminem_: ZarzadzanieTerminemService
  ) {}

  ngOnDestroy() {
    if (this.sub) {
      this.sub?.unsubscribe();
    }
  }

  serachChange(value: string) {
    this.wyszukiwarka = value;
    this.pobierzDane();
  }

  ngOnInit() {
    this.sub = this.Kalendarz_.wybranyPracownik.pipe(skip(1), debounceTime(200)).subscribe(id => {
      this.strona = 1;
      this.pobierzDane();
    });
    this.Kalendarz_.pobieranieDanychObservable.pipe(skip(1)).subscribe(k => {
      this.pobierzDane();
    });
  }

  public pobierzDane() {
    this.pobieranieDanych = true;
    let params = new HttpParams();
    params = params.append('filter', this.filter);
    params = params.append('page', this.strona);
    params = params.append('limit', this.pageSize);
    params = params.append('finder', this.wyszukiwarka);
    this.listonosz
      .pobierz(Drzwi.wizytyZakladu + '/' + this.Kalendarz_.wybranyPracownik.value, params)
      .then((dane: { dane: Array<Wizyta>; size: number; limit: number }) => {
        this.wizyty = [];
        for (let wizyta of dane.dane) {
          this.wizyty.push(new Wizyta(wizyta));
        }
        this.iloscWizytOgolna = dane.size;
      })
      .finally(() => {
        this.pobieranieDanych = false;
      });
  }

  zmianaFiltra() {
    this.pobierzDane();
  }

  napis(wizyta: Date) {
    if (
      wizyta.getDay() == new Date().getDay() &&
      wizyta.getMonth() == new Date().getMonth() &&
      wizyta.getFullYear() == new Date().getFullYear()
    ) {
      return 'Dziś';
    }
    return undefined;
  }

  zwrocDane(): Array<Wizyta> {
    return this.wizyty;
  }

  wyswietl(wizyta: Wizyta) {
    const okno = this.modal.open(KalendarzZarzadzanieTerminemComponent);
    okno.componentInstance.simple = true;
    okno.componentInstance.wizyta = wizyta;
  }

  cancleVisit(wizyta: Wizyta) {
    this.zarzadzanieTerminem_.cancelTheVisit(wizyta).then(data => {
      this.pobierzDane();
      this.Kalendarz_.pobierzDane({ silent: true });
    });
  }

  updateVisit(wizyta: Wizyta) {
    this.zarzadzanieTerminem_.modifyVisit(wizyta);
  }
}
