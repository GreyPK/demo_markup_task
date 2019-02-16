document.addEventListener("DOMContentLoaded", () => {
	const headerSlider = new Swiper('.swiper-container', {
		direction: 'horizontal',
		loop: true,

		pagination: {
			el: '.swiper-pagination',
			clickable: true
		},
	})
});