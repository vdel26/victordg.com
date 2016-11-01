import React from 'react'
import { style } from 'next/css'

export default ({ url, name }) => (
  <a className={style(styles)} href={url} target="_blank">{name}</a>
)

const styles = {
  color: '#aaa',
  textDecoration: 'none',
  ':hover': {
    color: '#111'
  }
}