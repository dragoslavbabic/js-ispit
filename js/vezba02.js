//VEZBA 02, zadatak 01
document.getElementById("obim_povrsina_kruga01").onclick = function ObimPovrsinaKruga() {
    var poluprecnik = prompt("Unesi vrednost poluprecnika");
    var povrsina = (poluprecnik * poluprecnik) * 3.14;
    var obim = 2 * poluprecnik * 3.14;
    document.getElementById("poluprecnik01").innerHTML = poluprecnik;
    document.getElementById("povrsina01").innerHTML = povrsina;
    document.getElementById("obim01").innerHTML = obim.toFixed(1);
}
//VEZBA 02, zadatak 02
document.getElementById("obim_povrsina_kruga02").onclick = function ObimPovrsinaKruga() {
    var poluprecnik = prompt("Unesi vrednost poluprecnika");
    var povrsina = (poluprecnik * poluprecnik) * 3.14;
    var obim = (2 * poluprecnik) * 3.14;
    document.getElementById("poluprecnik02").innerHTML = poluprecnik;
    document.getElementById("obim02").innerHTML = obim;
    document.getElementById("povrsina02").innerHTML = povrsina.toFixed(1);
}

//VEZBA 02, zadatak 03
document.getElementById("konvertor").onclick = function bitsConv() {
    var bits = prompt("Unesi broj bita:");
    var byte = bits / 8;
    var kbyte = byte / 1024;
    var mbyte = kbyte / 1024;
    var gbyte = mbyte / 1024;
    document.getElementById("bits").innerHTML = bits;
    document.getElementById("byte").innerHTML = byte;
    document.getElementById("kbyte").innerHTML = kbyte;
    document.getElementById("mbyte").innerHTML = mbyte;
    document.getElementById("gbyte").innerHTML = gbyte;
}

//VEZBA 02, zadatak 04
document.getElementById("manipulator").onclick = function stringManipulator() {
    var string = prompt("Unesi proizvoljni string!");
    document.getElementById("string").innerHTML = string;
    document.getElementById("upper").innerHTML = string.toUpperCase();
    document.getElementById("lower").innerHTML = string.toLowerCase();
    document.getElementById("char_num").innerHTML = string.length;
}