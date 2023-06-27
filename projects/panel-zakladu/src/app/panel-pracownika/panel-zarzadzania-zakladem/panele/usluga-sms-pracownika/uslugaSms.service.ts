import {Injectable} from '@angular/core';
import {ListonoszService} from "../../../../serwisy/listonosz.service";
import {Drzwi} from "../../../../enum/drzwi";
import {HistoriaSms, PanelSms} from "../../../../klasy/panelPracownika/uslugaSms/panel-sms";

@Injectable({
  providedIn: 'root'
})
export class UslugaSmsService {
  public dane: PanelSms = new PanelSms()

  constructor(private listonosz: ListonoszService) {

  }

  pobierzDane() {
    this.listonosz.pobierz(Drzwi.panelSms).then(k => {
      const historia = [...k.historia];
      historia.forEach(k2 => {
        const obj = new HistoriaSms()
        Object.assign(obj, k2)
        this.dane.historia.push(obj)
      })
      delete k.historia
      Object.assign(this.dane, k)
    }).catch(k => {

    })
  }
}
