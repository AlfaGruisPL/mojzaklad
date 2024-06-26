import { Injectable } from '@angular/core';
import {
  UstawieniaStronyReklamowej,
  UstawieniaStronyReklamowejDto,
} from '../../../../klasy/panelPracownika/stronaReklamowa/ustawienia-strony-reklamowej';
import { Drzwi } from '../../../../enum/drzwi';
import { ListonoszService } from '../../../../serwisy/listonosz.service';
import { KomunikatyService } from '../../../../serwisy/komunikaty.service';
import { Udane } from '../../../../enum/udane';
import { ErrorAnalyzerService } from '../../../../serwisy/error-analyzer.service';
import { Toolbar } from 'ngx-editor';

@Injectable({
  providedIn: 'root',
})
export class RegisterPageService {
  selectedTemplate = 'template1';
  data: UstawieniaStronyReklamowej = new UstawieniaStronyReklamowej();
  toolbar: Toolbar = [
    ['bold', 'italic'],
    ['underline', 'strike'],
    ['code', 'blockquote'],
    ['ordered_list', 'bullet_list'],
    [{ heading: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'] }],
    ['link', 'image'],
    ['text_color', 'background_color'],
    ['align_left', 'align_center', 'align_right', 'align_justify'],
  ];

  constructor(
    private http_: ListonoszService,
    private errorAnalyzer: ErrorAnalyzerService,
    private komunikat: KomunikatyService
  ) {}

  fetchData() {
    this.http_.pobierz(Drzwi.UstawieniaStronyReklamowej).then(dane => {
      this.saveDataToVariable(dane);
    });
  }

  async saveData() {
    this.data.template = this.selectedTemplate;
    const dane = new UstawieniaStronyReklamowejDto(this.data);
    console.log(dane);
    this.http_
      .wyslij(Drzwi.UstawieniaStronyReklamowej, dane)
      .then(dane => {
        this.saveDataToVariable(dane);
        this.komunikat.komunikatUdane(Udane.daneZostalyZapisane);
        // this.odswiez.emit();
      })
      .catch(error => {
        this.errorAnalyzer.analyze(error);
      });
  }

  skopiujObiekty(obiekt1: any, obiekt2: any): void {
    for (const klucz in obiekt2) {
      if (obiekt2.hasOwnProperty(klucz)) {
        if (typeof obiekt2[klucz] === 'object' && typeof obiekt1[klucz] === 'object') {
          this.skopiujObiekty(obiekt1[klucz], obiekt2[klucz]);
        } else if (obiekt1.hasOwnProperty(klucz)) {
          obiekt2[klucz] = obiekt1[klucz];
        }
      }
    }
  }

  private saveDataToVariable(data: any) {
    console.log(1, this.selectedTemplate);
    this.data.stronaReklamowaPrzelacznik = data.wlaczona;
    this.selectedTemplate = data['template'];
    this.data.keywords = data['keyWords'];
    this.data.miniDescription = data['miniDescription'];
    switch (this.selectedTemplate) {
      case 'template1':
        Object.assign(this.data.FirstTemplateData, data.data);
        break;
      case 'template2':
        //  this.skopiujObiekty(data.data, this.data.SecondTemplateData);
        Object.assign(this.data.SecondTemplateData, data.data);
    }
  }
}
