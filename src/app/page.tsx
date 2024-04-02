import type { Metadata } from 'next'
import Tecnology from './components/Technology'
import Link from 'next/link'


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
        <section className="py-12">
          <div className="flex px-5 items-center justify-center flex-col">
            <img className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded-b-lg" alt="hero" src="/images/nf.png" />
            <div className="text-center lg:w-2/3 w-full">
              <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-primary">Pedro Nunes - Desenvolvedor Web</h1>
              <p className="leading-relaxed mb-8">Transforme sua visão em realidade digital! Como um programador freelancer especializado em soluções personalizadas, estou aqui para impulsionar o seu negócio para novas alturas online. Desde a criação de landing pages que convertem visitantes em clientes até o desenvolvimento de sistemas inteligentes para otimizar seus processos, estou comprometido em trazer inovação e eficiência para o seu empreendimento. Deixe-me ajudá-lo a destacar-se na internet e alcançar seus objetivos. Juntos, vamos construir uma presença online que seja verdadeiramente impactante. Vamos começar a criar algo incrível hoje!</p>
              <div className="flex justify-center">
                <Link href="https://wa.me/5561996681439" className="inline-flex text-primary bg-tertiary border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded text-lg transition-colors" target="_blank">Criar Solução</Link>
                {/* <Link href={'/services'} className="ml-4 inline-flex text-primary bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg transition-colors">Serviços</Link> */}
              </div>
            </div>
          </div>
        </section>
        <section className='py-12'>
          <h2 className="font-semibold text-tertiary text-2xl my-4"> Serviços</h2>
          <div className="flex flex-wrap -m-4">
            <div className="xl:w-1/3 md:w-1/2 p-4">
              <div className="bg-bg-secondary bg-opacity-40 p-6 rounded-lg">
                <img className="h-56 rounded w-full object-cover object-center mb-6" src="/images/webdeveloper.png" alt="content" />
                <h2 className="text-lg text-primary font-medium title-font mb-4">Desenvolvimento Web</h2>
                <p className="leading-relaxed text-base">Transforme suas ideias em realidade digital com sites responsivos, otimizados para desempenho e usabilidade excepcionais.</p>
                <Link href={'/dweb'} className="text-tertiary mt-4 inline-flex items-center transition-transform hover:translate-x-2">Saiba mais
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </Link>
              </div>
            </div>
            <div className="xl:w-1/3 md:w-1/2 p-4">
              <div className="bg-bg-secondary bg-opacity-40 p-6 rounded-lg">
                <img className="h-56 rounded w-full object-cover object-center mb-6" src="/images/appweb.png" alt="content" />
                <h2 className="text-lg text-primary font-medium title-font mb-4">Desenvolvimento de aplicativos Web</h2>
                <p className="leading-relaxed text-base">Desenvolvimento de aplicativos web personalizados para atender às necessidades específicas do seu negócio.</p>
                <Link href={'/appweb'} className="text-tertiary mt-4 inline-flex items-center transition-transform hover:translate-x-2">Saiba mais
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </Link>
              </div>
            </div>
            <div className="xl:w-1/3 md:w-1/2 p-4">
              <div className="bg-bg-secondary bg-opacity-40 p-6 rounded-lg">
                <img className="h-56 rounded w-full object-cover object-center mb-6" src="images/consulter.png" alt="content" />
                <h2 className="text-lg text-primary font-medium title-font mb-4">Consultoria em TI</h2>
                <p className="leading-relaxed text-base">Assessoria especializada em tecnologia da informação para ajudar sua empresa a tomar decisões estratégicas de TI.</p>
                <Link href={'/cti'} className="text-tertiary mt-4 inline-flex items-center transition-transform hover:translate-x-2">Saiba mais
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </section>


        <section>
          <h3 className="font-semibold text-tertiary text-2xl my-4">Sobre</h3>
          <div className="text-gray-500 text-justify">Sou desenvolvedor Web  apaixonado por tecnologia e inovação. Com <strong className="text-tertiary">{year} anos de experiência</strong>, descobri minha paixão pela programação um pouco tarde, mas desde então mergulhei de cabeça nesse mundo fascinante e não olhei para trás.
            Acredito que nunca é tarde para buscar novos conhecimentos, e estou constantemente buscando aprender e crescer. Atualmente, estou focado em aprimorar minhas habilidades em <strong className="text-tertiary">Back-End com Node.js</strong> e em aprofundar meu domínio em banco de dados com <strong className="text-tertiary">PostgreSQL</strong>.
            <p>Além disso, sou um entusiasta do trabalho em equipe e estou sempre pronto para colaborar e compartilhar conhecimentos. Desenvolvo projetos como freelancer e também dedico tempo a projetos pessoais, nos quais busco sempre entregar soluções dinâmicas e de alto desempenho para meus clientes e para meu próprio uso.</p>
            <p>
              Estou animado para <strong className="text-tertiary">explorar novas oportunidades</strong>, colaborar em projetos interessantes e continuar evoluindo no mundo da programação. Se você está em busca de um desenvolvedor comprometido, criativo e dedicado, estou pronto para ajudar a transformar suas ideias em realidade digital.
            </p>
          </div>
        </section>
        <Tecnology />
      </div>
    </div>
  )
}
