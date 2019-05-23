$(function(){

    $('.balanced .body .table .dd_icon').on('click', function() {
    	$(this).toggleClass('open');
       $(this).next().slideToggle(300, function(){
            if( $(this).css('display') === "none"){
                $(this).removeAttr('style');


            }
       });

    });

});
