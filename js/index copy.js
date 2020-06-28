function getMatematika(){
    $('#sadrzaj').load('vezbe/matematika.html');
}

function getPovrsina(){
    $('#divmatematika').load('vezbe/povrsina.html');
}

function getSabiranje(){
    $('#divmatematika').load('vezbe/sabiranje.html');
}


function NoviPokusaj(id){
    var z = 'vezbe/' + id + '.html';
    $('#divmatematika').load(z);
}

function getHtml(id){
    var z = 'vezbe/' + id + '.html';
    $('#divmatematika').load(z);
}

