import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Header from './components/Header'
import Footer from './components/Footer'

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
      <body className={`inter.className bg-gray-950`}>
        <main className="top-0 bg-no-repeat md:bg-contain bg-header-image">
          <Header />
          {children}
          <Footer/>
        </main>
      </body>
    </html>
  )
}
