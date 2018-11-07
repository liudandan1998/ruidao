/*
* @Author: name
* @Date:   2018-09-07 20:00:30
* @Last Modified by:   name
* @Last Modified time: 2018-09-08 15:04:38
*/

'use strict';

//服务领域轮播图
var fieldY = new Swiper('.field-bottom', {
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
  },
  // 如果需要分页器
  pagination: {
    el: '.fieldStyle',
    clickable :true,
    // type : 'custom',
    // renderBullet: function (index, className) {
    //   return '<span class="' + className + '"></span>';
    // },
  },
});

$(window).resize(function(){
   //执行代码块
   console.log($(".fieldStyle span").length);
    if($(".swiper-pagination span").length==1){
      $(".swiper-pagination-bullet").addClass('vanish');
    }else{
      $(".swiper-pagination-bullet").removeClass('vanish');
    }
});


 //网站建设轮播列表
 //左侧导航
var galleryTopY = new Swiper('.caseUl', {
  slidesPerView:"auto",//设置slide容器能够同时显示的slide数量
  autoHeight:true,
  slideToClickedSlide:true,//设置为true则点击slide会过度到这个slide
  normalizeSlideIndex:false,//是你的活动块不指示最上面的那个slide
});
var galleryBottomY = new Swiper('.caseImg', {
  slidesPerView:1,
  autoHeight:true,
  //每次下面显示的slide发生改变时做什么事
  on: {
    slideChange:function(swiper){
      var i=this.activeIndex;
      $(".caseUl").find(".swiper-slide").eq(i).addClass('on').siblings().removeClass("on");
      console.log(i);
    },
  },
  // 如果需要分页器
  pagination: {
    el: '.caseStyle',
    clickable :true,
  },
});
galleryTopY.on('click',function(){
  var i=this.activeIndex;//活动块下标
  $(".caseUl").find(".swiper-slide").eq(this.activeIndex).addClass('on').siblings().removeClass("on");
  galleryBottomY.slideTo(i);
})


//服务领域轮播图
var advantageY = new Swiper('.advantage_bottom', {
  slidesPerView:5,
  breakpoints:{
    1920:{
      slidesPerView:5,
    },
    1199:{
      slidesPerView:4,
    },
    992:{
      slidesPerView:3,
    },
    768:{
      slidesPerView:2,
    },
  },
  // 如果需要分页器
  pagination: {
    el: '.advantageStyle',
    clickable :true,
  },
});

//联系页轮播图
var relationY = new Swiper('.diligently_bottom', {
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
});

$(".map-3 a").hover(function(){
    $(this).find("span").css("display","block");
  },function(){
    $(this).find("span").css("display","none");
  })
