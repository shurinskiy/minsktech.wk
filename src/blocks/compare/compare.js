import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
import enquire from 'enquire.js';

(() => {
	const slider = document.querySelector('.compare__slider.swiper');
	let swiper;

	const enableSwiper = (el) => {
		swiper = new Swiper(el, {
			modules: [Navigation],
			watchOverflow: true,
			slidesPerView: 2,
			spaceBetween: 24,
			threshold: 10,
			navigation: {
				nextEl: `.compare__button_next`,
				prevEl: `.compare__button_prev`,
				lockClass: 'hidden'
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

})();
