/*
* @Author: name
* @Date:   2018-09-07 20:17:26
* @Last Modified by:   name
* @Last Modified time: 2018-09-07 20:17:30
*/

'use strict';
//案例详情页轮播列表
//左侧导航
var galleryLeftY = new Swiper('.case_left', {
  spaceBetween: 10,
  slidesPerView:1,//设置slide容器能够同时显示的slide数量
  autoHeight:true,
  //每次下面显示的slide发生改变时做什么事
  loop:true,
  loopedSlides: 5,
  on: {
    slideChange:function(swiper){
      var i=this.activeIndex;
      $(".caseDetails_img").find(".swiper-slide").eq(this.activeIndex).addClass('on').siblings().removeClass("on");
    },
  },
  navigation: {
    nextEl: '.caseDetails-next',
    prevEl: '.caseDetails-prev',
  },
});
var galleryRightY = new Swiper('.caseDetails_img', {
  slidesPerView:3,
  spaceBetween: 10,
  autoHeight:true,
  loop:true,
  touchRatio: 0.2,
  loopedSlides: 5, //looped slides should be the same
  slideToClickedSlide: true,

  on: {
    slideChange:function(swiper){
      var i=this.activeIndex;
      $(".caseDetails_img").find(".swiper-slide").eq(this.activeIndex).addClass('on').siblings().removeClass("on");
    },
  },
  // 如果需要前进后退按钮
  navigation: {
    nextEl: '.caseDetails_img-next',
    prevEl: '.caseDetails_img-prev',
  },
});
  galleryRightY.controller.control = galleryLeftY;
  galleryLeftY.controller.control = galleryRightY;
