import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ListonoszService } from '../../../../../serwisy/listonosz.service';
import { Drzwi } from '../../../../../enum/drzwi';
import { ZarejestrujSieService } from '../../zarejestrujSie.service';

@Component({
  selector: 'app-wybor-pracownika',
  templateUrl: './wybor-pracownika.component.html',
  styleUrls: [
    './wybor-pracownika.component.scss',
    '../../formularz-zarejestruj-sie.component.scss',
  ],
})
export class WyborPracownikaComponent implements OnInit {
  @Output() wyslijKrok = new EventEmitter<number>();

  pracownicy = [];

  ngOnInit() {
    this.listonosz
      .pobierz(Drzwi.listaPracownikowRejestracja)
      .then((listaPracownikow) => {
        this.pracownicy = listaPracownikow;
      });
  }

  constructor(
    public listonosz: ListonoszService,
    public ZarejestrujSieService: ZarejestrujSieService
  ) {}

  public przejdzDalej() {
    this.wyslijKrok.emit(2);
  }
}
