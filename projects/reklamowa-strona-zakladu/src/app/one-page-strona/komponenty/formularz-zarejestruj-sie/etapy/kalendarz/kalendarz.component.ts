import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {dniTygodnia, DzienTygodnia} from "./dzien-tygodnia";
import {Termin} from "./termin";

@Component({
  selector: 'app-kalendarz',
  templateUrl: './kalendarz.component.html',
  styleUrls: [
    './kalendarz.component.scss',
    '../../formularz-zarejestruj-sie.component.scss',
  ],
})
export class KalendarzComponent implements OnInit {
  @Output() wyslijKrok = new EventEmitter<number>();


  public godzinaRozpoczecia = 6;
  dni = dniTygodnia


  public przejdzDalej() {
    this.wyslijKrok.emit(4);
  }

  public cofnij() {
    this.wyslijKrok.emit(2);
  }

  godzina(index: number) {
    const data = new Date()
    data.setUTCHours(this.godzinaRozpoczecia, 0, 0, 0);
    const k = new Date(data.getTime() + (index * 60000 * 30))
    const godzina = k.getHours() < 10 ? '0' + k.getHours() : k.getHours();
    const minuta = k.getMinutes() < 10 ? '0' + k.getMinutes() : k.getMinutes();
    return godzina + ":" + minuta
  }

  czyCosWyswietlic(id: string, godzina: string, index: number) {
    if (id == 'pole_4_1') {
      // @ts-ignore
      document.getElementById(id).innerHTML = "<div class='termin'>tuu </div>"
    }
  }

  ngOnInit() {
    const k = new Termin();
    k.data = new Date(new Date().setUTCMonth(6, 14))
    k.poczatek = 11
    k.poczatekMinuty = 10
    k.koniec = 13
    k.koniecMinuty = 20
    this.terminy.push(k)
  }


  terminy = [new Termin()
  ]

  terminyNaDzien(data: DzienTygodnia): Array<any> {
    const tablica = this.terminy.filter(usluga => {
      if (usluga.data.getDate() == data.data.getDate()) {
        if (usluga.data.getFullYear() == data.data.getFullYear()) {
          if (usluga.data.getMonth() == data.data.getMonth()) {
            return true
          }
        }
      }
      return false
    })
    return tablica
  }

  dataKursos = new Date()

  public miesiac() {
    return this.dataKursos.getMonth() + 1
  }

  public tydzien() {
    return Math.ceil(this.dataKursos.getDate() / 7)
  }

  WPrawo() {
    this.dataKursos = new Date(new Date().setUTCMonth(this.miesiac() + 1))
    this.dni.forEach(k => {
      k.data = new Date(k.data.getTime() + 604800000)
      k.ustawDate()
    })
  }

  WLEWO() {
    this.dataKursos = new Date(new Date().setUTCMonth(this.miesiac() - 1))
    this.dni.forEach(k => {
      k.data = new Date(k.data.getTime() - 604800000)
      k.ustawDate()
    })
  }

}
