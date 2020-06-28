function NoviPokusaj(id){
    var z = 'vezbe/' + id + '.html';
    $('#divmatematika').load(z);
}

function getHtml(id){
    var z = 'vezbe/' + id + '.html';
    $('#divmatematika').load(z);
}

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
        let x = 
        '<p><span> &nbsp;</span>'+
        '<span id="broj_1">'+this.rndBroj()+'</span><br>'+
        '+<span id="broj_2">'+this.rndBroj()+'</span><br>'+
        '+<span id="broj_3">'+this.rndBroj()+'</span></p><hr>';
        return x;
    }

    // rndBroj(){
    //     ((a,b) => {
    //         Math.floor(Math.random()*(b-a+1))+a;
    //       })(this.min,this.max)
    // }

    rndBroj=()=> Math.floor(Math.random()*(this.max-this.min+1))+this.min;
        

    raspon(){
        return "Split"
    }
    
}
