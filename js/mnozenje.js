function getVal() {
  $('.dugme').unbind().on('click', 'button', function () {
    let rez = $(this).closest('div.sab').find('input').val();
    $(this).closest('div.sab').find('#potvrdi_odgovor').text(rez);
    let broj1 = Number($(this).closest('div.rand').find('#broj_1').text());
    let broj2 = Number($(this).closest('div.rand').find('#broj_2').text());
    let objekat = new KarticaPodaci(
      arr.length + 1,
      [broj1, broj2],
      rez
    );
    arr.push(objekat);
  });
}

