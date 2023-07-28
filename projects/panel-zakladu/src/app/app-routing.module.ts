import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {
  ResetHaslaPracownikowComponent
} from './panel-pracownika/poczatkowy-panel-pracownika/reset-hasla-pracownikow/reset-hasla-pracownikow.component';
import {
  PoczatkowyPanelPracownikaComponent
} from './panel-pracownika/poczatkowy-panel-pracownika/poczatkowy-panel-pracownika.component';
import {
  PanelLogowaniaPracownikowComponent
} from './panel-pracownika/poczatkowy-panel-pracownika/panel-logowania-pracownikow/panel-logowania-pracownikow.component';
import {
  PanelZarzadzaniaZaklademComponent
} from './panel-pracownika/panel-zarzadzania-zakladem/panel-zarzadzania-zakladem.component';
import {
  StronaStartowaPracownikaComponent
} from './panel-pracownika/panel-zarzadzania-zakladem/panele/strona-startowa-pracownika/strona-startowa-pracownika.component';
import {
  MojeKontoPracownikaComponent
} from './panel-pracownika/panel-zarzadzania-zakladem/panele/moje-konto-pracownika/moje-konto-pracownika.component';
import {
  ZarejestrowaneWizytyPracownikaComponent
} from './panel-pracownika/panel-zarzadzania-zakladem/panele/zarejestrowane-wizyty-pracownika/zarejestrowane-wizyty-pracownika.component';
import {
  PracownicyPracownikaComponent
} from './panel-pracownika/panel-zarzadzania-zakladem/panele/pracownicy-pracownika/pracownicy-pracownika.component';
import {
  KalendarzTerminowComponent
} from './panel-pracownika/panel-zarzadzania-zakladem/panele/kalendarz-terminow/kalendarz-terminow.component';
import {
  StronaReprezentacyjnaPracownikaComponent
} from './panel-pracownika/panel-zarzadzania-zakladem/panele/strona-reprezentacyjna-pracownika/strona-reprezentacyjna-pracownika.component';

import {
  MojZakladPracownikaComponent
} from './panel-pracownika/panel-zarzadzania-zakladem/panele/moj-zaklad-pracownika/moj-zaklad-pracownika.component';
import {
  PlatnosciPracownikaComponent
} from './panel-pracownika/panel-zarzadzania-zakladem/panele/platnosci-pracownika/platnosci-pracownika.component';
import {
  RejestracjaZakladuComponent
} from './panel-pracownika/poczatkowy-panel-pracownika/rejestracja-zakladu/rejestracja-zakladu.component';
import {
  HarmonogramPracownikaComponent
} from './panel-pracownika/panel-zarzadzania-zakladem/panele/harmonogram-pracownika/harmonogram-pracownika.component';
import {
  ListaKlientowPracownikComponent
} from './panel-pracownika/panel-zarzadzania-zakladem/panele/lista-klientow-pracownik/lista-klientow-pracownik.component';
import {
  UslugaSmsPracownikaComponent
} from './panel-pracownika/panel-zarzadzania-zakladem/panele/usluga-sms-pracownika/usluga-sms-pracownika.component';
import {UslugiPracownikaComponent} from './panel-pracownika/panel-zarzadzania-zakladem/panele/uslugi/uslugi.component';
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";
import {IdentyfikatorGuard} from "./straznicy/identyfikator.guard";
import {ZalogowanyGuard} from "./straznicy/zalogowany.guard";


const zakladDzieci: Routes = [
  {
    path: 'logowanie',
    component: PanelLogowaniaPracownikowComponent,
  },
  {
    path: 'reset',
    component: ResetHaslaPracownikowComponent,
  },
  {
    path: 'rejestracja',
    component: RejestracjaZakladuComponent,
  },
  {
    path: '',
    redirectTo: 'logowanie',
    pathMatch: 'full',
  },
]
const panelePracownika: Routes = [
  {
    path: 'stronaStartowa',
    component: StronaStartowaPracownikaComponent,
  },
  {
    path: 'mojeKonto',
    component: MojeKontoPracownikaComponent,
  },
  {
    path: 'zarejestrowaneWizyty',
    component: ZarejestrowaneWizytyPracownikaComponent,
  },
  {
    path: 'zarzadzaniePracownikami',
    component: PracownicyPracownikaComponent,
  },
  {
    path: 'kalendarzTerminow',
    component: KalendarzTerminowComponent,
  },

  {
    path: 'uslugi',
    component: UslugiPracownikaComponent,
  },
  {
    path: 'stronaReprezentacyjnaUstawienia',
    component: StronaReprezentacyjnaPracownikaComponent,
  },
  {
    path: 'mojZaklad',
    component: MojZakladPracownikaComponent,
  },
  {
    path: 'platnosci',
    component: PlatnosciPracownikaComponent,
  },
  {
    path: 'sms',
    component: UslugaSmsPracownikaComponent,
  },
  {
    path: 'harmonogram',
    component: HarmonogramPracownikaComponent,
  },
  {
    path: 'listaKlientow',
    component: ListaKlientowPracownikComponent,
  },
  {
    path: '',
    redirectTo: 'stronaStartowa',
    pathMatch: 'full',
  },
]

const typy: Routes = [{
  path: 'zaklad',
  component: PoczatkowyPanelPracownikaComponent,
  children: zakladDzieci
},
  {
    path: 'panelPracownika',
    component: PanelZarzadzaniaZaklademComponent,
    children: panelePracownika,
    canActivate: [ZalogowanyGuard],
  },
  {path: '', redirectTo: 'zaklad', pathMatch: 'full'},


]
const routes: Routes = [
  {
    path: ':identyfikator',
    canActivate: [IdentyfikatorGuard],
    children: typy,
  },
  {
    path: '',
    canActivate: [IdentyfikatorGuard],
    children: typy
  },


  {path: 'pageNotFound', component: PageNotFoundComponent},


  // {path: '', redirectTo: 'zaklad', pathMatch: 'full', canActivate: [IdentyfikatorGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
