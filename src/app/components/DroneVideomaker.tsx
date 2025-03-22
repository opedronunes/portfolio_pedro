'use client'
// import { useState } from "react";
import { motion } from "framer-motion";
import { PlayCircle } from "lucide-react";
import { title } from "process";

// const videos = [
//     { title: "Vídeo Promocional", url: "https://www.youtube.com/embed/example1" },
//     { title: "Cobertura de Evento", url: "https://www.youtube.com/embed/example2" },
//     { title: "Imagens Imobiliárias", url: "https://www.youtube.com/embed/example3" }
// ];

export default function DroneVideomaker() {
    // const [selectedVideo, setSelectedVideo] = useState(null);

    return (
        <section className="text-gray-200 py-16 container mx-auto px-2 md:px-12">
            <div className="max-w-5xl mx-auto text-center">
                <motion.h1
                    className="text-4xl font-bold text-tertiary"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                >
                    Filmagem Profissional com Drone
                </motion.h1>
                <p className="text-gray-400 mt-4">
                    Capturando momentos incríveis com qualidade cinematográfica. Explore
                    novas perspectivas para seu projeto.
                </p>
            </div>

            {/* Ilustração */}
            <div className="flex justify-center my-8">
                <img
                    src="/images/perfil.jpeg"
                    alt="Drone em ação"
                    className="rounded-lg shadow-lg md:max-w-sm"
                />
            </div>

            {/* Serviços */}
            <div className="grid md:grid-cols-3 gap-4 mt-12">
                {[
                    { title: "Eventos e Casamentos", description: "Registros cinematográficos de momentos especiais com ângulos diferenciados." },
                    { title: "Imóveis e Construção", description: "Vídeos para construtoras, incorporadoras e imobiliárias, valorizando empreendimentos." },
                    { title: "Empresas e Negócios", description: "Produção de vídeos institucionais para destacar marcas e serviços." },
                    { title: "Turismo e Hotelaria", description: "Imagens de tirar o fôlego para promover pousadas, resorts e destinos turísticos." },
                    { title: "Esportes e Aventura", description: "Cobertura de eventos esportivos com tomadas aéreas dinâmicas e envolventes." },
                    { title: "Agronegócio e Inspeções", description: "Monitoramento de lavouras, inspeções industriais e avaliações técnicas." },
                ].map((service, index) => (
                    <motion.div
                        key={index}
                        className="bg-[rgba(255,255,255,0.1)] p-6 rounded-lg shadow-md"
                        whileHover={{ scale: 1.05 }}
                    >
                        <h2 className="text-lg font-semibold text-tertiary">{service.title}</h2>
                        <p className="text-gray-400 text-sm mt-2">
                            {service.description}.
                        </p>
                    </motion.div>
                ))}
            </div>

            {/* Portfólio de Vídeos */}
            {/* <div className="max-w-5xl mx-auto mt-16">
                <h2 className="text-2xl font-semibold text-center text-tertiary">
                    Portfólio de Vídeos
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
                    {videos.map((video, index) => (
                        <motion.div
                            key={index}
                            className="relative group cursor-pointer"
                            onClick={() => setSelectedVideo(video)}
                        >
                            <img
                                src={`https://source.unsplash.com/400x250/?drone,skyline&sig=${index}`}
                                alt="Thumb"
                                className="w-full h-[200px] rounded-lg object-cover"
                            />
                            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                                <PlayCircle size={50} className="text-white" />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div> */}

            {/* Modal de Vídeo */}
            {/* {selectedVideo && (
                <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center p-4 z-50">
                    <div className="relative bg-gray-900 rounded-lg overflow-hidden max-w-3xl w-full">
                        <button
                            onClick={() => setSelectedVideo(null)}
                            className="absolute top-4 right-4 text-gray-400 hover:text-white"
                        >
                            ✕
                        </button>
                        <iframe
                            className="w-full h-[300px] md:h-[500px]"
                            src={selectedVideo}
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>
            )} */}
            <div className="flex flex-wrap justify-center lg:w-4/5 sm:mx-auto sm:mb-2 py-16">
                <motion.h1
                    className="text-4xl font-bold text-tertiary mb-16 text-center"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                >
                    Por Que Escolher Filmagem com Drone?
                </motion.h1>
                <div className="p-2 sm:w-1/2 w-full">
                    <div className="bg-[rgba(255,255,255,0.1)] rounded flex p-4 h-full items-center">
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" className="text-tertiary w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                            <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                            <path d="M22 4L12 14.01l-3-3"></path>
                        </svg>
                        <span className="title-font font-normal">Imagens com Alta Definição – Captura em 4K para máxima qualidade.</span>
                    </div>
                </div>
                <div className="p-2 sm:w-1/2 w-full">
                    <div className="bg-[rgba(255,255,255,0.1)] rounded flex p-4 h-full items-center">
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" className="text-tertiary w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                            <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                            <path d="M22 4L12 14.01l-3-3"></path>
                        </svg>
                        <span className="title-font font-normal">Perspectivas Exclusivas – Ângulos inovadores para destacar cada detalhe.</span>
                    </div>
                </div>
                <div className="p-2 sm:w-1/2 w-full">
                    <div className="bg-[rgba(255,255,255,0.1)] rounded flex p-4 h-full items-center">
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" className="text-tertiary w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                            <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                            <path d="M22 4L12 14.01l-3-3"></path>
                        </svg>
                        <span className="title-font font-normal">Vídeos Cinematográficos – Edição profissional para um resultado impactante.</span>
                    </div>
                </div>
                <div className="p-2 sm:w-1/2 w-full">
                    <div className="bg-[rgba(255,255,255,0.1)] rounded flex p-4 h-full items-center">
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" className="text-tertiary w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                            <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                            <path d="M22 4L12 14.01l-3-3"></path>
                        </svg>
                        <span className="title-font font-normal">Autorização e Segurança – Operação dentro das normas da ANAC e do DECEA.</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
