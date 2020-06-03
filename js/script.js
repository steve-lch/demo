$('.galleries').flipLightBox();

$('.menu-bars').click(function(e){
		e.preventDefault();
		
		var m = $('.menu');
		if (m.hasClass('.extended')) {
			m.stop().animate({width:'0%',height:'0%'},500);
		}
		else {
			m.stop().animate({width:'50%',height:'70vh'},500);
		}
		m.toggleClass('.extended');
		return false;
	}
);