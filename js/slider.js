$('.slider').slick({
  dots: true,
  autoplay: true,//自動的に動き出すか。初期値はfalse。
  infinite: true,//スライドをループさせるかどうか。初期値はtrue。
  centerMode: true,
  centerPadding: '60px',
  variableWidth: true,//幅の違う画像の高さを揃えて表示
  prevArrow: '<div class="slick-prev"></div>',//矢印部分PreviewのHTMLを変更
  nextArrow: '<div class="slick-next"></div>',//矢印部分NextのHTMLを変更
});