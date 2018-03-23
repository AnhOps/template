$(function () {
    var pageFooterHeight = $("#page-footer").innerHeight();
    var bodyPaddingTop = parseInt($("body").css("padding-top"));
    var windowHeight = $(window).innerHeight();
    $('#page-content').css('min-height', windowHeight - pageFooterHeight - bodyPaddingTop);
});