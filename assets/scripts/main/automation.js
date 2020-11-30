const path = anime.path('#left-line')

const tl = anime.timeline({
	duration: 2000,
	direction: 'reverse',
	loop: true,
})

tl.add({
	targets: ['#ball'],
	translateX: path('x'),
	translateY: path('y'),
	loop: true,
	easing: 'linear',
	duration: 1000,
	delay: 300,
})