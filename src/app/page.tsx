import Image from 'next/image'
import { User } from './components/User'
import type { Metadata } from 'next'
import Tecnology from './components/Technology'
import Carousel from './components/Carousel'


export const metadata: Metadata = {
  metadataBase: new URL('https://www.opedronunes.com.br'),
  title: 'Home',
  keywords: ['site', 'programador', 'desenvolvedor', 'frontend', 'developer', 'react', 'web', 'responsivo'],
  openGraph: {
    title: 'Desenvolvedor Web',
    description: 'Programador Web com foco em soluções incríveis.',
    locale: 'pt_BR',
    type: 'website',
    url: 'https://www.opedronunes.com.br',
    siteName: 'Pedro Nunes Dev',
  },
}

export default function Home() {
  const today = new Date()
  const dateInit = new Date('2021-05-12')
  const difference = Math.abs((today.getTime() - dateInit.getTime()))
  const year = Math.ceil(difference / (1000 * 60 * 60 * 24 * 365))
  return (
    <div className="bg-[rgba(255, 255, 255, 0.1)] rounded-lg backdrop-blur-md">
      <div className="container px-2 mx-auto">
        <div className="flex flex-wrap items-center gap-4 px-2 py-6 md:flex-row md:justify-between ">
          <div className="text-gray-400">
            <div>
              <h3 className="text-3xl font-semibold">Olá humano!</h3>
              <p className="text-sm">Me chamo,</p>
              <h1 className="text-5xl font-semibold text-gray-200">Pedro Nunes</h1>
              <p>Sou <strong className="text-green-600">desenvolvedor Web</strong>. Em constante <strong className="text-green-600">evoluçao</strong>.</p>
              <p>Pronto para <strong className="text-green-600">aprender</strong> e <strong className="text-green-600">contribuir</strong>!</p>
            </div>
          </div>
          <User />
        </div>
        <Carousel/>
        <Tecnology />
        <div>
          <h3 className="font-semibold text-green-600 text-2xl my-4">Sobre</h3>
          <div className="text-gray-500 text-justify">Sou desenvolvedor Web com <strong className="text-green-600">{year} anos de experiência</strong>, apaixonado por tecnologias. 
          O único arrependimento que tenho é não ter começado os meus estudos na programação antes. Mas nunca é tarde 
          para adquirir novos conhencimentos, neste sentido estou focado em aprender cada vez mais, disposto a conhecer 
          <strong className="text-green-600"> novas linguagens de programação</strong>, <strong className="text-green-600">trabalhar em equipes e ajudar o próximo a evoluir</strong> também! 
          Atualmente estou estudando <strong className="text-green-600">Back-End com Node.js</strong> e aprimorando meus conhecimentos em banco de dados com <strong className="text-green-600">PostgreSQL</strong>, 
          Paralelamente, desenvolvo projetos como freelancer e alguns projetos pessoais que uso no meu dia a dia com o 
          intuito de sempre entregar uma <strong className="text-green-600">aplicação dinâmica e performática</strong> para o cliente final.
          </div>
        </div>
      </div>
    </div>
  )
}
