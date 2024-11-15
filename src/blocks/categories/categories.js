import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';

(() => {

	new Swiper('.categories__slider.swiper', {
		modules: [Navigation],
		slidesPerView: 'auto',
		spaceBetween: 20,
		mousewheel: true,
		navigation: {
			prevEl: `.categories__button_prev`,
			nextEl: `.categories__button_next`,
			disabledClass: 'disabled'
		},
	})	

})();
