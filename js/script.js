(function () {

  var app = {

    swapHead: function (evt) {
      evt.preventDefault();
      var head = document.querySelector('.headshot');
      head.classList.toggle('front');
      head.classList.toggle('back');
    },

    transformProperty: function () {
      if ('transform' in document.body.style) return 'transform';
      return ('-ms-transform' in document.body.style ?
              '-ms-transform' : '-webkit-transform');
    },

    snapBack: function (el, initialX, initialY, currentX, currentY) {
      Velocity(el, {
        translateX: [0, currentX],
        translateY: [0, currentY]
      }, [500, 20]);
    },

    init: function () {
      var el = document.querySelector('.headshot');
      var box = el.getBoundingClientRect();
      var transform = app.transformProperty();
      var initialX = box.left + box.width/2;
      var initialY = box.top  + box.height/2;
      var dx = 0;
      var dy = 0;
      var dragging = false;

      function start (evt) {
        evt.preventDefault();
        dragging = true;
      }

      function move (evt) {
        if (dragging) {
          dx = evt.pageX - initialX;
          dy = evt.pageY - initialY;
          el.style[transform] = 'translate3d(' + dx + 'px, ' + dy + 'px, 0)';
        }
      }

      function end (evt) {
        if (dragging) {
          dragging = false;
          app.snapBack(el, initialX, initialY, dx, dy);
        }
      }

      // mouse events
      el.addEventListener('mousedown', start);
      document.addEventListener('mousemove', move);
      document.addEventListener('mouseup', end);

      // touch events
      el.addEventListener('touchstart', start);
      document.addEventListener('touchmove', move);
      document.addEventListener('touchend', end);

      // swap heads
      var swap = document.querySelector('.swap');
      swap.addEventListener('click', app.swapHead);
    }
  };

  document.addEventListener('DOMContentLoaded', app.init);
})();
