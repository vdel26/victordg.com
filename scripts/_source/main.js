import FontFaceObserver from 'fontfaceobserver'

const $ = document.querySelector.bind(document)

class App {
  constructor () {
    this.init()
    this.bindEvents()
  }

  bindEvents () {
    $('.js-link--contact').addEventListener('click', this.toggleContactSection)
    $('.js-link--projects').addEventListener('click', this.toggleProjectsSection)
    $('.js-projects-close').addEventListener('click', this.toggleProjectsSection)
    $('.js-projects').addEventListener('click', this.toggleProject.bind(this))
  }

  toggleContactSection () {
    const link = $('.js-link--contact')
    document.body.classList.toggle('is-showing-contact')
    link.classList.toggle('is-active')
  }

  toggleProjectsSection () {
    const link = $('.js-link--projects')
    document.body.classList.toggle('is-showing-projects')
    link.classList.toggle('is-active')
  }

  slideProjects (project, body) {
    // 1. find all projects that are *below* this one
    // 2. find this project's body height
    // 3. if project was open   -> use transform to move all following elements -height px
    // 4. if project was closed -> use transform to move all following elements +height px
    const projects = Array.from(project.parentElement.childNodes)
                          .filter(el => el.nodeType === Node.ELEMENT_NODE)

    let nextProjects = []
    let next = project.nextElementSibling
    while (next) {
      nextProjects.push(next)
      next = next.nextElementSibling
    }

    if (body.classList.contains('is-open')) {
      body.classList.remove('is-open')
    }

    const first = body.getBoundingClientRect()
    body.classList.toggle('is-expanded')
    const last = body.getBoundingClientRect()
    const height = last.height - first.height

    const getTranslateY = (el) => {
      return Number(/\d+/.exec(el.style.transform)) || 0
    }

    nextProjects.forEach((p) => {
      requestAnimationFrame(() => {
        let delta = getTranslateY(p) + height
        p.classList.add('is-animating')
        p.style.transform = `translateY(${delta}px)`
        p.addEventListener('transitionend',() => {
          p.classList.remove('is-animating')
        })
      })
    })

    body.classList.toggle('is-open')
  }

  toggleProject (evt) {
    if (evt.target.tagName !== 'H1') return
    const project = evt.target.parentElement
    const title = project.firstElementChild
    const body = title.nextElementSibling

    title.classList.toggle('is-active')
    this.slideProjects(project, body)
  }

  init () {
    // detect touch device
    const isTouch = ('ontouchstart' in window) || (window.DocumentTouch && document instanceof window.DocumentTouch)
    if (isTouch) {
      document.body.classList.add('is-touch')
    }

    // loading fonts with progressive enhancement: use native ones first
    // to avoid FOIT and replace with definitive font once it's loaded
    const font = new FontFaceObserver('Apercu')
    if (sessionStorage.fontsLoaded) {
      document.body.classList.add('is-font-loaded')
    }
    font.load().then(() => {
      sessionStorage.fontsLoaded = true
      document.body.classList.add('is-font-loaded')
    }).catch(() => {
      sessionStorage.fontsLoaded = false
    })
  }
}

/*
 * bootstrap
 */

document.addEventListener('DOMContentLoaded', () => window.app = new App())
