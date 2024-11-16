import Swiper from 'swiper';
import { Autoplay, Navigation } from 'swiper/modules';

(() => {

	new Swiper(".hero__slider", {
		modules: [ Autoplay, Navigation ],
		spaceBetween: 0,
		threshold: 10,
		loop: true,
		speed: 1000,
		autoplay: { 
			delay: 15000,
			disableOnInteraction: true
		},
		navigation: {
			prevEl: `.hero__button_prev`,
			nextEl: `.hero__button_next`,
			disabledClass: 'disabled'
		}
	});
	
})();