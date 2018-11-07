/*
* @Author: name
* @Date:   2018-09-03 19:14:07
* @Last Modified by:   name
* @Last Modified time: 2018-09-07 21:04:51
*/

'use strict';

var galleryBottomB = new Swiper('.carousel', {
  slidesPerView:1,
  autoHeight:true,
  //每次下面显示的slide发生改变时做什么事
  on: {
    slideChange:function(){
      var i=this.activeIndex;
      $(".tableS>.tableSS>.col-lg-2").eq(i).addClass('on_on').siblings().removeClass("on_on");
      console.log();
    },
  },

});

$(".tableSS>li").on('click',function(){
  var j=$(this).index();//活动块下标
  $(this).addClass('on_on').siblings().removeClass('on_on');
  galleryBottomB.slideTo(j);
  console.log($(this).index());
  console.log(j)
})

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
      slidesPerView:2,
    },
    767:{
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
