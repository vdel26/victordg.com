import React from 'react'
import Link from 'next/link'
import { style, merge, insertRule } from 'next/css'
import ContactLink from '../components/contactLink'

export default class extends React.Component {
  constructor (props) {
    super(props)
    this.state = { showContact: false }
    this.toggleContact = this.toggleContact.bind(this)
  }

  toggleContact () {
    this.setState({ showContact: !this.state.showContact })
  }

  render () {
    let mainStyles, contactStyles, toggleLink
    if (this.state.showContact) {
      toggleLink = merge(styles.link, { textDecoration: 'line-through', borderBottom: 'none' })
      mainStyles = merge(styles.main, { transform: 'translateY(0)' })
      contactStyles = merge(styles.contact, { opacity: 1 })
    }
    else {
      toggleLink = style(styles.link)
      mainStyles = style(styles.main)
      contactStyles = style(styles.contact)
    }

    return (
      <div className={style(styles.wrapper)}>
        <section className={mainStyles}>
          Hi, I&#39;m <a className={toggleLink} onClick={this.toggleContact}>Victor</a>.<br /><br />
          I am a co-founder at <a className={style(styles.link)} href="http://thenorthstudio.com" target="_blank">North</a>, a digital product studio from Barcelona.<br />
          Being outdoors, authenticity and a mix of creativity and technology turn me on.<br /><br />
          I also enjoy tinkering with <Link href="/projects"><a className={style(styles.link)}>new ideas</a></Link> whenever I get some free time.<br />
          <nav className={contactStyles}>
            <ContactLink url="http://twitter.com/lechienvic" name="Twitter" /> / {' '}
            <ContactLink url="http://github.com/vdel26" name="Github" /> / {' '}
            <ContactLink url="http://instagram.com/victordg" name="Instagram" /> / {' '}
            <ContactLink url="https://es.linkedin.com/in/vdelgado" name="Linkedin" />
          </nav>
        </section>
      </div>
    )
  }
}

insertRule('html, body { margin: 0; padding: 0; max-height: 100%; overflow: hidden; }')

const styles = {
  wrapper: {
    maxWidth: '80%',
    margin: '0 auto',
  },
  main: {
    position: 'absolute',
    maxWidth: '80%',
    bottom: '2rem',
    fontFamily: 'Apercu, -apple-system, BlinkMacSystemFont, Roboto, Calibri, sans-serif',
    fontSize: '18px',
    lineHeight: '1.5',
    textDecoration: 'none',
    color: '#111',
    transition: '.75s transform cubic-bezier(0.08, 0.82, 0.17, 1)',
    transform: 'translateY(56px)',
    '@media only screen and (min-width: 900px)': {
      fontSize: '22px'
    }
  },
  link: {
    color: '#111',
    textDecoration: 'none',
    borderBottom: '2px solid #000',
    whiteSpace: 'nowrap',
    cursor: 'pointer',
    ':hover': {
      'borderBottom': 'none'
    }
  },
  contact: {
    paddingTop: '3rem',
    color: '#aaa',
    fontSize: '1rem',
    cursor: 'pointer',
    opacity: 0,
    transition: 'opacity 1s ease',
  }
}

