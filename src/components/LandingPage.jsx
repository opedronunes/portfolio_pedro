import React from 'react'
import { About } from './home/About'
import { Experiences } from './home/Experiences'
import { GitHub } from './home/GitHub'
import { Technology } from './home/Technology'
import { Top } from './home/Top'

export function LandingPage() {
  return (
    <main>
      <Top />
      <Technology />
      <Experiences />
      <About />
    </main>
  )
}
