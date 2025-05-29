document.addEventListener('DOMContentLoaded', () => {

	const swiper = new Swiper('.swiper', {
		speed: 1200,
		spaceBetween: 0,
		parallax: true,
		pagination: {
			el: '.swiper-pagination',
			enabled: true,
			clickable: true,
		},
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
	});
})

ymaps.ready(function() {
	const map = new ymaps.Map('ya-map', {
		center: [55.751574, 37.573856],
		zoom: 10
	});

	const placemark = new ymaps.Placemark([55.751574, 37.573856],{
		hintContent: 'Мы здесь!',
		balloonContent: 'Офис доставки'
	})

	map.geoObjects.add(placemark)
})
