/**
 * Created by austin on 8/5/16.
 */
(function () {
    $('.page-scroll a').bind('click', function (event) {
        removeActiveClass();
        $(this).parent().addClass('active');
        var $position = $($(this).attr('href')).offset().top;
        $('html, body').stop().animate({
            scrollTop: $position - $offset
        }, 600);
        event.preventDefault();
    });

    var removeActiveClass = function () {
        var a = document.getElementsByClassName('page-scroll');
        for (var i = 0; i<a.length; i++){
            $(a[i]).removeClass('active')
        }
    };
})();
