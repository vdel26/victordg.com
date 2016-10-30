import React from 'react'
import Link from 'next/link'
import { style } from 'next/css'

export default () => (
  <div>
    <p>Hi, I’m <a href="#">Victor</a>.</p>

    <p>I am a co-founder at <a href="http://thenorthstudio.com">North</a>, a digital product studio from Barcelona.</p>

    <p>Being outdoors, authenticity and a mix of creativity and technology turn me on.</p>

    <p>I also enjoy tinkering with <Link href="/projects"><a>new ideas</a></Link> on my free time.</p>
  </div>
)