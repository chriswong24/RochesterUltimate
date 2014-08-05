$(document).ready(function(){

	$(".menu").click(clickMenu);
	$(window).on("resize", hideMenu);
	$(window).on("resize", adjustHeight);
});

function clickMenu(){

	if($(".mobile-links").css('display') == "block")
		$(".mobile-links").css("display", "none");
	else{
		$(".mobile-links").css("display", "block");
	}

}

function hideMenu(){
	var window_size = $(window).width();

	if(window_size >= 767){
		$(".mobile-links").css("display","none");
	}
}

function adjustHeight(){
	//alert("began thingy");
	//alert(cover_photo.height());
	var adjusted_window_height = $(window).height - 103;
	var cover_height = adjusted_window_height/2;
	//$("#roster_cover").css('height', cover_height);
}