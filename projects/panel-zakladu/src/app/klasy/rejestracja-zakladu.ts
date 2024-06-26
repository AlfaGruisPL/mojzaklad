import passwordValidator from 'password-validator';
import * as EmailValidator from 'email-validator';

export class RejestracjaZakladu {
  public nazwaZakladu: string = '';
  public powiat: string = '';
  public wies: string = '';
  public miasto: string = '';
  public wojewodztwo: string = '';
  public ulica: string = '';
  public nrDomu: string = '';
  public nrLokalu: string = '';
  public kodPocztowy1?: number = 1;
  public kodPocztowy2?: number = 1;
  public imie: string = '';
  public nazwisko: string = '';
  public email: string = '';
  public numerTelefonu: string = '';
  public prefiksTelefonu: string = '+48';
  public haslo1: string = '';
  public haslo2: string = '';
  public rodo: boolean = false;
  public regulamin: boolean = false;
  public czyHaslaTakieSame_ = true;
  public identyfikator = '';
  public przyciskAktywny = true;

  public czyMiasto = 1;

  public powiatPoprawne: boolean = true;
  public wiesPoprawne: boolean = true;
  public miastoPoprawne: boolean = true;
  public nazwaZakladuPoprawne: boolean = true;
  public wojewodztwoPoprawne: boolean = true;
  public ulicaPoprawna: boolean = true;
  public nrDomuPoprawny: boolean = true;
  public nrLokaluPoprawny: boolean = true;
  public kodPocztowy1Poprawny?: boolean = true;
  public kodPocztowy2Poprawny?: boolean = true;
  public imiePoprawne: boolean = true;
  public nazwiskoPoprawne: boolean = true;
  public emailPoprawny: boolean = true;
  public numerTelefonuPoprawny: boolean = true;
  public prefiksTelefonuPoprawny: boolean = true;
  public rodoPoprawne: boolean = true;
  public regulaminPoprawny: boolean = true;
  public haslo1poprawne: boolean = true;
  public haslo2poprawne: boolean = true;
  public czyWszystkoPoprawne: boolean = true;
  public identyfikatorPoprawne: boolean = true;
  public adresEmailPoprawneWalidacja = true;
  public imiePoprawneWalidacja = true;
  public nazwiskoPoprawneWalidacja = true;
  public numerTelefonuPoprawneWalidacja = true;
  public hasloSpelniaWymagania = true;
  public emailWykorzystany = false;
  public nmumerTelefonuWykorzystany = false;
  public identyfikatorWykorzystany = false;
  public rejestracjaUdana = true;

  public czyHaslaTakieSame(): boolean {
    this.czyHaslaTakieSame_ = true;
    if (this.haslo1.length == 0 || this.haslo2.length == 0) {
      this.czyHaslaTakieSame_ = true;
      return this.czyHaslaTakieSame_;
    }
    if (this.haslo1 == this.haslo2) {
      this.czyHaslaTakieSame_ = true;
    } else {
      this.czyHaslaTakieSame_ = false;
    }
    return this.czyHaslaTakieSame_;
  }

  public czyDanePoprawne(): boolean {
    const czyOkej = true;
    this.adresEmailPoprawneWalidacja = EmailValidator.validate(this.email);
    const regex = /^[a-zA-ZżźćńółęąśŻŹĆĄŚĘŁÓŃ]+$/gi;
    this.imiePoprawneWalidacja = regex.test(this.imie);
    const regex2 = /^[a-zA-ZżźćńółęąśŻŹĆĄŚĘŁÓŃ]+$/gi;
    this.nazwiskoPoprawneWalidacja = regex2.test(this.nazwisko);
    const regex3 = /^[0-9]+$/gi;
    this.numerTelefonuPoprawneWalidacja = regex3.test(this.numerTelefonu);
    if (this.numerTelefonu.length != 9) {
      this.numerTelefonuPoprawneWalidacja = false;
    }
    return czyOkej;
  }

