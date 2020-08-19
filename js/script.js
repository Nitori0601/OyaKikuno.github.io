$(function () {
  $(".header-sp-icon-wrap,.header-sp-nav-item").click(function () {
    if ($(".header-sp-icon-wrap").hasClass("is-open")) {
      $(".header-sp-nav").css("display", "none");
      $(".header-sp-icon-wrap").removeClass(
        "is-open"
      ); /*クリックするとクラスが削除される */
    } else {
      $(".header-sp-nav").css("display", "block");
      $(".header-sp-icon-wrap").addClass(
        "is-open"
      ); /*クリックするとクラスが追加される */
    }
  });

  //余白をクリックしても閉じられる処理
  $(".header-sp-nav").click(function () {
    $(".header-sp-nav").css("display", "none");
    $(".header-sp-icon-wrap").removeClass("is-open");
  });
});
