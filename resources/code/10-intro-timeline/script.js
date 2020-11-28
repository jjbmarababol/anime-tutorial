var path = anime.path('#left-line')

// Create a timeline with default parameters
var tl = anime.timeline({
  loop: true,
  duration: 3000,
  direction: 'reverse',
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
  }, 100)