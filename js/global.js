/*
* @Author: name
* @Date:   2018-09-03 19:14:07
* @Last Modified by:   name
* @Last Modified time: 2018-09-06 14:34:57
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
  }
});

//案例详情页轮播列表
 //左侧导航
var galleryLeftY = new Swiper('.case_left', {
  slidesPerView:1,//设置slide容器能够同时显示的slide数量
  autoHeight:true,
  //每次下面显示的slide发生改变时做什么事
  on: {
    slideChange:function(swiper){
      var i=this.activeIndex;
      galleryLeftY.slideTo(i);
      $(".caseDetails_img").find(".swiper-slide").eq(this.activeIndex).addClass('on').siblings().removeClass("on");
    },
  },
});
var galleryRightY = new Swiper('.caseDetails_img', {
  slidesPerView:3,
  autoHeight:true,
  centeredSlides: true,
  spaceBetween: 10,
  grabCursor: true,
  on: {
    slideChange:function(swiper){
      var i=this.activeIndex;
      galleryLeftY.slideTo(i);
      $(".caseDetails_img").find(".swiper-slide").eq(this.activeIndex).addClass('on').siblings().removeClass("on");
    },
  },
  // 如果需要前进后退按钮
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

/*
* @Author: name
* @Date:   2018-09-04 21:08:35
* @Last Modified by:   name
* @Last Modified time: 2018-09-05 09:09:33
*/

'use strict';
function tabs(obj, swiperObj, className) {
    var tabSwiper = new Swiper(swiperObj, {
        autoHeight: true,
        onSlideChangeStart: function() {
            $(obj + "." + className).removeClass(className);
            $(obj).eq(tabSwiper.activeIndex).addClass(className);
        }
    });
    $(obj).on('touchstart mousedown', function(e) {
        e.preventDefault();
        $(obj + "." + className).removeClass(className);
        $(this).addClass(className);
        tabSwiper.slideTo($(this).index());
    });
    $(obj).click(function(e) {
        e.preventDefault();
    });
}

$(function() {
    var we1_c = new Swiper('.we1_c', {
        pagination: '.we1-pagination',
        paginationClickable: true,
        slidesPerView: 4,
        spaceBetween: 50,
        breakpoints: {
            991: {
                slidesPerView: 3,
                spaceBetween: 30
            },
            767: {
                slidesPerView: 2,
                spaceBetween: 40
            },
            640: {
                slidesPerView: 1,
                spaceBetween: 1
            }
        }
    })

    var we3_c = new Swiper('.we3_c', {
        pagination: '.we3-pagination',
        paginationClickable: true,
        slidesPerView: 3,
        spaceBetween: 50,
        breakpoints: {
            991: {
                slidesPerView: 3,
                spaceBetween: 30
            },
            767: {
                slidesPerView: 2,
                spaceBetween: 40
            },
            640: {
                slidesPerView: 1,
                spaceBetween: 1
            }
        }
    })
})

/*
* @Author: name
* @Date:   2018-09-04 21:08:35
* @Last Modified by:   name
* @Last Modified time: 2018-09-05 09:09:33
*/
var swiperB=new Swiper('.carousel');
var mySwiperB = new Swiper ('.bb', {
  loop: true,
  //增加小圆点
  pagination: {
    el: '.swiper-pagination',
    clickable :true,
  },
  autoplay: {
    delay: 2000,
  },
});
var fieldB = new Swiper('.over_box', {
  slidesPerView:3,
  breakpoints:{
    1920:{
      slidesPerView:3,

    },
    1220:{
      slidesPerView:2,
    },
    992:{
      slidesPerView:1,
    },
  }
});
var fieldB = new Swiper('.body', {
  slidesPerView:3,
  breakpoints:{
    1920:{
      slidesPerView:3,
    },
    1220:{
      slidesPerView:2,
    },
    768:{
      slidesPerView:1,
    },
  }
});
// var MySwiper = new Swiper ('.imgA');
// //鼠标放到图片上自动停止切换；
// mySwiper.el.onmouseover = function(){
//   mySwiper.autoplay.stop();
// }
// //鼠标从图片上移走后又继续切换；
// mySwiper.el.onmouseout = function(){
//   mySwiper.autoplay.start();
// }

