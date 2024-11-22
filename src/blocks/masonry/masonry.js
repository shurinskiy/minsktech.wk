import { masonryBuilder } from "../../js/libs/masonry";
import { Fancybox } from "@fancyapps/ui";

(() => {
	
	const masonry = document.querySelector('.masonry')
	
	masonryBuilder(masonry, {
		layout: function() {
			this.containerNode.classList.add('masonry_builded');
		}
	});

	Fancybox.bind(masonry, "[data-fancybox]", {
		Thumbs: {
			type: 'classic'
		},
		Toolbar: {
			display: {
				right: ["iterateZoom", "close"],
				left: ["infobar"],
				middle: [],
			},
		},
	});

})();