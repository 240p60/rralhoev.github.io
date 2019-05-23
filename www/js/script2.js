$(document).ready(function() {
	$(".faq .accordion").accordion({
		accordion:true,
		speed: 500,
		closedSign: '<em class="plus"></em>',
		openedSign: '<em class="minus"></em>'
	});
});


$('.accordion a').click(function() {
	$('.accordion > li.active').removeClass('active');
	$(this).parent().addClass('active');
});

$('.accordion > li > ul > li.active').parent().parent().addClass('active');