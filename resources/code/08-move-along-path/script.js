var path = anime.path('#left-line')

anime({
    targets: '#ball',
    translateX: path('x'),
    translateY: path('y'),
    loop: true,
  })