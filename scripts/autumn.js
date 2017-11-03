$(document).ready(function(){

$('.fadeitem').css('opacity', '0.25');

$('.fadeitem').mouseenter(function() {
	$(this).fadeTo('fast', 1)
});

$('.fadeitem').mouseleave(function() {
	$(this).fadeTo('fast', 0.25);
});

});
