        
$(document).ready(function() {

    $('.counter').each(function () {
$(this).prop('Counter',0).animate({
    Counter: $(this).text()
}, {
    duration: 2000,
    easing: 'swing',
    step: function (now) {
        $(this).text(Math.ceil(now));
    }
});
});

});  


$(window).scroll(function(){
	$('nav').toggleClass('scrolled', $(this).scrollTop() > 948);
	if ($(this).scrollTop() > 948) {
        $('nav').removeClass('p-3');
    }
});
$(window).scroll(function() {
    if ($(this).scrollTop() > 948) {
        $('nav').removeClass('p-3');
    } else {
        $('nav').addClass('p-3');
    }
});
$(window).scroll(function() {
    if ($(this).scrollTop() > 948) {
        document.documentElement.style.setProperty('--a-color', '#000');
    } else {
        document.documentElement.style.setProperty('--a-color', '#fff'); 
    }
});