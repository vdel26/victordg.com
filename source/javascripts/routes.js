import xhr from 'xhr'
import home from './home'

const router = {}

let cache = []
const fetch = (uri, cb) => {
  if (cache[uri]) return cb(cache[uri])

  xhr({ uri: uri }, function (err, res, body) {
    cache[uri] = body
    cb(body)
  })
}

router.configure = function (params) {
  this.wrapper = params.wrapper || ''
  this.transitionDuration = params.transitionDuration || 800
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
  this.wrapper.classList.add('is-transitioning');
  setTimeout(() => {
    next()
  }, this.transitionDuration);
}

router.transitionEnd = function (ctx, next) {
  this.wrapper.classList.remove('is-transitioning')
  setTimeout(() => {
    next()
  }, this.transitionDuration)
}

export default router
