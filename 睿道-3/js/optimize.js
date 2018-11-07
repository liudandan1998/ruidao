/*
* @Author: name
* @Date:   2018-09-07 20:24:28
* @Last Modified by:   name
* @Last Modified time: 2018-09-07 20:24:49
*/

'use strict';
$(function(){
  //console.log($(".swiper-slide").length);
  var swiperN= new Swiper('.slideshow-4', {
  slidesPerView:4,
  breakpoints:{
    1920:{
      slidesPerView:4,
    },
    1199:{
      slidesPerView:3,
    },
    992:{
      slidesPerView:2,
    },
    768:{
      slidesPerView:1,
    },
  }
  //分液器

});
  $(".inner-a1").click(function(){
    $(".inner-b1").toggleClass("on-4");
  })
  $(".inner-a2").click(function(){
    $(".inner-b2").toggleClass("on-4");
  })
  $(".inner-a3").click(function(){
    $(".inner-b3").toggleClass("on-4");
  })
  $(".inner-a4").click(function(){
    $(".inner-b4").toggleClass("on-4");
  })
  $(".inner-a5").click(function(){
    $(".inner-b5").toggleClass("on-4");
  })
  $(".inner-a6").click(function(){
    $(".inner-c6").toggleClass("on-4");
  })
  //
  // $(".seo7-z>li").click(function(){
  //   $(this).toggleClass("tagg");
  // })
})










