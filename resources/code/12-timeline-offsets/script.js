var path = anime.path('#ball-path')

// Create a timeline with default parameters
var tl = anime.timeline({
  loop: true,
  duration: 3000,
});

// Add children
tl
  .add({
    targets: '#ball',
    translateX: path('x'),
    translateY: path('y'),
    loop: true,
    direction: 'reverse',
    easing: 'linear',
    duration: 1500,
  })