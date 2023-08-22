export enum Drzwi {
  nazwaZakladu = "/zaklady/nazwaZakladu",

  logowanie = "/auth/login",
  wylogowanie = "/auth/logout",
  resetHasla = "/auth/resetHasla",
  resetHaslaKrok2 = "/auth/resetHaslaKrok2",
  resetHaslaKrok3 = "/auth/resetHaslaKrok3",
  dodajZaklad = "/zaklady/dodaj",
  rejestracjaKlienta = "/klient/auth/rejestracja",
  logowanieKlienta = "/klient/auth/login",
  daneMojZakladPracownik = "/zaklady/daneZakladu",
  podreczneDanePobierz = "/panelPracownika/daneStartowe",
  pobierzPracownikow = "/uzytkownicyWZakladach/pracownicyZakladu",
  dodaniePracownikaDoTablicy = "/uzytkownicyWZakladach/dodawaniePracownika",
  pobierzPracownikowMojZaklad = "/uzytkownicyWZakladach/pracownikWidocznosc",
  aktualizujPracownikowMojZaklad = "/uzytkownicyWZakladach/pracownikWidocznosc",

  listaPlatnosci = "/platnosci/listaPlatnosci",
  utworzeniePlatnosci = "/platnosci/nowaPlatnosc",
  aktywacjaKonta = "/platnosci/aktywacjaKonta",
  pracownik = "/uzytkownicyWZakladach/pracownik/",
  PlatnosciIloscPracownikow = "/platnosci/iloscPracownikow",
  PlatnosciIUslugaSMS = "/platnosci/uslugaSms",
  mojeKonto = "/users/profil",

  informacjeDoPaneluPlatnosci = "/platnosci/informacjeDoPaneluPlatnosci",
  listaOplat = "/platnosci/listaOplat",
  zwolnionyPrzywroconyPracownikMojZaklad = "/listaPracownikow/zwolnionyPrzywrocony",

  panelSms = "/sms/panelUslugi",
  wykresStanuKonta = "/platnosci/wykresStanuKOnta",

  uslugiPanel = "/uslugi/panel",

  zarejestrowaneWizytyTerminy = "/kalendarzTerminow/terminy",
  zarejestrowaneWizytyDlaPracownika = "/kalendarzTerminow/terminyDlaPracownika",

  //wizyty
  wizytyDzis = "/wizyty/wizytyDzis",
  wizytyZakladu = "/wizyty/wizytyZakladu",

  kalendarzTerminowPrzerwa = "kalendarzTerminow/przerwa",
  kalendarzRejestracjaWizytyZPanelu = "/kalendarzTerminow/rejestracjaWizyty",

  kalendarzTerminowDniWolneIPrzerwyZakladu = "/dniWolnePrzerwy",
  kalendarzOznaczJakoDzienWolny = "/dniWolne/dzienWolny",
  kalendarzOznaczJakoDzienPracy = "/dniWolne/dzienPracy",
  tabelaPrzerwDane = "/dniWolne/tabelaPrzerw",

  listaKlientowCalosc = "/klienci/listaCalosc",
  listaKlientowZalogowanegoUzytkownika = "/klienci/lista",
  listaKlientowUzytkownika = "/klienci/lista",
  //harmonogram dnia
  harmonogramDniaInformacjeDlaAdministratora = "/panelPracownika/harmonogram/daneDlaAdministratora",

  //powiadomienia zakładu
  listaPowiadomienDlaZakladu = "/powiadomienia",
  listaPowiadomienOdczytajPowiadomienie = "/powiadomienia/odczytaj/",
  listaPowiadomienUsunPowiadomienie = "/powiadomienia/usun/",

  //powiadomienia uzytkownika
  listaPowiadomienDlaUzytkownika = "/powiadomieniaUzytkownika",
  listaPowiadomienUzytkownikaUsunPowiadomienie = "/powiadomieniaUzytkownika/usun/",
  listaPowiadomienUzytkownikaOdczytajPowiadomienie = "/powiadomieniaUzytkownika/odczytaj/",

  //strona reklamowa
  UstawieniaStronyReklamowej = "/stronaReklamowaDane/ustawieniaStronyReklamowej",
  banerStronyReklamowej = "/pliki/banerStronyReklamowej",
  logoStronyReklamowej = "/pliki/logoStronyReklamowej",

}
