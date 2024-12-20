import Swiper from 'swiper';
import { Navigation, Mousewheel } from 'swiper/modules';

(() => {

	new Swiper('.categories__slider.swiper', {
		modules: [Navigation, Mousewheel],
		slidesPerView: 'auto',
		mousewheel: true,
		navigation: {
			prevEl: `.categories__button_prev`,
			nextEl: `.categories__button_next`,
			lockClass: 'hidden'
		},
		breakpoints: {
			0: {
				spaceBetween: 14,
			},
			780: {
				spaceBetween: 20,
			}
		}
	})	

})();
