import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';

(() => {

	document.querySelectorAll('.table__items.swiper').forEach((item, i) => {
		new Swiper(item, {
			modules: [Navigation, Pagination],
			watchOverflow: true,
			threshold: 10,
			navigation: {
				nextEl: `.table__button_next`,
				prevEl: `.table__button_prev`,
				lockClass: 'hidden'
			},
			pagination: {
				el: ".table__pagination",
				type: "progressbar",
			},			
			breakpoints: {
				0: {
					spaceBetween: 10,
					slidesPerView: 1.0
				},
				360: {
					spaceBetween: 10,
					slidesPerView: 1.2
				},
				481: {
					spaceBetween: 10,
					slidesPerView: 2
				},
				780: {
					spaceBetween: 10,
					slidesPerView: 2
				},
				1100: {
					spaceBetween: 10,
					slidesPerView: 3
				}
			}
		});
	});

})();
