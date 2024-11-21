import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';

(() => {

	document.querySelectorAll('.slider__items').forEach((item, i) => {
		new Swiper(item, {
			modules: [Navigation],
			watchOverflow: true,
			threshold: 10,
			navigation: {
				nextEl: `.slider__navi_${i} .slider__button_next`,
				prevEl: `.slider__navi_${i} .slider__button_prev`,
				lockClass: 'hidden'
			},
			on: {
				beforeInit: function(el) {
					item.parentNode
					.querySelector('.slider__navi')
					?.classList
					.add(`slider__navi_${i}`);
				},
			},
			breakpoints: {
				0: {
					spaceBetween: 16,
					slidesPerView: 1.2
				},
				360: {
					spaceBetween: 20,
					slidesPerView: 1.2
				},
				481: {
					spaceBetween: 20,
					slidesPerView: 2
				},
				780: {
					spaceBetween: 20,
					slidesPerView: 3
				},
				1100: {
					spaceBetween: 24,
					slidesPerView: 4
				}
			}
		});
	});

})();