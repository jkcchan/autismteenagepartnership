$(document).ready(function(){
	//$(".wrap").fadeIn("slow");
	$(".home").animate({'opacity':'1'},500);
	var divs =[".about", ".leadership", ".sponsors", ".contact"]
	var posdiv = [];
	var divsnum = 4;
	for (i=0; i<divsnum; i++){
		posdiv[i]=$(divs[i]).offset().top;
	}
	$(window).scroll(function(){

		var currentPos = $(window).scrollTop();
		if (currentPos - posdiv[0] <=100){
			$(".nav").slideDown("fast");
		}
		$(".wrap").each(function(){
			var offsets=$(this).offset().top;
			var pos=$(window).scrollTop();
			//window.alert(offsets+" "+pos);
			if (offsets-pos<=400){
				//window.alert("foo");
				$(this).animate({'opacity':'1'},500);
			}
		});

		// for (n=0; n<divsnum; n++){
		// 	var currentPoss = $(window).scrollTop();
		// 	if (currentPoss>posdiv[n] && currentPoss < posdiv[n+1]){
		// 		for(k=0; k<divsnum; k++){
		// 			$(divs[k]).removeClass("active");
		// 		}
		// 		$(divs[n]).addClass("active");
		// 		break;
		// 	}
		// }
		
	});
});