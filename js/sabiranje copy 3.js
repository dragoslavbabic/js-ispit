const arr=[];

const proveri =    
'<div class="col-12 text-center proveri_rezultate">'+
'<button onclick="uhuh(arr)" class="btn btn-primary">Proveri!</button>'+
'</div>';

function GenerisiZadatke(){
    $('#appendme,.proveri_rezultate').html('');
    let y = new Kartica("sabiranje",100,999);
    let r;

for(const key in Array.from({length:5})){
    r = y.generisiKarticu();
    $('#appendme').append(r);
}
$('.rezultati').append(proveri);
//console.log(r);
}

const x = $('input[name="cifre"]:checked').val();
console.log(x);

function getVal(){
    $('.dugme').unbind().on('click','button',function() {
        let rez = $(this).closest('div.sab').find('input').val();
        $(this).closest('div.sab').find('#potvrdi_odgovor').text(rez);
        let broj1 = Number( $(this).closest('div.rand').find('#broj_1').text());
        let broj2 = Number( $(this).closest('div.rand').find('#broj_2').text());
        let broj3 = Number($(this).closest('div.rand').find('#broj_3').text());
        let objekat = new KarticaPodaci(arr.length+1,[broj1,broj2,broj3],rez);
        arr.push(objekat);
    });
}

function getSum(total, num) {
    return total + Math.round(num);
  }

function uhuh(x) {
    x.forEach(element => {
        let rez_card = 
        '<div class="zadaci_sadrzaj card col" style="width: 18rem;"></div>'+
        '<h4>Zadatak broj '+ element._zadatak+'</h4>'+
        '<p>Brojevi za sabiranje su: ('+ element._brojevi+')</p>'+
        '<p>Tacan rezultat je: '+ element._brojevi.reduce(getSum,0)+'</p>';
        
        $('.zadaci').append('<div class="zadaci_sadrzaj card col" style="width: 18rem;"></div>');
        $('.zadaci_sadrzaj').append('<h4>Zadatak broj '+ element._zadatak+'</h4>');
        $('.zadaci_sadrzaj').append('<p>Brojevi za sabiranje su: ('+ element._brojevi+')</p>');
        $('.zadaci_sadrzaj').append('<p>Tacan rezultat je: '+ element._brojevi.reduce(getSum,0)+'</p>');
    });
}
