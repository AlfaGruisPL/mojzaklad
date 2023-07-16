import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {
  dniTygodnia,
  DzienTygodnia
} from "../../../../../../reklamowa-strona-zakladu/src/app/one-page-strona/komponenty/formularz-zarejestruj-sie/etapy/kalendarz/dzien-tygodnia";
import {Wizyta} from "../../../klasy/panelPracownika/wizyta";
import {GodzinyOtwarcia} from "../../../klasy/panelPracownika/mojZaklad/moj-zaklad";
import {ListonoszService} from "../../../serwisy/listonosz.service";
import {Drzwi} from "../../../enum/drzwi";
import {KalendarzKomponentService} from "./kalendarz-komponent.service";

@Component({
  selector: 'app-kalendarz-komponent',
  templateUrl: './kalendarz-komponent.component.html',
  styleUrls: ['./kalendarz-komponent.component.scss']
})
export class KalendarzKomponentComponent implements OnInit {
  @Output() wyslijKrok = new EventEmitter<number>();
  @Input() zarzadzanie = false


  wizyty: Array<Wizyta> = []
  godzinyOtwarcia: GodzinyOtwarcia = new GodzinyOtwarcia();

  licznikPrzyciskow = 0
  public godzinaRozpoczecia = 6;
  dni = dniTygodnia
  dataKursor = new Date()
  public miesiace: string[] = [
    "Styczeń",
    "Luty",
    "Marzec",
    "Kwiecień",
    "Maj",
    "Czerwiec",
    "Lipiec",
    "Sierpień",
    "Wrzesień",
    "Październik",
    "Listopad",
    "Grudzień"
  ];

  constructor(private listonosz: ListonoszService, public Kalendarz_: KalendarzKomponentService) {
  }

  ngOnInit() {
    this.Kalendarz_.godzinaRozpoczecia = this.godzinaRozpoczecia
    this.listonosz.pobierz(Drzwi.zarejestrowaneWizytyTerminy).then((k: { wizyty: Wizyta[], godzinyOtwarcia: GodzinyOtwarcia }) => {
      k.wizyty.forEach(wizyta => {
        const wizytaObj = new Wizyta(wizyta)
        this.wizyty.push(wizytaObj)
      })
      Object.assign(this.godzinyOtwarcia, k.godzinyOtwarcia)
    })
  }

  public czyPracuje(dzien: number) {
    switch (dzien) {
      case 0:
        return this.godzinyOtwarcia.poniedzialek.czynnyDzien
      case 1:
        return this.godzinyOtwarcia.wtorek.czynnyDzien
      case 2:
        return this.godzinyOtwarcia.sroda.czynnyDzien
      case 3:
        return this.godzinyOtwarcia.czwartek.czynnyDzien
      case 4:
        return this.godzinyOtwarcia.piatek.czynnyDzien
      case 5:
        return this.godzinyOtwarcia.sobota.czynnyDzien
      case 6:
        return this.godzinyOtwarcia.niedziela.czynnyDzien
    }
    return true

  }

  public kliknietoPole(dzien: DzienTygodnia, index: number) {
    if (this.zarzadzanie) {
      this.Kalendarz_.nowaPrzerwa(dzien, index)
    } else {
      this.Kalendarz_.nowaWizyta(dzien, index)
    }

  }


  public kolorTla(dzien: DzienTygodnia, index: number) {
    if (!this.CzyAktualne(dzien.data)) {
      if (index % 2 == 0) {
        return {'background-color': "rgba(229,229,229,0.31)"}
      }
      return {'background-color': "rgba(211,211,211,0.31)"}
    }
    if (!this.czyPracuje(dzien.dzien)) {
      if (index % 2 == 0) {
        return {'background-color': "rgba(180,180,180,0.31)"}
      }
      return {'background-color': "rgba(148,148,148,0.31)"}
    }

    return {}
  }

  public terminyNaDzien(data: DzienTygodnia): Array<Wizyta> {
    const tablica = this.wizyty.filter(usluga => {
      if (usluga.terminPoczatek.getDate() == data.data.getDate()) {
        if (usluga.terminPoczatek.getFullYear() == data.data.getFullYear()) {
          if (usluga.terminPoczatek.getMonth() == data.data.getMonth()) {
            return true
          }
        }
      }
      return false
    })
    return tablica
  }

  public miesiac() {
    return this.dataKursor.getMonth() + 1
  }

  public tydzien() {
    return Math.ceil(this.dataKursor.getDate() / 7)
  }

  public czyToDzis(data: Date): boolean {
    if (data.getDate() == new Date().getDate()) {
      if (data.getFullYear() == new Date().getFullYear()) {
        if (data.getMonth() == new Date().getMonth()) {
          return true
        }
      }
    }
    return false
  }

  public WPrawo() {
    this.licznikPrzyciskow++
    this.dataKursor = new Date(this.dataKursor.getTime() + (7 * 24 * 60 * 60 * 1000))

    this.dni.forEach(k => {
      k.data = new Date(this.dataKursor)
      k.ustawDate()
    })
  }

  public WLEWO() {
    this.licznikPrzyciskow--
    this.dataKursor = new Date(this.dataKursor.getTime() - (7 * 24 * 60 * 60 * 1000))
    this.dni.forEach(k => {
      k.data = new Date(this.dataKursor)
      k.ustawDate()
    })
  }

  private CzyAktualne(data: Date) {
    return !(data.setUTCHours(0, 0, 0, 0) < new Date().setUTCHours(0, 0, 0, 0))
  }

}