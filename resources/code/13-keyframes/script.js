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
  }, 100)
  .add({
    targets: '#box-1',
    scale: [
      {
        value: 0.8,
        duration: 200,
      },
      {
        value: 1,
        duration: 300,
      }
    ],
    duration: 300,
  }, 0)
  