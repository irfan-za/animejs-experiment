// const anime = require('animejs');

const load = document.querySelector('.loading');

const loading = {
  charged: '0%',
  border: 10,
}

anime({
  targets: loading,
  charged: '100%',
  border:0,
  round: 1,
  easing: 'easeInBack',
  duration:2000,
  update: function() {
    load.style.width=`${loading.charged}`
    load.style.borderRadius=` ${loading.border}`
    load.style.animation="loading-animation 5s ease infinite"
  },
});

anime({
  targets:".square",
  left:"90%",
  duration:1500,
  backgroundColor:"#2eebc2",
  borderRadius:["0%","50%"],
  easing:'easeOutInQuint'
})

anime({
  targets: '.pojok',
  height: '300px', 
  duration:1000,
  easing: 'easeInOutQuad',
  direction: 'alternate',
  loop: true
});

anime({
  targets: '.square2',
  translateX: {
    value: 250,
    duration: 800
  },
  rotate: {
    value: 360,
    duration: 1800,
    easing: 'easeInOutSine'
  },
  scale: {
    value: 2,
    duration: 1600,
    delay: 800,
    easing: 'easeInOutQuart'
  },
  borderRadius:50,
  delay: 250 // All properties except 'scale' inherit 250ms delay
});


anime({
  targets: '.bwh',
  translateX: function() {return 100},
  translateY: function() {return anime.random(60,100)},
  scale: function(el, i, l) {
    return (l - i) + .25;
  },
  rotate: function() { return anime.random(-360, 360); },
  borderRadius: function() { return ['50%', anime.random(10, 35) + '%']; },
  duration: function() { return anime.random(1200, 1800); },
  delay: function() { return anime.random(0, 400); },
  direction: 'alternate',
  loop: true
});

anime({
  targets:".square-load",
  translateX:[
    {value:200, duration:1000},
    {value:0, duration:1000, delay:500}
  ],
  translateY:[
    {value:-80, duration:500},
    {value:0, duration:500, delay:1000},
  ],
  easing:"easeOutElastic(1,.8)",
  loop: true
})

/* Animasi Grid
*/
const grid=anime({
  targets: '.grid .el',
  scale: [
    {value: .1, easing: 'easeOutSine', duration: 500},
    {value: 1, easing: 'easeInOutQuad', duration: 1200}
  ],
  delay: anime.stagger(200, {grid: [10, 6], from: 'center'}),
  loop:true
});
// button trigger animation grid
document.getElementById("play").onclick=grid.play
document.getElementById("pause").onclick=grid.pause
document.getElementById("restart").onclick=grid.restart