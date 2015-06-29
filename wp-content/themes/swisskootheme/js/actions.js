$(function() {
	//alert("s");
	for(var i=0; i<60; i++){
		var imgLink = "TL00000.jpg";
		if(i<10) {
			imgLink = "TL0000"+i+".jpg";
		} else {
			imgLink = "TL000"+i+".jpg";
		}
		var html = "<img id='img"+i+"' class='image' src='images/"+imgLink+"' />";
		$("#content").append(html);
	}
	//
	var tempi = 0;
	//
	var loop = setInterval(function () {
		$machin = $('html, body').animate({
	        scrollTop: $("#img"+tempi).offset().top
	        
	    }, 0);
	    tempi++;
	}, 100);
});