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

document.querySelector('.hamburger').addEventListener('click', function(){
	this.classList.toggle('is-active')
	document.querySelector('main').classList.toggle('is-active')
})