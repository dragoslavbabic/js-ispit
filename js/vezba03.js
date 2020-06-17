//VEZBA 03, zadatak 01

document.getElementById("dobro_jutro").onclick = function dobroJutro() {
    
    var hours = prompt("Koliko je sati?");
    var x = 0;
    while (hours > 24 && x < 3) {
        x++;
        alert("Ne mozete uneti vrednost vecu od 24!!! Pokusajte ponovo!");
        hours = prompt("Koliko je sati?");
    }
    var start=(new Date).getTime();
    document.getElementById("sat").innerHTML = hours;
    if (hours < 10) {
        document.getElementById("pozdrav").innerHTML = "dobro jutro!";
    } else if (hours > 10 && hours < 19) {
        document.getElementById("pozdrav").innerHTML = "dobar dan!";
    } else if (hours > 19 && hours < 24) {
        document.getElementById("pozdrav").innerHTML = "dobro vece!";
        alert('Code took '+((new Date).getTime()-start)+'ms');
    }
    
}


//zadatak01.01
//funkcija uradjena pomocu ternarnog operatora kao zamena za if, else if i  else
//kod je cistiji i jasniji, prihvata ulazni parametar
function DobaDanaFP(sati){
    document.getElementById("sat").innerHTML = sati;
    return sati < 10 ? document.getElementById("pozdrav").innerHTML = "dobro jutro!"
          :sati >10 && sati <19 ? document.getElementById("pozdrav").innerHTML = "dobar dan!"
          :sati >19 && sati <24 ? document.getElementById("pozdrav").innerHTML = "dobro vece!"
          : alert ("greska");
}

//primer validacije user inputa pre nego sto se pozove funkcija dobadanafp
function DobaDana(){
    const aNumber = Number(window.prompt("Unesite broj:", ""));
    return isNaN(aNumber) ? alert("Unesite broj!")
        :aNumber >= 0 && aNumber < 24 ? DobaDanaFP(aNumber): alert("Broj mora biti izmedju 0 i 24!!! Pokusajte ponovo!");
}



var start=(new Date).getTime();
//call your code
alert('Code took '+((new Date).getTime()-start)+'ms');



//VEZBA 03, zadatak 03
document.getElementById("bodovi").onclick = function bodovi_to_ocena() {
    var bodovi = prompt("Unesi broj od 0 do 100!");
    if (bodovi < 55) {
        document.getElementById("ocena").innerHTML = " 5";
    } else if (55 <= bodovi && bodovi < 64) {
        document.getElementById("ocena").innerHTML = " 6";
    } else if (65 < bodovi && bodovi < 74) {
        document.getElementById("ocena").innerHTML = " 7";
    } else if (75 < bodovi && bodovi < 84) {
        document.getElementById("ocena").innerHTML = " 8";
    } else if (85 < bodovi && bodovi < 94) {
        document.getElementById("ocena").innerHTML = " 9";
    } else if (95 < bodovi && bodovi <= 100) {
        document.getElementById("ocena").innerHTML = " 10";
    }
}