  public czyWszystkiePolaUzupelnione(): boolean {
    const regex_liczby = /^[0-9]+$/i;
    this.miastoPoprawne = true;
    this.wiesPoprawne = true;
    this.powiatPoprawne = true;

    this.czyWszystkoPoprawne = true;
    if (this.nazwaZakladu.length > 0) {
      this.nazwaZakladuPoprawne = true;
    } else {
      this.nazwaZakladuPoprawne = false;
      this.czyWszystkoPoprawne = false;
    }
    if (this.identyfikator.length > 0) {
      this.identyfikatorPoprawne = true;
    } else {
      this.identyfikatorPoprawne = false;
      this.czyWszystkoPoprawne = false;
    }
    if (this.wojewodztwo.length > 0) {
      this.wojewodztwoPoprawne = true;
    } else {
      this.wojewodztwoPoprawne = false;
      this.czyWszystkoPoprawne = false;
    }
    if (this.ulica.length > 0) {
      this.ulicaPoprawna = true;
    } else {
      this.ulicaPoprawna = false;
      this.czyWszystkoPoprawne = false;
    }
    if (this.czyMiasto == 1) {
      if (this.miasto.length > 0) {
        this.miastoPoprawne = true;
      } else {
        this.miastoPoprawne = false;
        this.czyWszystkoPoprawne = false;
      }
    }
    if (this.czyMiasto == 2) {
      if (this.wies.length > 0) {
        this.wiesPoprawne = true;
      } else {
        this.wiesPoprawne = false;
        this.czyWszystkoPoprawne = false;
      }

      if (this.powiat.length > 0) {
        this.powiatPoprawne = true;
      } else {
        this.powiatPoprawne = false;
        this.czyWszystkoPoprawne = false;
      }
    }
    if (this.nrDomu.length > 0) {
      this.nrDomuPoprawny = true;
    } else {
      this.nrDomuPoprawny = false;
      this.czyWszystkoPoprawne = false;
    }
    if (
      this.kodPocztowy1 != undefined &&
      this.kodPocztowy1.toString().length > 0 &&
      regex_liczby.test(this.kodPocztowy1.toString())
    ) {
      this.kodPocztowy1Poprawny = true;
    } else {
      this.kodPocztowy1Poprawny = false;
      this.czyWszystkoPoprawne = false;
    }
    if (
      this.kodPocztowy2 != undefined &&
      this.kodPocztowy2.toString().length > 0 &&
      regex_liczby.test(this.kodPocztowy2.toString())
    ) {
      this.kodPocztowy2Poprawny = true;
    } else {
      this.kodPocztowy2Poprawny = false;
      this.czyWszystkoPoprawne = false;
    }

    const regex = /^[a-zA-ZżźćńółęąśŻŹĆĄŚĘŁÓŃ]+$/i;
    if (this.imie.length > 0 && regex.test(this.imie)) {
      this.imiePoprawne = true;
    } else {
      this.imiePoprawne = false;
      this.czyWszystkoPoprawne = false;
    }
    if (this.nazwisko.length > 0 && regex.test(this.nazwisko)) {
      this.nazwiskoPoprawne = true;
    } else {
      this.nazwiskoPoprawne = false;
      this.czyWszystkoPoprawne = false;
    }
    if (this.email.length > 0 && EmailValidator.validate(this.email)) {
      this.emailPoprawny = true;
    } else {
      this.emailPoprawny = false;
      this.czyWszystkoPoprawne = false;
    }

    if (this.numerTelefonu.length == 9 && regex_liczby.test(this.numerTelefonu)) {
      this.numerTelefonuPoprawny = true;
    } else {
      this.numerTelefonuPoprawny = false;
      this.czyWszystkoPoprawne = false;
    }
    if (this.rodo) {
      this.rodoPoprawne = true;
    } else {
      this.rodoPoprawne = false;
      this.czyWszystkoPoprawne = false;
    }
    if (this.regulamin) {
      this.regulaminPoprawny = true;
    } else {
      this.regulaminPoprawny = false;
      this.czyWszystkoPoprawne = false;
    }
    if (this.haslo1.length > 0) {
      this.haslo1poprawne = true;
    } else {
      this.haslo1poprawne = false;
      this.czyWszystkoPoprawne = false;
    }
    if (this.haslo2.length > 0) {
      this.haslo2poprawne = true;
    } else {
      this.haslo2poprawne = false;
      this.czyWszystkoPoprawne = false;
    }

    return this.czyWszystkoPoprawne;
  }

  public walidacjaHasla(): boolean {
    this.hasloSpelniaWymagania = true;
    var schema = new passwordValidator();
    schema
      .is()
      .min(8)
      .is()
      .max(100)
      .has()
      .uppercase()
      .has()
      .lowercase()
      .has()
      .digits(1)
      .has()
      .not()
      .spaces()
      .has()
      .symbols(1);
    this.hasloSpelniaWymagania = <boolean>schema.validate(this.haslo1);

    return this.hasloSpelniaWymagania;
  }
}

export class RejestracjaZakladuDTO {
  public nazwaZakladu: string = '';
  public miasto: string = '';
  public powiat: string = '';
  public wies: string = '';
  public wojewodztwo: string = '';
  public ulica: string = '';
  public nrDomu: string = '';
  public nrLokalu: string = '';
  public kodPocztowy: string;
  public imie: string = '';
  public nazwisko: string = '';
  public email: string = '';
  public numerTelefonu: string = '';
  public haslo: string = '';
  public identyfikator: string = '';
  public timeZone: string = Intl.DateTimeFormat().resolvedOptions().timeZone;

  constructor(dane: RejestracjaZakladu) {
    this.nazwaZakladu = dane.nazwaZakladu;
    this.miasto = dane.miasto;
    this.powiat = dane.powiat;
    this.wies = dane.wies;
    this.wojewodztwo = dane.wojewodztwo;
    this.ulica = dane.ulica;
    this.nrDomu = dane.nrDomu;
    this.nrLokalu = dane.nrLokalu;
    this.kodPocztowy = dane.kodPocztowy1 + '-' + dane.kodPocztowy2;
    this.imie = dane.imie;
    this.nazwisko = dane.nazwisko;
    this.email = dane.email;
    this.numerTelefonu = dane.prefiksTelefonu + '-' + dane.numerTelefonu;
    this.haslo = dane.haslo1;
    this.identyfikator = dane.identyfikator;
  }
}
