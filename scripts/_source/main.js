const $ = document.querySelector.bind(document)

class App {
  constructor () {
    console.log('constructor')
    this.bindEvents()
  }

  bindEvents () {
    console.log('bindEvents')
    $('.js-link--contact').addEventListener('click', this.toggleContactSection)
    $('.js-link--projects').addEventListener('click', this.toggleProjectsSection)
    $('.js-projects-close').addEventListener('click', this.toggleProjectsSection)
    $('.js-projects').addEventListener('click', this.toggleProject)
  }

  toggleContactSection () {
    console.log('toggleContactSection')
    const link = $('.js-link--contact')
    document.body.classList.toggle('is-showing-contact')
    link.classList.toggle('is-active')
  }

  toggleProjectsSection () {
    console.log('toggleContactSection')
    const link = $('.js-link--projects')
    document.body.classList.toggle('is-showing-projects')
    link.classList.toggle('is-active')
  }

  toggleProject (evt) {
    // exit screen:
    //  - check if clicked on empty space
    //  - check if clicked on cross
    //  else fold / unfold project
    console.log('toggleProject')
    const project = evt.target.parentElement
    const children = Array.from(project.childNodes)
                          .filter((el) => el.nodeType !== Node.TEXT_NODE)
    children.forEach(el => el.classList.toggle('is-active'))
  }
}

/*
 * bootstrap
 */

document.addEventListener('DOMContentLoaded', () => window.app = new App())
