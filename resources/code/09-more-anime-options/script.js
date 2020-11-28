var path = anime.path('#left-line')

anime({
    targets: '#ball',
    translateX: path('x'),
    translateY: path('y'),
    loop: true,
    direction: 'reverse',
    easing: 'linear',
    duration: 1000,
    delay: 300,
  })