function Ponovi(){
$('#stranica_a').html((()=> Math.floor(Math.random()* 30)+1));
$('#stranica_b').html((()=> Math.floor(Math.random()* 30)+1));
$("#rez_pov_input").val('');
$("#rez_ob_input").val('');

}
const IzracunajObimPovrsina = (a,b) => [2 * a + 2 * b,a * b];

const TestPovrsina = (x,y) => x==y ? "Površina: Rezultat je tačan!" : "Površina: Rezultat nije tačan. Tačan rezultat je "+ x + ".";

const TestObim = (x,y) => x==y ? "Obim: Rezultat je tačan!" : "Obim: Rezultat nije tačan. Tačan rezultat je "+ x + ".";

function ObimPovrsinaFP(){
    const [ob,pov] = IzracunajObimPovrsina($('#stranica_a').html(),$('#stranica_b').html());
    $('#pov_provera').html(TestPovrsina(pov,$("#rez_pov_input").val()));
    $('#obim_provera').html(TestObim(ob,$("#rez_ob_input").val()));
}



