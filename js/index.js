class Kartica{
    constructor(opis,min,max){
        this.opis = opis;
        this.min = min;
        this.max = max;
    }

    postaviOpis(){
         return this.opis;
        
    }

    generisiKarticu(){
        const [opis, operacijax] = this.opisOperacija();
        let operacija = 
        operacijax+
        '<div class="form-group sab">'+
        '<input type="text" class="form-control " id="rez_sab">'+
        '<label for="usr">Upisi rezultat!</label>'+
        '<div class="dugme">'+
        '<button onclick="getVal()" class="btn btn-primary">Potvrdi odgovor!</button>'+
        '</div>'+
        '<div class="odgovor">'+
        '<p >Tvoj odgovor je: '+
        '<span id="potvrdi_odgovor">'+
        '</span>'+
        '</p>'+
        '</div>'+
        '</div>';
        
        let el =
        '<div class="card col" style="width: 18rem;">'+
          '<div class="card-body rand">'+
            '<h5 class="card-title">ZADATAK:</h5>'+
            '<p class="card-text">'+opis+'</p>'+
            operacija;
          '</div>'+
        '</div>'
        
        ;
        return el;
        
    }

    opisOperacija(){
        let opis = this.opis;
        return opis == 'sabiranje' ? ['Saberi sledeće brojeve:', this.sabiranje()]
        : opis == 'oduzimanje' ?'Oduzmi sledeće brojeve:'
        : opis == 'mnozenje' ? 'Pomnoži sledeće brojeve:'
        : opis == 'deljenje' ?'Podeli sledeće brojeve:'
        :' Izračunaj obim i površinu pravoguanika ako su date stranice a = 19 cm i stranice b = 19 cm';

    }
    
    testMetod(x){
        return (x);
    }

    sabiranje(){
        let niz = [];
        for(const key in Array.from({length:3})){
            let r = this.rndBroj();
            niz.push(r);
        }

        niz.sort(function(a, b){return b-a});
        
        let x = 
        '<p><span> &nbsp;</span>'+
        '<span id="broj_1">'+niz[0]+'</span><br>'+
        '+<span id="broj_2">'+niz[1]+'</span><br>'+
        '+<span id="broj_3">'+niz[2]+'</span></p><hr>';
        return x;
    }

    rndBroj=()=> Math.floor(Math.random()*(this.max-this.min+1))+this.min;
    

    raspon(){
        return "Split"
    }
    
}

class Proveri {
    constructor(zadatak,brojevi,rez,tacan_rez){
        this._zadatak = zadatak;
        this._brojevi = brojevi;
        this._rez = rez;
        this._tacan_rez = tacan_rez;
    }
}
