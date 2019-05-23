$(document).ready(function(){
    var $arrSpan = $('.right-sb .item span');
    var $arrSpanParent = $('.right-sb .item');
    $arrSpan.bind('click', function(){ 
        if($(this).hasClass('active')){ 
            $(this).next('.dd-menu').slideUp(100);
            $arrSpan.removeClass('active');  
        }
        else{
            $arrSpan.next('.dd-menu').slideUp(100);
            $arrSpan.removeClass('active');  
            $(this).addClass('active'); 
            $(this).next('.dd-menu').slideDown(300);
        } 
    });
    
    //    burger and burger-menu
        var $burger = $('.burger'); 
        var $megaWrapper = $('.mega-wrapper');
        var $burgerMenu = $('.burger-menu');
        var $btnClose = $('.btn-close');

        function openBurgerMenu(){
            $megaWrapper.addClass('mega-wrapper-shadow');
            $burgerMenu.addClass('burger-menu-show');
            $('.footer').hide();
        }
        function closeBurgerMenu(){
            $megaWrapper.removeClass('mega-wrapper-shadow');
            $burgerMenu.removeClass('burger-menu-show');
            $('.footer').show();
        }

        $burger.bind('click', openBurgerMenu);
        $btnClose.bind('click', closeBurgerMenu);

        $(document).mouseup(function (e){  
            if (!$burgerMenu.is(e.target) 
                && $burgerMenu.has(e.target).length === 0) {  
                closeBurgerMenu(); 
            }
            if(!$arrSpanParent.is(e.target) 
                && $arrSpanParent.has(e.target).length === 0){
                $arrSpan.next('.dd-menu').slideUp(100);
                $arrSpan.removeClass('active'); 
            }
        });
      //    burger and burger-menu end
    
        // function for info-block 
        var widthDocument; 
        function addInInIfoBlocClass(){
            widthDocument = $(document).width(); 
            if(widthDocument < 663){
                $('.info-block .ib-head').addClass('ib-head-slide-btn');
                $('.info-block .body').slideUp();
            }
            else{
                $('.info-block .ib-head').removeClass('ib-head-slide-btn'); 
                $('.info-block .body').slideDown();
            }
        }
        addInInIfoBlocClass();

        $('.info-block .ib-head-slide-btn').bind('click', function(){ 
            $(this).toggleClass('ib-head-slide-btn-active');
            $(this).next().slideToggle(300);
        });

        $(window).bind('resize', function(){ 
            addInInIfoBlocClass();
        });
    
//    backlight-control
        var $day = $('.backlight-control .day');
        var $night = $('.backlight-control .night'); 
        
        $day.click(function(){
                $(this).addClass('active');
                $night.removeClass('active');
                $('body').removeClass('night_mode');
            });
        $night.click(function(){
                $(this).addClass('active');
                $day.removeClass('active');
                $('body').addClass('night_mode');
            }); 

});

    

    

    
