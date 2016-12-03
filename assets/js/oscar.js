$('.masthead').mouseenter(function(){
	$('.nav').slideToggle(200);
}).mouseleave(function(){
	$('.nav').slideToggle(200);
});

$('a[href^=http]').each(function(){
    if(this.href.indexOf(location.hostname) < 0) {
        $(this).attr({target: '_blank'});
    }
});
