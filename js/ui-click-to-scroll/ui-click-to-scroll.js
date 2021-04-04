
(function($){

    let el = '.click-to-scroll';
    let id = '';

    $( el ).click(function(event) {

        event.preventDefault();

// if clicked element has 'href' atribut
// <li><a href="#menu1" class="click-to-scroll">Menu 1</a></li>
        if ($(this).attr('href')) {
            id  = $(this).attr('href');
        }

// if clicked on 'li' that has children 'a' element with 'href' atribut
// <li class="click-to-scroll"><a href="#menu1" >Menu 1</a></li>
        else if (($(this).children().attr('href'))) {
            id  = $(this).children().attr('href');
        }




// Run Main fuctions if target element is exist on page
        if ($(id).length) {
            doScroll(id);
            hideMenu();
        }
        else {
            console.log('element:' + id + ' is not exist');
        }




// ********* Main fuctions *********
        function doScroll(id) {
            var top = $(id).offset().top;
            $('body,html').animate({scrollTop: top}, 1500, "swing");
        }

// Hide content of Full Page Menu
        function hideMenu() {
            $('.menu-ico').removeClass('menu-ico-close');
            $('.overlay-m').removeClass('menu_is_visible');
        }

    });

})(jQuery);


