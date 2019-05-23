$('.block .coin > li > a').click(function(){
 $(this).parent().toggleClass('active');
 $(this).parent().children('ul').slideToggle();
});

$('.block .coin_select > li > a').click(function(){
 $(this).parent().children('div').slideToggle();
});

$('.transaction_table .tabs_choice ul li').click(function() {
	$('.transaction_table .tabs_choice ul li.active').removeClass('active');
	$(this).addClass('active');
	$('.transaction_table .table_area > div.item').removeClass('active')
	                  .eq($(this).index()).addClass('active');
	return false;
});

$('.fees_login label').click(function() {
	$(this).toggleClass('active');
});

$('.general .market .tabs_market ul li').click(function() {
	$('.general .market .tabs_market ul li.active').removeClass('active');
	$(this).addClass('active');
	$('.general .market .market_area > div.item').removeClass('active')
	                  .eq($(this).index()).addClass('active');
	return false;
});

$('.range_content .tbc .content .inb').click(function() {
	$('.range_content .tbc .content .inb.active').removeClass('active');
	$(this).addClass('active');
});

$('.number_input').keypress(function(event){
  event = event || window.event;
  if (event.charCode && event.charCode!=0 && event.charCode!=46 && (event.charCode < 48 || event.charCode > 57) )
    return false;
});

$(document).ready(function() {
    $("select.nice").selectBox();
});