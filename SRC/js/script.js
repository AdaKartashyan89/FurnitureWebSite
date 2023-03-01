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
            breakpoint:991,
            settings:{
                slidesToShow:3,
                slidesToScroll:1,
                infinite: true,
                dots: true
            }
        },{
            breakpoint:575,
            settings:{
                slidesToShow:1
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

    $('.about__tbsmslider').slick({
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
    $('.about__tbslider').slick({
        arrows:false,
        fade:true,
        speed:1000,
        asNavFor:".about__smslider"
        
    });

    $('.about__mbslder').slick({
        arrows:false,
        dots:true,
        adaptiveHeight:true,
        slidesToShow:1,
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
            breakpoint:991,
            settings:{
                slidesToShow:3,
                slidesToScroll:1,
                infinite: true,
                dots: true
            }
        },{
            breakpoint:575,
            settings:{
                slidesToShow:1
            }
        }],
        mobileFirst:false,
        appendArrows:$('.content'),
        /* appendDots:$('.content') */
    });

    $('.orders__mbslider').slick({
        arrows:false,
        dots:true,
        adaptiveHeight:true,
        slidesToShow:1,
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
       
        mobileFirst:false,
        appendArrows:$('.content'),
        /* appendDots:$('.content') */
    });

});