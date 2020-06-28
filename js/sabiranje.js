const arr=[];

function GenerisiZadatke(){
    let y = new Kartica("sabiranje",100,999);
    let r;
    

for(const key in Array.from({length:5})){
    r = y.generisiKarticu();
    $('#appendme').append(r);

}
console.log(r);
}


const x = $('input[name="cifre"]:checked').val();
console.log(x);

function getVal(){
    $('.dugme').unbind().on('click','button',function() {
        let rez = $(this).closest('div.sab').find('input').val();
        $(this).closest('div.sab').find('#potvrdi_odgovor').text(rez);
        let broj1 = $(this).closest('div.rand').find('#broj_1').text();
        let broj2 = $(this).closest('div.rand').find('#broj_2').text();
        let broj3 = $(this).closest('div.rand').find('#broj_3').text();
        let objekat = new Proveri(arr.length+1,[broj1,broj2,broj3],rez,'test');
        arr.push(objekat);
    });
    
}
function proveri (x){
    let y= x;
    console.log(y);
}