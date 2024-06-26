import { Pracownik } from './pracownicy/pracownik';

export interface wizytaUslugi {
  uslugi: [
    {
      nazwa: string;
      cena: number;
    }
  ];
  opis: string;
}

export class Customer {
  id = 0;

  firstName = '';
  phone = '';
  lastName = '';
  email = '';
}

export interface VisitsDetails {
  date: Date;
  additionalDetail: {
    reason: string;
    workerId: number;
  };
  detail: number;
}

export class Wizyta {
  dataPotwierdzenia = null;
  id = 0;
  kodWeryfikacyjny = '';
  potwierdzone = true;
  dataUtworzenia = new Date();
  koniec = new Date();
  poczatek = new Date();
  cena: number | undefined;
  uslugi: wizytaUslugi | undefined;
  pracownik: Pracownik = new Pracownik();
  dataOdwolania: Date | undefined = undefined;
  kodOdwolania: string = '';
  tryb: string = '';
  uslugiTabela = false;
  customer: Customer;
  VisitsDetails: VisitsDetails[] = [];
  completed: boolean | undefined = undefined;

  constructor(k: Partial<Wizyta>) {
    this.customer = new Customer();
    const { customer, dataOdwolania, pracownik, ...reszta } = k;
    Object.assign(this.customer, customer);
    Object.assign(this.pracownik, pracownik);
    Object.assign(this, reszta);
    if (dataOdwolania) {
      this.dataOdwolania = new Date(dataOdwolania);
    }
    this.poczatek = new Date(this.poczatek);
    this.koniec = new Date(this.koniec);
    if (reszta.cena != undefined) {
      this.cena = reszta.cena;
    }
  }

  get uslugiArray() {
    if (this.uslugi?.uslugi && (this.tryb == 'auto' || this.tryb == 'reklamowa')) {
      return this.uslugi.uslugi;
    }
    if (this.tryb != 'auto') {
      return [this.uslugi?.opis];
    }
    return [];
  }

  obliczCeneWizyty() {
    if (!this.uslugi) return -1;
    return this.uslugi?.uslugi.reduce((suma, usluga) => suma + usluga.cena, 0);
  }

  czySaUslugi() {
    if (!this.uslugi?.uslugi) return false;
    if (this.uslugi?.uslugi.length > 0) {
      return true;
    }
    return false;
  }

  afterEndPlusBuforTime() {
    return this.koniec.getTime() < new Date().getTime() + 3600000 * 5; // + 3h
  }

  cancled() {
    return this.dataOdwolania != undefined;
  }

  poTerminie() {
    if (this.koniec.getTime() < new Date().getTime()) {
      return true;
    }

    return false;
  }

  returnCanceledDetail() {
    return this.VisitsDetails.find(k => k.detail == 0);
  }
}

export class UslugiMini {
  id = 0;
  nazwa = '';
  cena = 0;
}
