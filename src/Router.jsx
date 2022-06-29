import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { LandingPage } from './components/LandingPage'
import { Contact } from './pages/Contact'
import { Projects } from './pages/Projects'

export function Router() {
  return (
    <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
    </Routes>
  )
}
