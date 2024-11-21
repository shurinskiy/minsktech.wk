import Swiper from 'swiper';
import { Navigation, Mousewheel } from 'swiper/modules';

(() => {

	new Swiper('.brands__items.swiper', {
		modules: [Navigation, Mousewheel],
		slidesPerView: 'auto',
		// mousewheel: true,
		navigation: {
			prevEl: `.brands__button_prev`,
			nextEl: `.brands__button_next`,
			disabledClass: 'disabled',
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