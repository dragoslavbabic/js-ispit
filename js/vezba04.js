//VEZBA 04, zadatak 01
document.getElementById("plus_jedan").onclick = function plusJedan() {
  document.getElementById("ispisi_brojeve01").innerHTML = "";
  var krajnji_broj01 = document.getElementById('broj_input01').value;
  document.getElementById("zeljeni_broj01").innerHTML = krajnji_broj01;
  for (var i = 0; i <= krajnji_broj01; i++) {
    document.getElementById("ispisi_brojeve01").innerHTML += "<br>" + i;
  }
}

//jednostavan zadatak nije bilo lako napisati bez koriscenja for petlje, kako to nalazu nepisana pravila funkcionalnog programiranja.
const zero = 0;

function testrange() {
  document.getElementById("ispisi_brojeve01").innerHTML = "";
  let krajnji_broj = parseInt(document.getElementById('broj_input01').value) + 1;
  (function (n, m) { //samoizvrsavajucoj anonimnoj funckiji prosledjuejmo 2 parametra, start i end vrednosti
    Array.from({ //kreiranje praznog niza
      length: m //odredjene duzine
    }, function (v, i) { //kreirani niz ne sadrzi vrednosti vec samo indekse, v ce ostati undifined
      return document.getElementById("ispisi_brojeve01").innerHTML += "<br>" + (i + n);
    });
  })(zero, krajnji_broj);
}

//Ovu funkciju mozemo napisati i obliku arrow funkcije na sledeci nacin

function testrange_arrow() {
  document.getElementById("ispisi_brojeve01").innerHTML = "";
  let krajnji_broj = parseInt(document.getElementById('broj_input01').value) + 1;
  ( (n, m) =>{Array.from({length: m}, (v, i) => document.getElementById("ispisi_brojeve01").innerHTML += "<br>" + (i + n));
  })(zero, krajnji_broj);
}