// var galleryTopYB = new Swiper('.tableS', {
//   slidesPerView:"auto",//设置slide容器能够同时显示的slide数量
//   autoHeight:true,
//   slideToClickedSlide:true,//设置为true则点击slide会过度到这个slide
//   normalizeSlideIndex:false,//是你的活动块不指示最上面的那个slide
// });
// var galleryBottomYB = new Swiper('.table_content', {
//   slidesPerView:1,
//   autoHeight:true,
//   //每次下面显示的slide发生改变时做什么事
//   on: {
//     slideChange:function(swiper){
//       var i=this.activeIndex;
//       $(".tableS").find(".swiper-slide").eq(i).addClass('on').siblings().removeClass("on");
//       console.log(i);
//     },
//   },
// });
// galleryTopYB.on('click',function(){
//   var i=this.activeIndex;//活动块下标
//   $(".tableS").find(".swiper-slide").eq(this.activeIndex).addClass('on').siblings().removeClass("on");
//   galleryBottomYB.slideTo(i);
// })






var fieldY = new Swiper('.pc_pc_pc', {
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
$(".gt-2").click(function(){
  $(".one-2>li").toggleClass("off-2");
})
$(".jc-2").click(function(){
  $(".two-2>li").toggleClass("off-2");
})
$(".perform-2").click(function(){
  $(".three-2>li").toggleClass("off-2");
})
$(".delivery-2").click(function(){
  $(".four-2>li").toggleClass("off-2");
})
$(".after-2").click(function(){
  $(".five-2>li").toggleClass("off-2");
})


/***********************牛伟伟*************************/
$(function(){
  //console.log($(".swiper-slide").length);
  var swiperN = new Swiper('.slideshow-4', {
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
})




// canvas_1
var c=document.getElementById("canvas_1");
var ctx=c.getContext("2d");
ctx.beginPath();
ctx.arc(95,95,55,0,2*Math.PI);
ctx.strokeStyle="#e5e5e5";
ctx.lineWidth=5;
ctx.stroke();

ctx.beginPath();
ctx.arc(95,95,55,-Math.PI/2,Math.PI/50*(30-25));
ctx.strokeStyle="#ff4b00";
ctx.lineWidth=5;
ctx.stroke();

ctx.beginPath();
ctx.font="20px 微软雅黑";
ctx.fillStyle="#ff4b00";
ctx.fillText("30"+"%",75,80);
ctx.lineWidth = 1;

ctx.beginPath();
ctx.font="13px 微软雅黑";
ctx.fillStyle="#666";
ctx.fillText("业务来自",70,105);
ctx.lineWidth = 1;

ctx.beginPath();
ctx.font="13px 微软雅黑";
ctx.fillStyle="#666";
ctx.fillText("易站通",74,120);
ctx.lineWidth = 1;

ctx.beginPath();
ctx.arc(95,235,55,0,2*Math.PI);
ctx.strokeStyle="#e5e5e5";
ctx.lineWidth=5;
ctx.stroke();

ctx.beginPath();
ctx.font="13px 微软雅黑";
ctx.fillStyle="#666";
ctx.fillText("收获",80,215);
ctx.lineWidth = 1;

ctx.beginPath();
ctx.font="20px 微软雅黑";
ctx.fillStyle="#ff4b00";
ctx.fillText("80多家",65,240);
ctx.lineWidth = 1;

ctx.beginPath();
ctx.font="13px 微软雅黑";
ctx.fillStyle="#666";
ctx.fillText("优质用户",70,265);
ctx.lineWidth = 1;

ctx.beginPath();
ctx.font="13px 微软雅黑";
ctx.fillStyle="#666";
ctx.fillText("3年总成交金额",50,320);
ctx.lineWidth = 1;

ctx.beginPath();
ctx.font="13px 微软雅黑";
ctx.fillStyle="#ff4b00";
ctx.fillText("3000多万",65,340);
ctx.lineWidth = 1;

// canvas_2
var c=document.getElementById("canvas_2");
var ctx=c.getContext("2d");
// 白色填充
ctx.beginPath();
ctx.strokeStyle="#e5e5e5";
ctx.moveTo(40,30);
ctx.lineTo(40,380);
ctx.stroke();
// 圆1
ctx.beginPath();
ctx.arc(40,70,15,0,2*Math.PI);
ctx.strokeStyle="#e5e5e5";
ctx.fillStyle="white";
ctx.fill();
ctx.lineWidth=2;
ctx.stroke();
// 圆2
ctx.beginPath();
ctx.arc(40,160,20,0,2*Math.PI);
ctx.strokeStyle="#e5e5e5";
ctx.fillStyle="white";
ctx.fill();
ctx.lineWidth=2;
ctx.stroke();
// 圆3
ctx.beginPath();
ctx.arc(40,280,25,0,2*Math.PI);
ctx.strokeStyle="#e5e5e5";
ctx.fillStyle="white";
ctx.fill();
ctx.lineWidth=2;
ctx.stroke();
// 进度条
ctx.beginPath();
ctx.arc(40,280,25,-Math.PI/2,Math.PI/50*(20-25));
ctx.strokeStyle="#ff4b00";
ctx.fillStyle="white";
ctx.fill();
ctx.lineWidth=2;
ctx.stroke();
// 加号
ctx.beginPath();
ctx.strokeStyle="#ff4b00";
ctx.moveTo(36,70);
ctx.lineTo(44,70);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle="#ff4b00";
ctx.moveTo(40,66);
ctx.lineTo(40,74);
ctx.stroke();
// 圆内文字
ctx.beginPath();
ctx.font="10px 微软雅黑";
ctx.fillStyle="#ff4b00";
ctx.fillText("50万",30,165);
ctx.lineWidth = 1;

ctx.beginPath();
ctx.font="15px 微软雅黑";
ctx.fillStyle="#ff4b00";
ctx.fillText("20"+"%",25,285);
ctx.lineWidth = 2;
// 块1
ctx.beginPath();
ctx.moveTo(60,70);
ctx.lineTo(64,66);
ctx.lineTo(64,74);
ctx.closePath();
ctx.fillStyle="#fd7301";
ctx.fill();

ctx.beginPath();
ctx.fillStyle="#fd7301";
ctx.fillRect(64,62,70,16);
// 块2
ctx.beginPath();
ctx.moveTo(64,160);
ctx.lineTo(68,156);
ctx.lineTo(68,164);
ctx.closePath();
ctx.fillStyle="#fd7301";
ctx.fill();

ctx.beginPath();
ctx.fillStyle="#fd7301";
ctx.fillRect(68,152,70,16);
// 块3
ctx.beginPath();
ctx.moveTo(70,280);
ctx.lineTo(74,276);
ctx.lineTo(74,284);
ctx.closePath();
ctx.fillStyle="#fd7301";
ctx.fill();

ctx.beginPath();
ctx.fillStyle="#fd7301";
ctx.fillRect(74,272,70,16);

// 块内文字1
ctx.beginPath();
ctx.font="10px 微软雅黑";
ctx.fillStyle="white";
ctx.fillText("2015年4月",70,74);
ctx.lineWidth = 2;

// 块内文字2
ctx.beginPath();
ctx.font="10px 微软雅黑";
ctx.fillStyle="white";
ctx.fillText("2015年5月",74,164);
ctx.lineWidth = 2;

// 块内文字3
ctx.beginPath();
ctx.font="10px 微软雅黑";
ctx.fillStyle="white";
ctx.fillText("2016年3月",80,284);
ctx.lineWidth = 2;
// 文本内容


// canvas_3
var c=document.getElementById("canvas_3");
var ctx=c.getContext("2d");
// 圆1
ctx.beginPath();
ctx.arc(80,100,50,0,2*Math.PI);
ctx.strokeStyle="#e5e5e5";
ctx.lineWidth=5;
ctx.stroke();
// 圆2
ctx.beginPath();
ctx.arc(80,270,50,0,2*Math.PI);
ctx.strokeStyle="#e5e5e5";
ctx.lineWidth=5;
ctx.stroke();
// 进度条
ctx.beginPath();
ctx.arc(80,270,50,-Math.PI/2,Math.PI/50*(50-25));
ctx.strokeStyle="#ff4b00";
ctx.lineWidth=5;
ctx.stroke();
// 圆内文字1
ctx.beginPath();
ctx.font="13px 微软雅黑";
ctx.fillStyle="#666";
ctx.fillText("每天",65,80);
ctx.lineWidth = 1;

ctx.beginPath();
ctx.font="20px 微软雅黑";
ctx.fillStyle="#ff4b00";
ctx.fillText("10个",60,105);
ctx.lineWidth = 1;

ctx.beginPath();
ctx.font="13px 微软雅黑";
ctx.fillStyle="#666";
ctx.fillText("咨询电话",55,130);
ctx.lineWidth = 1;
// 圆内文字2
ctx.beginPath();
ctx.font="20px 微软雅黑";
ctx.fillStyle="#ff4b00";
ctx.fillText("50"+"%",60,270);
ctx.lineWidth = 1;

ctx.beginPath();
ctx.font="13px 微软雅黑";
ctx.fillStyle="#666";
ctx.fillText("来自易站通",50,290);
ctx.lineWidth = 1;

