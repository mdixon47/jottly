$(document).ready(function(){

	$(window).scroll(function(event){
		var y = $(this).scrollTop();

		if (y >= 300) {

			$('#benefit-info').addClass('animated fadeInDown');
			$('.scale-with-grid').addClass('animated fadeInDown');
		}

		if (y >= 1000) {

			$('.pricebox').addClass('animated fadeInDown');
			$('.pricing-info').addClass('animated fadeInDown');
		}

		if (y >= 1800) {

			$('.test-info').addClass('animated fadeInDown');
			$('.test_1').addClass('animated fadeInLeft');
			$('.test_2').addClass('animated fadeInDown');
			$('.test_3').addClass('animated fadeInRight');
		}
		 if (y >= 2200) {
            
            		$('.cta-info').addClass('animated bounceIn');
			$('.cta-email').addClass('animated fadeInDown');
			$('.cta-submit').addClass('animated fadeInDown');
        }

	});

});
