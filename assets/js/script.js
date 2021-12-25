$(function() {
    $('.c-nav__btn').on('click', function() {
        $('.l-header').toggleClass('js-open');
    })

    $('.c-nav__mask').on('click', function() {
        $('.l-header').toggleClass('js-open');
    })
    
    $('.slider').slick({
        autoplay: true, //自動でスクロール
        autoplaySpeed: 0, //自動再生のスライド切り替えまでの時間を設定
        speed: 5000, //スライドが流れる速度を設定
        cssEase: "linear", //スライドの流れ方を等速に設定
        slidesToShow: 4, //表示するスライドの数
        swipe: false, // 操作による切り替えはさせない
        arrows: false, //矢印非表示
        pauseOnFocus: false, //スライダーをフォーカスした時にスライドを停止させるか
        pauseOnHover: true ,//スライダーにマウスホバーした時にスライドを停止させるか
        responsive: [
            {
              breakpoint: 980,
              settings: {
                slidesToShow: 3, //画面幅750px以下でスライド3枚表示
              }
            },
            {
              breakpoint: 660,
              settings: {
                slidesToShow: 2, //画面幅750px以下でスライド3枚表示
              }
            }
          ]
    });
})

