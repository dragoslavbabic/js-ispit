//zadatak-02
const stranica_a = Math.floor(Math.random()* 30)+1;
const stranica_b = Math.floor(Math.random()* 30)+1;
const str_a_span = document.getElementById("stranica_a");
const str_b_span = document.getElementById("stranica_b");
str_a_span.innerHTML = stranica_a;
str_b_span.innerHTML = stranica_b;
const op_provera = document.getElementById("obim_provera");


//klasican nacin
// document.getElementById("rez_povrsina").onclick = function Povrsina() {
//     var a = stranica_a;
//     var b = stranica_b;
//     var o = 2 * a + 2 * b;
//     var p = a * b;
//     str_a_span.innerHTML = a;
//     str_b_span.innerHTML = b;
// }

//zadatak-02.01 Cista funkcija koja vraca niz od dva clana
function ObimPovrsinaAlt(a,b){
    return [2 * a + 2 * b,a * b];
}

//zadatak-02.01 Funkcija koja se poziva na klik iz pretrazivaca
function ObimPovrsinaFP(){
    const strA=stranica_a;
    const strB =stranica_b;
    const [ob,pov] = ObimPovrsinaAlt(strA,strB) //ovde je iskoriscena nova mogucnost ECMAScript 6 - "Destructuring Assignment"
    op_provera.innerHTML = OpProvera();
}

function OpProvera(){
    return  ("TEST");
}


