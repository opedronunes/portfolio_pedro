

import { Metadata } from "next"
import React from "react"
import './globals.css'
import { Header } from "../components/Header"

import GlobalStyled from '../assets/styles/global'
import { Footer } from "../components/Footer"

export const metadata: Metadata = {
  metadataBase: new URL('http://localhost:3000'),
  title: {
    default: 'Portfólio',
    template: 'Portifólio | %s'
  },
  viewport: 'width=device-width, initial-scale=1',
  description: 'Desenvolvedor front-end, criação de páginas web responsivas e modernas,',
  abstract: 'Developer front-end, creation of modern and responsive websites.',
}
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-[#121214]">
        <div id="root">
          <GlobalStyled/>
          <div className="top-0 bg-no-repeat bg-header-image">
            <Header/>
            {children}
            <Footer/>
          </div>
        </div>
      </body>
    </html>
  )
}
