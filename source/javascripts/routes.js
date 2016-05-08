import xhr from 'xhr'
import home from './home'

const router = {}

let cache = []
const fetch = (uri, cb) => {
  xhr({ uri: uri }, function (err, res, body) {
    cache[uri] = body
    cb(body)
  })
}

router.routes = {
  home: {
    url: '/',
    handler: function (ctx, next) {
      fetch('/', (html) => {
        ctx.body = html
        next()
      })
    },
    onLoad: function (ctx, next) {
      home.init()
      next()
    }
  },
  projects: {
    url: '/projects',
    handler: function (ctx, next) {
      fetch('/projects', (html) => {
        ctx.body = html
        next()
      })
    },
    onLoad: function (ctx, next) {
      next()
    }
  }
}

router.transitionStart = function (ctx, next) {
  console.log('transition start')
  ctx.wrapper.classList.add('is-transitioning');
  next()
}

router.transitionEnd = function (ctx, next) {
  setTimeout(() => {
    console.log('transition end')
    ctx.wrapper.classList.remove('is-transitioning')
  }, 800)
}

export default router
