export class Pracownik {
  public id: number = 0;
  public firstname: string = '';
  public lastname: string = '';
  public email: string = '';
  public phoneNumber: string = '';
  public prefiksPhoneNumber: string = '';
  public potwierdzony = false;
  public adres: {
    miasto: string;
    ulica: string;
    nrLokalu: string;
    nrDomu: string;
    wojewodztwo: string;
    kodPocztowy1: string;
    kodPocztowy2: string;
  };
  public ilosKlientow: number = 0;

  public archived = true;
  public urlop: boolean = false;

  public imiePuste: boolean = false;
  public nazwiskoPuste: boolean = false;
  public adresEmailPuste: boolean = false;
  public numerTelefonuPuste: boolean = false;
  public prefiksTelefonuPuste: boolean = false;
  public miastoPuste: boolean = false;
  public ulicaPuste: boolean = false;
  public nrDomuPuste: boolean = false;
  public wojewodztwoPuste: boolean = false;
  public kodPocztowy1Puste: boolean = false;
  public kodPocztowy2Puste: boolean = false;
  public czyWszystkoWpisane: boolean = true;
  public profilImageId = 0;
  public description = '';
  public workDay_ = {
    monday: true,
    tuesday: true,
    wednesday: true,
    thursday: true,
    friday: true,
    saturday: false,
    sunday: false,
  };
  private socialMedia_ = {
    telegram: '',
    facebook: '',
    instagram: '',
    twitter: '',
    whatsapp: '',
  };

  constructor() {
    this.adres = {
      miasto: '',
      ulica: '',
      nrLokalu: '',
      nrDomu: '',
      wojewodztwo: '',
      kodPocztowy1: '',
      kodPocztowy2: '',
    };
  }

  get socialMedia() {
    if (this.socialMedia_ != null) {
      return this.socialMedia_;
    }
    return {
      telegram: '',
      facebook: '',
      instagram: '',
      twitter: '',
      whatsapp: '',
    };
  }

  set socialMedia(k) {
    this.socialMedia_ = k;
  }

  get workDay() {
    if (this.workDay_ != null) {
      return this.workDay_;
    }
    return {
      monday: true,
      tuesday: true,
      wednesday: true,
      thursday: true,
      friday: true,
      saturday: false,
      sunday: false,
    };
  }

  set workDay(k) {
    this.workDay_ = k;
  }

  public czyWszystkoWpisaneFunkcja() {
    this.imiePuste = false;
    this.nazwiskoPuste = false;
    this.adresEmailPuste = false;
    this.numerTelefonuPuste = false;
    this.prefiksTelefonuPuste = false;
    this.miastoPuste = false;
    this.ulicaPuste = false;
    this.nrDomuPuste = false;
    this.wojewodztwoPuste = false;
    this.kodPocztowy1Puste = false;
    this.kodPocztowy2Puste = false;
    this.czyWszystkoWpisane = true;
    if (this.firstname.length <= 0) {
      this.imiePuste = true;
      this.czyWszystkoWpisane = false;
    }
    if (this.lastname.length <= 0) {
      this.nazwiskoPuste = true;
      this.czyWszystkoWpisane = false;
    }
    if (this.email.length <= 0) {
      this.adresEmailPuste = true;
      this.czyWszystkoWpisane = false;
    }
    if (this.phoneNumber.length <= 0) {
      this.numerTelefonuPuste = true;
      this.czyWszystkoWpisane = false;
    }
    if (this.prefiksPhoneNumber.length <= 0) {
      this.prefiksTelefonuPuste = true;
      this.czyWszystkoWpisane = false;
    }
    if (this.adres.miasto.length <= 0) {
      this.miastoPuste = true;
      this.czyWszystkoWpisane = false;
    }
    if (this.adres.ulica.length <= 0) {
      this.ulicaPuste = true;
      this.czyWszystkoWpisane = false;
    }
    if (this.adres.wojewodztwo.length <= 0) {
      this.wojewodztwoPuste = true;
      this.czyWszystkoWpisane = false;
    }
    if (this.adres.nrDomu.length <= 0) {
      this.nrDomuPuste = true;
      this.czyWszystkoWpisane = false;
    }
    if (this.adres.kodPocztowy1.length <= 0) {
      this.kodPocztowy1Puste = true;
      this.czyWszystkoWpisane = false;
    }
    if (this.adres.kodPocztowy2.length <= 0) {
      this.kodPocztowy2Puste = true;
      this.czyWszystkoWpisane = false;
    }
    return this.czyWszystkoWpisane;
  }
}
