
import dynamic from 'next/dynamic'

import { Metadata } from 'next'
import { User } from './components/User'
import Social from './components/Social'
import { Technology } from '../components/home/Technology'


export const metadata: Metadata = {
    metadataBase: new URL('http://localhost:3000'),
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

//const App = dynamic(() => import('../../App'), { ssr: false })

export default function Page() {
        return (
            <div className="bg-[rgba(255, 255, 255, 0.1)] rounded-lg backdrop-blur-md">
                <div className="container px-2 mx-auto">
                    <div className="flex flex-wrap items-center gap-4 px-2 py-8 md:flex-row md:justify-between ">
                        <div className="text-gray-400">
                            <div>
                                <h3 className="text-3xl font-semibold">Olá humano!</h3>
                                <p className="text-sm">Me chamo,</p>
                                <h1 className="text-5xl font-semibold text-gray-200">Pedro Nunes</h1>
                                <p>Sou <strong className="text-green-600">desenvolvedor Web</strong>. Em constante <strong className="text-green-600">evoluçao</strong>.</p>
                                <p>Pronto para <strong className="text-green-600">aprender</strong> e <strong className="text-green-600">contribuir</strong>!</p>
                            </div>
                            <Social />
                        </div>
                        <User />
                    </div>
                    <Technology/>
                </div>
            </div>
        )
}