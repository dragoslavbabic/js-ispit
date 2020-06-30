class Kartica {
  constructor (opis, min, max) {
    this.opis = opis;
    this.min = min;
    this.max = max;
  }

  generisiKarticu () {
    const [opis, operacijax] = this.opisOperacija ();
    let operacija =
      operacijax +
      '<div class="form-group sab">' +
      '<input type="text" class="form-control ">' +
      '<label for="usr">Upisi rezultat!</label>' +
      '<div class="dugme">' +
      '<button onclick="getVal()" class="btn btn-primary">Potvrdi odgovor!</button>' +
      '</div>' +
      '<div class="odgovor">' +
      '<p >Tvoj odgovor je: ' +
      '<span id="potvrdi_odgovor">' +
      '</span>' +
      '</p>' +
      '</div>' +
      '</div>';

    let el =
      '<div class="card col" style="width: 18rem;">' +
      '<div class="card-body rand">' +
      '<h5 class="card-title">ZADATAK:</h5>' +
      '<p class="card-text">' +
      opis +
      '</p>' +
      operacija;
    '</div>' + '</div>';
    return el;
  }

  opisOperacija () {
    let opis = this.opis;
    return opis == 'sabiranje'
      ? ['Saberi sledeće brojeve:', this.sabiranje ()]
      : opis == 'oduzimanje'
          ? ['Oduzmi sledeće brojeve:', this.oduzimanje ()]
          : opis == 'mnozenje'
              ? 'Pomnoži sledeće brojeve:'
              : opis == 'deljenje'
                  ? 'Podeli sledeće brojeve:'
                  : ' Izračunaj obim i površinu pravoguanika ako su date stranice a = 19 cm i stranice b = 19 cm';
  }

  rndNiz (l, g, h) {
    let niz = [];
    for (const key in Array.from ({length: l})) {
      let r = this.rndBroj (g, h);
      niz.push (r);
    }
    niz.sort (function (a, b) {
      return b - a;
    });
    return niz;
  }

  sabiranje () {
    let niz = this.rndNiz (3, this.min, this.max);
    let x =
      '<p><span> &nbsp;</span>' +
      '<span id="broj_1">' +
      niz[0] +
      '</span><br>' +
      '+<span id="broj_2">' +
      niz[1] +
      '</span><br>' +
      '+<span id="broj_3">' +
      niz[2] +
      '</span></p><hr>';
    return x;
  }

  oduzimanje () {
    let niz = this.rndNiz (2, this.min, this.max);
    let x =
      '<p><span>&nbsp</span>' +
      '<span id="broj_1">' +
      niz[0] +
      '</span><br>' +
      '<span>-</span><span id="broj_2">' +
      niz[1] +
      '</span><br>';
    return x;
  }

  rndBroj = (g, h) => Math.floor (Math.random () * (h - g + 1)) + g;

  proveriRezultat (x, y) {
    return x == y ? 'Odgovor je tacan!!' : 'Odgovor nije tacan!!!';
  }

  oceniMe () {
    let recenica = 'Odgovor je tacan!!';
    let tacan_odgovor = ocena.reduce ((n, x) => n + (x === recenica), 0);
    let tekst =
      '<div class="col-12 text-center oceni_me">' +
      '<h4>Ocena je ' +
      this.prosek (tacan_odgovor) +
      '</h4' +
      '</div>';
    return tekst;
  }

  prosek (x) {
    let prosek = x / 5;
    return prosek < 0.4
      ? 1
      : prosek > 0.4 && prosek < 0.54
          ? 2
          : prosek > 0.55 && prosek < 0.69
              ? 3
              : prosek > 0.70 && prosek < 0.84 ? 4 : 5 + '! BRAVO!!!!';
  }
}

class Proveri {
  constructor (zadatak, brojevi, rez, tacan_rez) {
    this._zadatak = zadatak;
    this._brojevi = brojevi;
    this._rez = rez;
    this._tacan_rez = tacan_rez;
  }
}

class KarticaPodaci extends Array {
  constructor (zadatak, brojevi, rez) {
    super ();
    this._zadatak = zadatak;
    this._brojevi = brojevi;
    this._rez = rez;
  }
}
