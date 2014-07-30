$(document).ready(function(){

	$(".menu").click(clickMenu);
	$(window).on("resize", hideMenu);
});

function clickMenu(){

	if($(".mobile-links").css('display') == "block")
		$(".mobile-links").css("display", "none");
	else{
		$(".mobile-links").css("display", "block");
	}

}

function hideMenu(){
	var windowSize = $(window).width();

	if(windowSize >= 767){
		$(".mobile-links").css("display","none");
	}
}