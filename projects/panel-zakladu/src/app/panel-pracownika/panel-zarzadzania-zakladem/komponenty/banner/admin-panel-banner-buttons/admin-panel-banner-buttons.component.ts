import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbOffcanvas, NgbPopover } from '@ng-bootstrap/ng-bootstrap';
import { PowiadomieniaService } from '../powiadomienia.service';
import { FontAwesomeService } from '../../../../../serwisy/font-awesome.service';
import { ActivatedRoute, Router } from '@angular/router';
import { PodreczneDaneService } from '../../../../../serwisy/podreczne-dane.service';
import { StraznicyService } from '../../../../../straznicy/straznicy.service';
import { TokenService } from '../../../../../serwisy/token.service';
import { KomunikatyService } from '../../../../../serwisy/komunikaty.service';
import { ListonoszService } from '../../../../../serwisy/listonosz.service';
import { NumberLimitPipe } from '../../../../../rureczki/number-limit.pipe';

@Component({
  selector: 'app-admin-panel-banner-buttons',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule, NgbPopover, NumberLimitPipe],
  templateUrl: './admin-panel-banner-buttons.component.html',
  styleUrls: ['./admin-panel-banner-buttons.component.scss'],
})
export class AdminPanelBannerButtonsComponent {
  losowaLiczba = Math.round(Math.random() * 100);
  popoverUzytkownika: any;
  popoverZakladu: any;

  constructor(
    public fontAwesome: FontAwesomeService,
    private Router: Router,
    private route: ActivatedRoute,
    public DanePodreczne: PodreczneDaneService,
    public powiadomienia_: PowiadomieniaService,
    private straznik_: StraznicyService,
    private offcanvasService: NgbOffcanvas,
    public token_: TokenService,
    public komunikaty: KomunikatyService,
    private listonosz: ListonoszService
  ) {}

  async ngOnInit() {
    this.token_.czyWlasciciel();
    await this.powiadomienia_.pobierzPowiadomienia();
  }

  ngAfterViewChecked() {
    //todo: to poprawić
    if (this.popoverZakladu != undefined) {
      this.changeBody();
    }
    if (this.popoverUzytkownika != undefined) {
      this.changeBody();
    }
  }

  changeBody() {
    const elementy: HTMLCollectionOf<Element> | any = document.getElementsByClassName('BrakBialejRamkiPopOver');
    for (var k = 0; k < elementy.length; ++k) {
      elementy[k].parentElement.classList.add('BrakBialejRamkiPopOverRodzic');
    }
  }

  doHarmonogramu() {
    this.Router.navigate(['/panelPracownika/harmonogram']);
  }

  otworz(popover: any, content: any) {
    if (document.documentElement.clientWidth < 800) {
      this.offcanvasService.open(content, { ariaLabelledBy: 'offcanvas-basic-title' });
      return;
    }
    popover.open();
    this.popoverZakladu = popover;
    if (this.popoverUzytkownika != undefined) {
      this.popoverUzytkownika.close();
    }
  }

  otworzZakladu(popover: any, content: any) {
    if (document.documentElement.clientWidth < 800) {
      this.offcanvasService.open(content, { ariaLabelledBy: 'offcanvas-basic-title' });
      return;
    }
    popover.open();
    this.popoverUzytkownika = popover;
    if (this.popoverZakladu != undefined) {
      this.popoverZakladu.close();
    }
  }

  public wyloguj() {
    this.straznik_.zatrzymajSprawdzanie();
    this.listonosz
      .wyloguj()
      .then(k => {
        this.komunikaty.wylogowanieUdane();
      })
      .catch(k => {
        this.komunikaty.wylogowanieNieUdane();
      })
      .finally(() => {
        this.Router.navigate(['./']);
      });
  }

  zamkniecie(event: any, popover: any, id: string) {
    //  console.log(popoverDrugi)
    var znaleziono = false;
    var tmp = event.target;
    var ikonka = tmp.tagName == 'path';
    for (let k = 0; k < 15; k++) {
      if (tmp != undefined) {
        if (tmp.id == 'powiadomienieZakladu_button' || tmp.id == 'powiadomieniaUzytkownika_Button') {
          ikonka = true;
        }
        if (tmp.id == popover.id) {
        }
        if (tmp.localName == 'ngb-popover-window') {
          znaleziono = true;
        }
        tmp = tmp.parentElement;
      }
    }
    if (!znaleziono && !ikonka) {
      popover.close();
    }
    console.groupEnd();
  }

  UsunWszystko() {
    this.powiadomienia_.powiadomieniaZakladu.forEach(powiadomienie => {
      this.powiadomienia_.usunPowiadomienieZakladu(powiadomienie);
    });
  }

  PrzeczytajWszystko() {
    this.powiadomienia_.powiadomieniaZakladu.forEach(powiadomienie => {
      this.powiadomienia_.odczytajPowiadomienieZakladu(powiadomienie);
    });
  }

  UsunWszystkoUzytkownika() {
    this.powiadomienia_.powiadomieniaUzytkownika.forEach(powiadomienie => {
      this.powiadomienia_.usunPowiadomienieUzytkownika(powiadomienie);
    });
  }

  PrzeczytajWszystkoUzytkownika() {
    this.powiadomienia_.powiadomieniaUzytkownika.forEach(powiadomienie => {
      this.powiadomienia_.odczytajPowiadomienieUzytkownika(powiadomienie);
    });
  }

  ngOnDestroy(): void {
    this.powiadomienia_.zatrzymajPobieraniePowiadomien();
  }
}
