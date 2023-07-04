export class DaneKlienta {
  public imie: string = '';
  public nazwisko: string = '';
  public prefiksTelefonu: string = '+48';
  public numerTelefonu: string = '';
  public email: string = '';
  wybranyPracownik: number = 0;
  public kodWeryfikacja: string = '';
  public identyfikator: string = '';
  public kodWeryfikacjaPusty: boolean = false;
  public czyWszystkoUzupelnione: boolean = true;
  public imiePuste: boolean = false;
  public nazwiskoPuste: boolean = false;
  public numerTelefonuPusty: boolean = false;
  public adresEmailPusty: boolean = false;
  public daneNieWyslane: boolean = false;
  public niepoprawnyKod: boolean = false;

  public czyKodWerifikacjaWpisany() {
    this.kodWeryfikacjaPusty = false;
    if (this.kodWeryfikacja.length <= 0) {
      this.kodWeryfikacjaPusty = true;
    } else {
      this.kodWeryfikacjaPusty = false;
    }
    return this.kodWeryfikacjaPusty;
  }

  public czyWszystkoUzupelnioneFunkcja() {
    this.czyWszystkoUzupelnione = true;
    this.imiePuste = false;
    this.nazwiskoPuste = false;
    this.numerTelefonuPusty = false;
    this.adresEmailPusty = false;

    if (this.imie.length <= 0) {
      this.imiePuste = true;
      this.czyWszystkoUzupelnione = false;
    }
    if (this.nazwisko.length <= 0) {
      this.nazwiskoPuste = true;
      this.czyWszystkoUzupelnione = false;
    }
    if (this.numerTelefonu.length <= 0) {
      this.numerTelefonuPusty = true;
      this.czyWszystkoUzupelnione = false;
    }
    if (this.email.length <= 0) {
      this.adresEmailPusty = true;
      this.czyWszystkoUzupelnione = false;
    }
    return this.czyWszystkoUzupelnione;
  }
}

export class DaneKlientaDTO {
  public imie: string = '';
  public nazwisko: string = '';
  public numerTelefonu: string = '';
  public email: string = '';

  constructor(daneKlienta: DaneKlienta) {
    this.imie = daneKlienta.imie;
    this.nazwisko = daneKlienta.nazwisko;
    this.numerTelefonu =
      daneKlienta.prefiksTelefonu + '-' + daneKlienta.numerTelefonu;
    this.email = daneKlienta.email;
  }
}