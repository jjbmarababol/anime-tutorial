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
    easing: 'easeOutElastic(1, .6)',
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
    fill: [
      {
          value: '#1927A7',
          duration: 200,
        },
        {
          value: '#0012EF',
          duration: 300,
        }
    ],
    duration: 300,
  }, 0)
  .add({
    targets: '#box-2',
    easing: 'easeOutElastic(1, .6)',
    scale: [
      {
        value: 0.9,
        duration: 50,
      },
      {
        value: 1.2,
        easing: 'easeInOutElastic(1, .6)',
        duration: 100,
      },
      {
        value: 1,
        duration: 300,
      }
    ],
    fill: [
      {
        value: '#1927A7',
        duration: 50,
      },
      {
        value: '#3D4FF7',
        easing: 'easeInOutElastic(1, .6)',
        duration: 100,
      },
      {
        value: '#0012EF',
        duration: 300,
      }
    ],
    duration: 300,
  }, 1600)
  