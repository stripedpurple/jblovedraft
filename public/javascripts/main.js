/**
 * Created by austin on 8/5/16.
 */

$("nav-bar-item").click(function() {
    $('html, body').animate({
        scrollTop: $("#" + section_name).offset().top
    }, 2000);
});