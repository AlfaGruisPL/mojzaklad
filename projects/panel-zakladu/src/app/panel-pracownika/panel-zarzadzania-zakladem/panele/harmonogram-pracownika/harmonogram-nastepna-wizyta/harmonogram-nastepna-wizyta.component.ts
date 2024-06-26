import { Component, OnInit } from '@angular/core';
import { Wizyta } from '../../../../../klasy/panelPracownika/wizyta';
import { Subscription } from 'rxjs';
import { HarmonogramService } from '../harmonogram.service';

@Component({
  selector: 'app-harmonogram-nastepna-wizyta',
  templateUrl: './harmonogram-nastepna-wizyta.component.html',
  styleUrls: ['./harmonogram-nastepna-wizyta.component.scss'],
})
export class HarmonogramNastepnaWizytaComponent implements OnInit {
  public nastepnaWizyta: Wizyta | undefined;
  protected readonly undefined = undefined;
  private sub1: Subscription | undefined;

  constructor(private harmonogram_: HarmonogramService) {}

  ngOnInit() {
    this.sub1 = this.harmonogram_.wizytaDzisObserveble.subscribe(wizyty => {
      const aktualnyCzas = new Date().getTime();
      wizyty.sort((wizyta1, wizyta2) => wizyta1.poczatek.getTime() - wizyta2.poczatek.getTime());
      this.nastepnaWizyta = wizyty.find(wizyta => {
        return wizyta.poczatek.getTime() >= aktualnyCzas;
      });
    });
  }

  czasDoWizyty(): string {
    const czas = new Date();
    if (this.nastepnaWizyta == undefined) {
      return '';
    }
    var wynik = Math.round((this.nastepnaWizyta.poczatek.getTime() - czas.getTime()) / 60000);
    return wynik + 'min';
  }

  ngOnDestroy() {
    this.sub1?.unsubscribe();
  }
}
