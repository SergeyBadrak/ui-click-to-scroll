
let el = '.click-to-scroll';

$( el ).click(function(event) {
    event.preventDefault();
    var id  = $(this).attr('href'),
        top = $(id).offset().top;
    $('body,html').animate({scrollTop: top}, 1500, "swing");
});


