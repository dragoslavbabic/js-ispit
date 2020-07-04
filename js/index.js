const arr = [];
const ocena = [];
const ok = 'Odgovor je tačan!!'
const nok = 'Odgovor nije tačan!!'

function getVal() {
  $('.dugme').unbind().on('click', 'button', function () {
    let rez = Number($(this).closest('div.sab').find('input').val());
    $(this).closest('div.sab').find('#potvrdi_odgovor').text(rez);
    let broj1 = Number($(this).closest('div.rand').find('#broj_1').text());
    let broj2 = Number($(this).closest('div.rand').find('#broj_2').text());
    let objekat = new KarticaPodaci(
      arr.length + 1,
      [broj1, broj2],
      rez
    );
    arr.push(objekat);
  });
}

function GenerisiZadatke(operacija) {
  let proveri_div =
    '<div class="col-12 text-center proveri_rezultate">' +
    '<button onclick="testirajMe(arr,\'' +
    operacija +
    '\')" id="proveri_rezultat" class="btn btn-primary">Proveri!</button>' +
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

class KarticaPodaci extends Array {
  constructor(zadatak, brojevi, rez) {
    super();
    this._zadatak = zadatak;
    this._brojevi = brojevi;
    this._rez = rez;
  }
}

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
      '<label for="usr">Upiši vrednost obima!</label>' +
      '<br>&nbsp' +
      '<input type="text" class="form-control" id="rez_povrsina">' +
      '<label for="usr">Upiši vrednost površine!</label>' +
      '<div class="dugme">' +
      '<button onclick="getVal()" class="btn btn-primary">Potvrdi odgovor!</button>' +
      '</div>' +
      '<div class="odgovor">' +
      '<p >Tvoj odgovor je:<br> ' +
      'Obim =  <span id="potvrdi_odgovor_obim">' +
      '</span><br>' +
      'Površina = <span id="potvrdi_odgovor_povrsina">' +
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
    return opis == 'plus' ? ['Saberi sledeće brojeve:', this.sabiranje()] :
      opis == 'minus' ? ['Oduzmi sledeće brojeve:', this.oduzimanje()] :
      opis == 'pomnozi' ? ['Pomnoži sledeće brojeve:', this.mnozenje()] :
      opis == 'podeli' ? ['Podeli sledeće brojeve:', this.deljenje()] : [
        ' Izračunaj obim i površinu pravoguanika ako su date stranice:',
        this.obpovrsina(),
      ];
  }

  rndNiz(l, g, h) {
    let niz = [];
    for (const key in Array.from({
        length: l
      })) {
      let r = this.rndBroj(g, h);
      niz.push(r);
    }
    niz.sort((a, b) => b - a
    );
    return niz;
  }

  rndBroj = (g, h) => Math.floor(Math.random() * (h - g + 1)) + g;

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

  obpovrsina() {
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

  proveriCard(element_zad, x, y, z) {
    let tacan_rezultat;
    let tvoj_odgovor;
    let p;
    'obim' in z ? p = "<br>Obim: " + z.obim + '<br>' + "Površina: " + z.povrsina : p = z.operacija;
    "obim" in z
      ?
      (tacan_rezultat =
        "<br>Obim = " + x[0] + "<br>" + "Površina = " + x[1] + "<br>") :
      (tacan_rezultat = x);
    'obim' in z ? tvoj_odgovor = '<br>Obim = ' + y[0] + '<br>' + 'Površina = ' + y[1] + '<br>' : tvoj_odgovor = y;

    let card =
      '<div class="zadaci_sadrzaj card col " style="width: 18rem;">' +
      '<h4>Zadatak broj ' +
      element_zad +
      '</h4>' +
      '</p>' +
      '<p>Tačan rezultat je: <b>' +
      tacan_rezultat +
      '</b></p>' +
      '<p>Tvoj odgovor je: <b>' +
      tvoj_odgovor +
      '<b></p>' +
      p +
      '</div>';
    return card;
  }

  obpov = (a, b) => [2 * a + 2 * b, a * b];

  minus = (total, num) => total - num;

  pomnozi = (total, num) => total * num;

  podeli = (total, num) => Math.floor((total / num) * 100) / 100;

  plus = (total, num) => total + num;

  proveri(x, op) {
    x.forEach((element) => {
      let resenje = element._brojevi.reduce(this[op]);
      let odgovor = element._rez;
      let proveri_odgovor =
        op == 'obpov' ?
        k.proveriRezultatOP(resenje, odgovor) :
        k.proveriRezultat(resenje, odgovor);
      let rez_card = this.proveriCard(
        element._zadatak,
        resenje,
        odgovor,
        proveri_odgovor
      );
      ocena.push(proveri_odgovor);
      $('.rezultati').append(rez_card);
      $('#proveri_rezultat').prop('disabled', true);
    });
    $('.ocena').append(this.oceniMe(op));
    arr.length = 0;
    ocena.length = 0;
  }

  proveriRezultat = (x, y) => x == y ? {operacija: ok} : {operacija: nok};

  proveriRezultatOP(resenje, odgovor) {
    let tacni_netacni = {};
    resenje[0] == odgovor[0] ?
      tacni_netacni.obim = ok :
      tacni_netacni.obim = nok
    resenje[1] == odgovor[1] ?
      tacni_netacni.povrsina = ok :
      tacni_netacni.povrsina = nok;
    return tacni_netacni;
  }

  oceniMe(op) {
    let newob = [];

    ocena.forEach(item => Object.keys(item).map( key => {
      newob.push(item[key]);
    }));

    let tacan_odgovor = newob.reduce((n, x) => n + (x == nok), 0);
    console.log(tacan_odgovor);
    let tekst =
      '<div class="col-12 text-center oceni_me">' +
      '<h4>Od 5 zadataka urađeno je '+ arr.length+'.<br> Ocena je ' +
      this.odrediProsek(tacan_odgovor,op) +
      '</h4' +
      '</div>';
    return tekst;
  }

  prosek = (x,op) => op == 'obpov' ? (x / 10) : (x / 5) ;

  odrediProsek = (x,op) => 
     this.prosek(x,op) < 0.4 ?
      1 :
      this.prosek(x,op) >= 0.4 && this.prosek(x,op) < 0.55 ?
      2 :
      this.prosek(x,op) >= 0.55 && this.prosek(x,op) < 0.7 ?
      3 :
      this.prosek(x,op) >= 0.7 && this.prosek(x,op) < 0.85 ?
      4 :
      5 + '! BRAVO!!!!';
    
}

const testirajMe = (niz, op) => {
  k = new Kartica();
  k.proveri(niz, op);
};