import page from 'page'
import router from './routes'
import home from './home'

const app = {

  wrapper: '',

  setPage: function (ctx, next) {
    let doc = document.createElement('html')
    doc.innerHTML = ctx.body
    let content = doc.querySelector('.wrapper')
    let title = doc.querySelector('title').innerHTML
    document.title = title
    this.wrapper.innerHTML = content.innerHTML
    next()
  },

  startRouter: function () {
    page('*', (ctx, next) => {
      ctx.wrapper = this.wrapper
      router.transitionStart(ctx, next)
    })

    let routes = router.routes
    for (const route of Object.keys(routes)) {
      page(routes[route].url,
           routes[route].handler,
           this.setPage.bind(this),
           routes[route].onLoad,
           router.transitionEnd)
    }

    page({ dispatch: false })
  },

  init: function () {
    // set js container
    this.wrapper = document.querySelector('.wrapper')

    // setup router
    this.startRouter({
      wrapper: this.wrapper,
      transition: 800
    })

    // home page
    home.init()
  }

}

document.addEventListener('DOMContentLoaded', app.init.bind(app));
window.addEventListener('load', () => {
  // prefetch backface image
  var img = new Image()
  img.src = "../images/headshot-back.png"
})
