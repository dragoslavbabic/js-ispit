//VEZBA 05, zadatak 04
function BrojKaraktera() {
    var recenica = document.getElementById("recenica").value;
    recenica = recenica.toUpperCase();
    var niz = recenica.split('');
    var occ = {};
    for (var i = 0; i < niz.length; i++) {
        if (occ[niz[i]]) occ[niz[i]]++;
        else occ[niz[i]] = 1;
    }
    for (var i in occ) {
        console.log('count of ' + i + ' -> ' + occ[i]);
        document.getElementById("broj_karaktera").innerHTML += '<br> Broj karaktera "' + i + '" = ' + occ[i];
    }
}

//Koristeci JS metodu REDUCE ova funcija moze da se napise u obliku Funkcionalnog programiranja
//bez upotreba "for" petlje
const recenica = document.getElementById("recenica");
function BrojKarakteraFP() {
  document.getElementById("broj_karaktera").innerHTML ='';
    const broj_karaktera = function (tekst) {
        return tekst.split('').reduce(function (tempNiz, char) {
          tempNiz[char] = (tempNiz[char] || 0) + 1;
          return tempNiz;
        }, {})
      };
      //console.log(broj_karaktera(recenica.value));
      for (let i in broj_karaktera(recenica.value)){
        document.getElementById("broj_karaktera").innerHTML += '<br> Broj karaktera "' + i + '" = ' + broj_karaktera(recenica.value)[i];
      }
}

//Funkcija napisana u arrow formatu
function BrojKarakteraFP_Arrow(){
  document.getElementById("broj_karaktera").innerHTML ='';
    const broj_karaktera = tekst => tekst.split('').reduce((tempNiz,char)=>{tempNiz[char]=(tempNiz[char]||0)+ 1;return tempNiz;},{})
    for (let i in broj_karaktera(recenica.value)){
        document.getElementById("broj_karaktera").innerHTML += '<br> Broj karaktera "' + i + '" = ' + broj_karaktera(recenica.value)[i];
      }
        
}

