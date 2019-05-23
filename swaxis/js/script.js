
$(document).ready(function() {
    $('.modern .block div.abs').click(function(){
        $('.modern .block div.abs').removeClass('active');
        $(this).toggleClass('active');
    });
});


$(document).ready(function() {
    $('.our_jobs .block a.abs').click(function(){
        $(this).parent().toggleClass('active');
    });
});