$(document).ready(function() {
    $(".accordion").accordion({
        accordion:true,
        speed: 500,
        closedSign: '<em class="plus"></em>',
        openedSign: '<em class="minus"></em>'
    });
});


$('.slider_srt').owlCarousel({
    loop:true,
    margin:0,
    nav:true,
    navText:true,
    dots:false,
    items:3,
    responsive:{
        0:{
            items:1,
            margin:0,
            nav:true
        },
        800:{
            items:2,
            nav:true,
            margin:0
        },
        1000:{
            items:3,
            nav:true,
            margin:0
        },
        1200:{
            items:4,
            nav:true,
            margin:0
        },
    }
});

$('.team_slider').owlCarousel({
    loop:true,
    margin:0,
    nav:true,
    navText:true,
    dots:false,
    items:3,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        580:{
            items:2,
            nav:true,
        },
        900:{
            items:3,
            nav:true,
        },
        1100:{
            items:4,
            nav:true,
        },
    }
});

$('.banner_slider').owlCarousel({
    loop:true,
    margin:0,
    nav:false,
    navText:true,
    dots:false,
    items:3,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:2,
            nav:true,
        },
        767:{
            items:3,
            nav:true,
        },
        1000:{
            items:4,
        },
    }
});

$('.slider_partners').owlCarousel({
    loop:true,
    margin:0,
    nav:true,
    navText:true,
    dots:false,
    items:3,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:2,
            nav:true
        },
        700:{
            items:3,
            nav:true
        },
        1000:{
            items:5,
            nav:true
        },
    }
});

$('#button-menu_adaptive').click(function(){
  $(this).parent().toggleClass('menu-open');
  $('header .menu_adap').toggleClass('visible');
});

$('.menu_adap .accordion_li > a').click(function(){
  $(this).parent().toggleClass('active');
});

$(document).ready(function() {
    $("select.nice").selectBox();
});

$('.modal_call').click(function(){
    $('#modal').arcticmodal();
});

$('.modal_service').click(function(){
    $('#modal2').arcticmodal();
});

$('.modal_feedback').click(function(){
    $('#modal3').arcticmodal();
});

$('.modal_grafic').click(function(){
    $('#modal4').arcticmodal();
});

$(document).ready(function() {
    $(".fancybox").fancybox({
        helpers: {
            overlay: {
                locked: false
            }
        }
    });
});

$(".numbox").mask("+7(999)999-99-99");

    /**************************/
    $("#zapis").submit(function(){
        if(!falidator(this)) return false;
        $.ajax({ 
            type: "POST", 
            url: "/template/php/zapis.php",
            data: $("#zapis").serialize(),
            success: function(html) { 
            
            }
        });
        
        //$('#call_me').arcticmodal('close');
        $('#spasibo').arcticmodal();
        /*$('.action_block .inputbox').removeClass("not-empty");*/
        $('#zapis').trigger("reset");
        return false;
    });
    /**************************/
    $("#service").submit(function(){
        if(!falidator(this)) return false;
        $.ajax({ 
            type: "POST", 
            url: "/template/php/service.php",
            data: $("#service").serialize(),
            success: function(html) { 
            
            }
        });
        
        //$('#call_me').arcticmodal('close');
        $('#spasibo').arcticmodal();
        /*$('.action_block .inputbox').removeClass("not-empty");*/
        $('#service').trigger("reset");
        return false;
    });
    /**************************/
    $("#feedback").submit(function(){
        if(!falidator(this)) return false;
        $.ajax({ 
            type: "POST", 
            url: "/template/php/feedback.php",
            data: $("#feedback").serialize(),
            success: function(html) { 
            
            }
        });
        
        //$('#call_me').arcticmodal('close');
        $('#spasibo').arcticmodal();
        /*$('.action_block .inputbox').removeClass("not-empty");*/
        $('#feedback').trigger("reset");
        return false;
    });
    /**************************/