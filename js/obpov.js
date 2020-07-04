function getVal() {
  $('.dugme')
    .unbind()
    .on('click', 'button', function () {
      let rez1 = Number($(this).closest('div.sab').find('#rez_obim').val());
      let rez2 = Number($(this).closest('div.sab').find('#rez_povrsina').val());
      $(this).closest('div.sab').find('#potvrdi_odgovor_obim').text(rez1);
      $(this).closest('div.sab').find('#potvrdi_odgovor_povrsina').text(rez2);
      let broj1 = Number($(this).closest('div.rand').find('#broj_1').text());
      let broj2 = Number($(this).closest('div.rand').find('#broj_2').text());
      let objekat = new KarticaPodaci(
        arr.length + 1,
        [broj1, broj2],
        [rez1, rez2]
      );
      arr.push(objekat);
    });
}