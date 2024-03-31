import Carousel from "@/app/components/Carousel";

export default function Services() {
    return (
        <section className="body-font">
            <div className="container px-5 py-12 mx-auto">
                <div className="text-center mb-20">
                    <h1 className="sm:text-3xl text-2xl font-medium text-center title-font text-white mb-4">Consultoria em TI</h1>
                    <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">Assessoria especializada em tecnologia da informação para ajudar sua empresa a tomar decisões estratégicas de TI.</p>
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
                                </span>Assessoria especializada em tecnologia da informação para otimizar operações e estratégias empresariais.
                            </a>
                            <a>
                                <span className="bg-gray-800 text-red-400 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" className="w-3 h-3" viewBox="0 0 24 24">
                                        <path d="M20 6L9 17l-5-5"></path>
                                    </svg>
                                </span>Identificação de oportunidades de melhoria e implementação de soluções inovadoras.
                            </a>
                            <a>
                                <span className="bg-gray-800 text-red-400 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" className="w-3 h-3" viewBox="0 0 24 24">
                                        <path d="M20 6L9 17l-5-5"></path>
                                    </svg>
                                </span>Suporte contínuo para garantir a eficácia e a segurança dos sistemas de TI.
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
                                </span>Análise abrangente das necessidades e desafios de TI da empresa.
                            </a>
                            <a>
                                <span className="bg-gray-800 text-red-400 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" className="w-3 h-3" viewBox="0 0 24 24">
                                        <path d="M20 6L9 17l-5-5"></path>
                                    </svg>
                                </span>Desenvolvimento de estratégias personalizadas e planos de ação.
                            </a>
                            <a>
                                <span className="bg-gray-800 text-red-400 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" className="w-3 h-3" viewBox="0 0 24 24">
                                        <path d="M20 6L9 17l-5-5"></path>
                                    </svg>
                                </span>Monitoramento proativo e manutenção preventiva para minimizar interrupções.
                            </a>
                        </nav>
                    </div>
                </div>
                <Carousel />
            </div>
        </section>



    )
}