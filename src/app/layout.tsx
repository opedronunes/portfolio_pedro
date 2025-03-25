import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Header from './components/Header'
import Footer from './components/Footer'
import Analytics from './components/Analytcs'
import { Suspense } from 'react'
import Breadcrumb from './components/Breadcrumb'
import Bw from './components/ButtonWp'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
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
      <body className={`inter.className bg-background dark`}>
        <main className="top-0 bg-no-repeat md:bg-contain bg-header-image text-gray-400">
          <Header />
          <Breadcrumb
            homeElement={'Home'}
            separator={<svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4" viewBox="0 0 256 256"><path d="M128,96a32,32,0,1,0,32,32A32,32,0,0,0,128,96Zm0,48a16,16,0,1,1,16-16A16,16,0,0,1,128,144Z"></path></svg>}
            activeClasses='text-tertiary'
            containerClasses='flex py-2 justify-end container mx-auto px-2 md:px-0 items-center'
            listClasses='hover:underline font-bold'
            capitalizeLinks
          />
          {children}
          <Footer />
          <Bw />
        </main>
        <Suspense>
          <Analytics />
        </Suspense>
      </body>
    </html>
  )
}
