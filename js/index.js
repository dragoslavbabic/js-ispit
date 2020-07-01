const arr = [];
const ocena = [];
class Kartica {
  constructor(opis, min, max) {
    this.opis = opis;
    this.min = min;
    this.max = max;
  }

  osnovneOperacijeHtml() {
    let html =
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
    return html;
  }

  obimPovrsinaHtml() {
    let html =
      '<div class="form-group sab">' +
      '<input type="text" class="form-control" id="rez_obim">' +
      '<label for="usr">Upisi rezultat!</label>' +
      '<input type="text" class="form-control" id="rez_povrsina">' +
      '<label for="usr">Upisi rezultat!</label>' +
      '<div class="dugme">' +
      '<button onclick="getVal()" class="btn btn-primary">Potvrdi odgovor!</button>' +
      '</div>' +
      '<div class="odgovor">' +
      '<p >Tvoj odgovor je:<br> ' +
      'Obim je: <span id="potvrdi_odgovor_obim">' +
      '</span><br>' +
      'Površina je: <span id="potvrdi_odgovor_povrsina">' +
      '</span>' +
      '</p>' +
      '</div>' +
      '</div>';
    return html;
  }

  generisiKarticu() {
    const [opis, operacija] = this.opisOperacija();
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

  opisOperacija() {
    let opis = this.opis;
    return opis == 'plus'
      ? ['Saberi sledeće brojeve:', this.sabiranje()]
      : opis == 'minus'
      ? ['Oduzmi sledeće brojeve:', this.oduzimanje()]
      : opis == 'pomnozi'
      ? ['Pomnoži sledeće brojeve:', this.mnozenje()]
      : opis == 'podeli'
      ? ['Podeli sledeće brojeve:', this.deljenje()]
      : [
          ' Izračunaj obim i površinu pravoguanika ako su date stranice:',
          this.obpov(),
        ];
  }

  rndNiz(l, g, h) {
    let niz = [];
    for (const key in Array.from({length: l})) {
      let r = this.rndBroj(g, h);
      niz.push(r);
    }
    niz.sort(function (a, b) {
      return b - a;
    });
    return niz;
  }

  sabiranje() {
    let niz = this.rndNiz(3, this.min, this.max);
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
      '</span></p><hr>' +
      this.osnovneOperacijeHtml();
    return x;
  }

  oduzimanje() {
    let niz = this.rndNiz(2, this.min, this.max);
    let x =
      '<p><span>&nbsp</span>' +
      '<span id="broj_1">' +
      niz[0] +
      '</span><br>' +
      '<span>-</span><span id="broj_2">' +
      niz[1] +
      '</span></p><hr>' +
      this.osnovneOperacijeHtml();
    return x;
  }

  mnozenje() {
    let cinioc1 = this.rndBroj(this.min, this.max);
    let cinioc2 = this.rndBroj(2, 9);
    let x =
      '<p><span>&nbsp</span>' +
      '<span id="broj_1">' +
      cinioc1 +
      '</span>' +
      '<span>*</span><span id="broj_2">' +
      cinioc2 +
      '</span></p><hr>' +
      this.osnovneOperacijeHtml();
    return x;
  }

  deljenje() {
    let deljenik = this.rndBroj(this.min, this.max);
    let delilac = this.rndBroj(2, 9);
    let x =
      '<p><span>&nbsp</span>' +
      '<span id="broj_1">' +
      deljenik +
      '</span>' +
      '<span>:</span><span id="broj_2">' +
      delilac +
      '</span></p><hr>' +
      this.osnovneOperacijeHtml();
    return x;
  }

  obpov() {
    let niz = this.rndNiz(2, this.min, this.max);
    let x =
      '<p><span>a =</span>' +
      '<span id="broj_1"> ' +
      niz[0] +
      '</span><br>' +
      '<span>b = </span><span id="broj_2">' +
      niz[1] +
      '</span></p><hr>' +
      this.obimPovrsinaHtml();
    return x;
  }

  rndBroj = (g, h) => Math.floor(Math.random() * (h - g + 1)) + g;

  proveriRezultat(x, y) {
    return x == y ? 'Odgovor je tacan!!' : 'Odgovor nije tacan!!!';
  }

  oceniMe() {
    let recenica = 'Odgovor je tacan!!';
    let tacan_odgovor = ocena.reduce((n, x) => n + (x === recenica), 0);
    let tekst =
      '<div class="col-12 text-center oceni_me">' +
      '<h4>Ocena je ' +
      this.prosek(tacan_odgovor) +
      '</h4' +
      '</div>';
    return tekst;
  }

  prosek(x) {
    let prosek = x / 5;
    return prosek < 0.4
      ? 1
      : prosek > 0.4 && prosek < 0.54
      ? 2
      : prosek > 0.55 && prosek < 0.69
      ? 3
      : prosek > 0.7 && prosek < 0.84
      ? 4
      : 5 + '! BRAVO!!!!';
  }

  proveri(x, op) {
    x.forEach((element) => {
      let x = element._brojevi.reduce(op);
      let y = element._rez;
      //let z = uporedi(x,y);
      let w = k.proveriRezultat(x, y);
      let rez_card =
        '<div class="zadaci_sadrzaj card col " style="width: 18rem;">' +
        '<h4>Zadatak broj ' +
        element._zadatak +
        '</h4>' +
        '<p>Brojevi su: (' +
        element._brojevi +
        ')</p>' +
        '<p>Tacan rezultat je: <b>' +
        x +
        '</b></p>' +
        '<p>Tvoj odgovor je: <b>' +
        y +
        '<b></p>' +
        w +
        '</div>';
      ocena.push(w);
      $('.rezultati').append(rez_card);
      $('#proveri_rezultat').prop('disabled', true);
    });

    let ww = this.oceniMe();
    $('.ocena').append(ww);
    arr.length = 0;
    ocena.length = 0;
  }
}

class Proveri {
  constructor(zadatak, brojevi, rez, tacan_rez) {
    this._zadatak = zadatak;
    this._brojevi = brojevi;
    this._rez = rez;
    this._tacan_rez = tacan_rez;
  }
}

class KarticaPodaci extends Array {
  constructor(zadatak, brojevi, rez) {
    super();
    this._zadatak = zadatak;
    this._brojevi = brojevi;
    this._rez = rez;
  }
}

function GenerisiZadatke(operacija) {
  let proveri_div =
    '<div class="col-12 text-center proveri_rezultate">' +
    '<button onclick="testirajMe(arr,' +
    operacija +
    ')" id="proveri_rezultat" class="btn btn-primary">Proveri!</button>' +
    '</div>';

  arr.length = 0;
  ocena.length = 0;
  $('#appendme,.proveri_rezultate,.zadaci_sadrzaj,.rezultati').html('');
  let minmax = $('input[name="cifre"]:checked').val();
  let min = parseInt(minmax.split(',')[0]);
  let max = parseInt(minmax.split(',')[1]);
  console.log(min);
  let y = new Kartica(operacija, min, max);
  let r;

  for (const key in Array.from({
    length: 5,
  })) {
    r = y.generisiKarticu();
    $('#appendme').append(r);
  }
  $('.rezultati').append(proveri_div);
}

const plus = (total, num) => total + num;

const minus = (total, num) => total - num;

const pomnozi = (total, num) => total * num;

const podeli = (total, num) => Math.floor((total / num) * 100) / 100;

const obpov = (a, b) => [2 * a + 2 * b, a * b];

const testirajMe = (niz, op) => {
  k = new Kartica();
  k.proveri(niz, op);
};
