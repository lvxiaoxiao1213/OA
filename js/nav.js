// JavaScript Document
$(document).ready(function(e) {
    $(".nav_first_level>li>a").click(function(){
		$(this).toggleClass("menu_active");
	});
});