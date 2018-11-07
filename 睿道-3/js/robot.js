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