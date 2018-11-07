/*
* @Author: name
* @Date:   2018-09-03 19:14:07
* @Last Modified by:   name
* @Last Modified time: 2018-09-07 19:59:50
*/

'use strict';
console.log($(".slideshow-3").length)

//主页banner图轮播
if($(".slideshow-3").length==1){
  var mySwiper = new Swiper ('.slideshow-3', {
    loop: true,
    autoplay:true,
    autoplay: {
      delay: 2000,
      stopOnLastSlide: false,
      disableOnInteraction: false,
    },

    // 如果需要分页器
    pagination: {
      el: '.slideshowStyle',
      clickable :true,
      // type : 'custom',
      renderBullet: function (index, className) {
        return '<span class="' + className + '"></span>';
      },
    },

    // 如果需要前进后退按钮
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

  })
  //鼠标覆盖停止自动切换
  mySwiper.el.onmouseover = function(){
    mySwiper.autoplay.stop();
  }
  mySwiper.el.onmouseout = function(){
    mySwiper.autoplay.start();
  }
}

//微信二维码
$(".tel-3 .weixin").mouseover(function() {
  $(".tel-3 .code").css("display","block");
  $(".tel-3 .weixin").mouseout(function(){
    $(".tel-3 .code").css("display","none");
  })
});

//导航栏显示
$(".logo-3 .icon-ICon").click(function(){
  $(".nav-3").toggleClass('block-3');
})
