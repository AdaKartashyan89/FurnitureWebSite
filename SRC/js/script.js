$(document).ready(function(){
    $('.orders__slider').slick({
        arrows:false,
        dots:true,
        adaptiveHeight:true,
        slidesToShow:4,
        slidesToScroll:1,
        speed:1000,
        easing:'ease',
        infinite:true,
        initialSlide:0,
        autoplay:false,
        autoplaySpeed:1500,
        pauseOnFocus:true,
        pauseOnHover:true,
        pauseOnDotsHover:true,
        draggable:true,
        swipe:true,
        touchThreshold:25,
        touchMove:true,
        waitForAnimate:true,
        centerMode:false,
        variableWidth:false,
        rows:1,
        slidesPerRow:1,
        vertical:false,
        verticalSwiping:false,
        
        asNavFor:".orders__bslider",
        responsive:[{
            breakpoint:768,
            settings:{
                slidesToShow:2
            }
        },{
            breakpoint:575,
            settings:{
                slidesToShow:2
            }
        }],
        mobileFirst:false,
        appendArrows:$('.content'),
        /* appendDots:$('.content') */
    });
    $('.orders__bslider').slick({
        arrows:false,
        fade:true,
        speed:1000,
        asNavFor:".orders__slider"
    });
    $('.about__smslider').slick({
        arrows:false,
        dots:true,
        adaptiveHeight:true,
        slidesToShow:3,
        slidesToScroll:1,
        speed:1000,
        easing:'ease',
        infinite:true,
        initialSlide:0,
        autoplay:false,
        autoplaySpeed:1500,
        pauseOnFocus:true,
        pauseOnHover:true,
        pauseOnDotsHover:true,
        draggable:true,
        swipe:true,
        touchThreshold:25,
        asNavFor:".about__slider"
    });
    $('.about__slider').slick({
        arrows:false,
        fade:true,
        speed:1000,
        asNavFor:".about__smslider"
        
    });
});