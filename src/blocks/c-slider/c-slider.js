import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
import enquire from 'enquire.js';

(() => {
	
	document.querySelectorAll('.c-slider__slider.swiper').forEach((slider, i) => {
		let swiper;

		const enableSwiper = (el) => {
			swiper = new Swiper(el, {
				modules: [Navigation],
				watchOverflow: true,
				slidesPerView: 2,
				spaceBetween: 24,
				threshold: 10,
				navigation: {
					nextEl: `.c-slider__navi_${i} .c-slider__button_next`,
					prevEl: `.c-slider__navi_${i} .c-slider__button_prev`,
					lockClass: 'hidden'
				},
				on: {
					beforeInit: function(el) {
						slider.parentNode
						.querySelector('.c-slider__navi')
						?.classList
						.add(`c-slider__navi_${i}`);
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
						spaceBetween: 10,
						slidesPerView: 2
					},
					640: {
						spaceBetween: 20,
						slidesPerView: 2
					},
					780: {
						spaceBetween: 20,
						slidesPerView: 3
					}
				}
			});
		}
			
		enquire.register("screen and (max-width: 1100px", {
			match: function() {
				enableSwiper(slider);
			},
			unmatch: function() {
				if (swiper !== undefined ) {
					swiper.destroy(true, true);
				} 
			}
		});
	});

})();
