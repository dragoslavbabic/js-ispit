$('#rez_plus_input').on('keyup', function() {
    var reverse = $(this).val().split('').reverse().join('');
     $('#display').text(reverse);
 });
function GenerisiZadatke(){
const el ='<div class="col-sm-2 mx-auto zadatak">'+ 
'<h5 id="zadatak_obim"> ZADATAK: Saberi sledeće brojeve: </h5><br>' +
'<p><span> &nbsp;</span><span id="broj_1">12331</span></p>'+
'<p> <span id="broj_2">+22344</span></p>' +
'<hr>'+
'<div>' +
'<input type="text" id="rez_plus_input" placeholder="upisi rezultat" /> Upiši rezultat!'+
'</div>'+
'<div>'+
'<input type="button" onclick="ObimPovrsinaFP()" id="rez_sabiranje" value="Proveri!">'+
'<input type="button" onclick="NoviPokusaj(this.id)" id="click_sabiranje" value="Novi zadatak!">'+
'</div>'+
'</div>'+
'<div class="card h-100 mb-2">'+
'<div class="card-header">'+
    '<span class="small badge badge-pill badge-primary font-weight-normal float-right mt-2 align-middle">3</span>'+
    '<h3>Card</h3>'+
'</div>'+
'<div class="card-block">'+
    '<p>Content is beautiful, but content can be very boring.</p>'+
    '<a href=""><span class="badge badge-default">tag</span></a>'+
    '<a href=""><span class="badge badge-default">tag</span></a>'+
'</div>'+
'<div class="card-footer">Footer</div>'+
'</div>'

;
$('#appendme').append(el);
}