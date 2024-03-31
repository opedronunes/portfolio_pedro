import { aw } from "@/data/aw";
import Link from "next/link";

export default function Services() {
    return (
        <section className="body-font">
            <div className="container px-5 py-12 mx-auto">
                <div className="text-center mb-20">
                    <h1 className="sm:text-3xl text-2xl font-medium text-center title-font text-white mb-4">Desenvolvimento de Aplicativos Web</h1>
                    <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">Desenvolvimento de aplicativos web personalizados para atender às necessidades específicas do seu negócio.</p>
                </div>
                <div className="flex flex-wrap -m-4">
                    <div className="p-4 lg:w-2/4 sm:w-1/2 w-full">
                        <h2 className="font-medium title-font tracking-widest text-white mb-4 text-sm text-center uppercase sm:text-left">Benefícios</h2>
                        <nav className="flex flex-col sm:items-start sm:text-left items-center -mb-1 space-y-2">
                            <a>
                                <span className="bg-gray-800 text-red-400 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" className="w-3 h-3" viewBox="0 0 24 24">
                                        <path d="M20 6L9 17l-5-5"></path>
                                    </svg>
                                </span>Personalização de aplicativos web para atender às necessidades específicas do negócio.
                            </a>
                            <a>
                                <span className="bg-gray-800 text-red-400 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" className="w-3 h-3" viewBox="0 0 24 24">
                                        <path d="M20 6L9 17l-5-5"></path>
                                    </svg>
                                </span>Aumento do envolvimento do usuário e da acessibilidade através de interfaces intuitivas.
                            </a>
                            <a>
                                <span className="bg-gray-800 text-red-400 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" className="w-3 h-3" viewBox="0 0 24 24">
                                        <path d="M20 6L9 17l-5-5"></path>
                                    </svg>
                                </span>Integração de funcionalidades avançadas para melhorar a eficiência operacional.
                            </a>
                        </nav>
                    </div>
                    <div className="p-4 lg:w-2/4 sm:w-1/2 w-full">
                        <h2 className="font-medium title-font tracking-widest text-white mb-4 text-sm text-center uppercase sm:text-left">Recursos</h2>
                        <nav className="flex flex-col sm:items-start sm:text-left  items-center -mb-1 space-y-2">
                            <a>
                                <span className="bg-gray-800 text-red-400 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" className="w-3 h-3" viewBox="0 0 24 24">
                                        <path d="M20 6L9 17l-5-5"></path>
                                    </svg>
                                </span>Desenvolvimento de aplicativos web escaláveis e de alto desempenho.
                            </a>
                            <a>
                                <span className="bg-gray-800 text-red-400 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" className="w-3 h-3" viewBox="0 0 24 24">
                                        <path d="M20 6L9 17l-5-5"></path>
                                    </svg>
                                </span>Implementação de APIs e integrações de terceiros para ampliar a funcionalidade.
                            </a>
                            <a>
                                <span className="bg-gray-800 text-red-400 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" className="w-3 h-3" viewBox="0 0 24 24">
                                        <path d="M20 6L9 17l-5-5"></path>
                                    </svg>
                                </span>Testes rigorosos para garantir a qualidade e a segurança do aplicativo.
                            </a>
                        </nav>
                    </div>
                </div>
                <div className="pt-12">
                    <h2 className="font-semibold text-tertiary text-2xl mb-8">Soluções criadas</h2>
                    <div className="flex flex-wrap -mx-4 -mb-10 text-center">
                    {aw.map((item) => (
                            <div className="sm:w-1/2 mb-10 px-4" key={item.id}>
                                <div className="rounded-lg h-64 overflow-hidden">
                                    <img alt="content" className="object-cover object-center h-full w-full" src={item.image} />
                                </div>
                                <h2 className="title-font text-2xl font-medium text-primary mt-6 mb-3">{item.title_project}</h2>
                                <p className="leading-relaxed text-base">{item.description}</p>
                                <div className="flex gap-4 my-3">
                                    {item.githublink && (
                                        <Link href={item.githublink} className="text-tertiary mt-4 inline-flex items-center transition-transform hover:translate-x-2" target="_blank">Github
                                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                                <path d="M5 12h14M12 5l7 7-7 7"></path>
                                            </svg>
                                        </Link>
                                    )}
                                    {item.deploylink && (
                                        <Link href={item.deploylink} className="text-tertiary mt-4 inline-flex items-center transition-transform hover:translate-x-2" target="_blank">Site
                                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                                <path d="M5 12h14M12 5l7 7-7 7"></path>
                                            </svg>
                                        </Link>
                                    )}
                                    {!item.githublink && !item.deploylink && (
                                        <Link href={item.previa} className="text-tertiary mt-4 inline-flex items-center transition-transform hover:translate-x-2">Prévia
                                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                            <path d="M5 12h14M12 5l7 7-7 7"></path>
                                        </svg>
                                    </Link>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}