import animate from 'animateplus'

const home = {

  swapHead: function () {
    evt.preventDefault();
    let head = document.querySelector('.headshot');
    head.classList.toggle('front');
    head.classList.toggle('back');
  },

  transformProperty: function () {
    if ('transform' in document.body.style) return 'transform';
    return ('-ms-transform' in document.body.style ?
            '-ms-transform' : '-webkit-transform');
  },

  snapBack: function (el, currentX, currentY) {
    animate({
      el: el,
      translateX: [currentX, 0],
      translateY: [currentY, 0],
      easing: "easeOutElastic",
      duration: 500
    });
  },

  init: function () {
    let el = document.querySelector('.headshot');
    let box = el.getBoundingClientRect();
    let transform = this.transformProperty();
    let initialX = box.left + box.width/2;
    let initialY = box.top  + box.height/2;
    let dx = 0;
    let dy = 0;
    let dragging = false;

    const start = (evt) => {
      evt.preventDefault();
      dragging = true;
      el.classList.add('moving');
    }

    const move = (evt) => {
      if (dragging) {
        dx = evt.pageX - initialX;
        dy = evt.pageY - initialY;
        el.style[transform] = 'translate3d(' + dx + 'px, ' + dy + 'px, 0)';
      }
    }

    const end = (evt) => {
      if (dragging) {
        dragging = false;
        this.snapBack(el, dx, dy);
        el.classList.remove('moving');
      }
    }

    el.addEventListener('mousedown', start);
    document.addEventListener('mousemove', move);
    document.addEventListener('mouseup', end);

    // touch events
    el.addEventListener('touchstart', start);
    document.addEventListener('touchmove', move);
    document.addEventListener('touchend', end);

    // swap heads
    let swap = document.querySelector('.swap');
    swap.addEventListener('click', this.swapHead);
  }
}

export default home
