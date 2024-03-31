'use client'
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import { Database, DeviceMobile, Layout, RocketLaunch } from '@phosphor-icons/react';
import Link from 'next/link';

export default function Carousel() {
    return (
        <section className="pt-12">
            <Swiper
            slidesPerView={1}
            spaceBetween={10}
            loop={true}
            autoplay={true}
            navigation={true}
            breakpoints={{
                640: {
                    slidesPerView: 2,
                    spaceBetween: 10,
                },
                768: {
                    slidesPerView: 3,
                    spaceBetween: 20,
                },
                1024: {
                    slidesPerView: 4,
                    spaceBetween: 30,
                },
            }}
            modules={[Pagination, Autoplay, Navigation]}
            className="h-80"
            >
                <SwiperSlide>
                    <div className="border border-texto rounded-md p-2 flex items-center justify-center text-center flex-col gap-4 text-gray-500 h-full">
                        <Layout size={32} className="text-4xl text-tertiary"/>
                        <h4 className="text-tertiary font-bold text-2xl">Landing Pages</h4>
                        <p>Solução para divulgar seu produto ou serviço, com o intuito de mostrar ao cliente tudo que seu empreendimento tem a oferecer em uma única página web.</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="border border-texto rounded-md p-2 flex items-center justify-center text-center flex-col gap-4 text-gray-500 h-full">
                        <DeviceMobile size={32} className="text-4xl text-tertiary"/>
                        <h4 className="text-tertiary font-bold text-2xl">Mobile First</h4>
                        <p>Temos tudo na palma da mão, estudos comprovam que a maioria dos acessos e pesquisas são realizadas em dispositivos menores, como celulares de diversos tamanhos.</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="border border-texto rounded-md p-2 flex items-center justify-center text-center flex-col gap-4 text-gray-500 h-full">
                        <Database size={32} className="text-4xl text-tertiary"/>
                        <h4 className="text-tertiary font-bold text-2xl">Banco de dados</h4>
                        <p>Se sua necessidade exige gerenciamento de dados, a melhor solução é integrar seu sistema com um banco de dados. Gerenciamento, relatórios, segurança e integridade dos dados.</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="border border-texto rounded-md p-2 flex items-center justify-center text-center flex-col gap-4 text-gray-500 h-full">
                        <RocketLaunch size={32} className="text-4xl text-tertiary"/>
                        <h4 className="text-tertiary font-bold text-2xl">Soluções</h4>
                        <p>Sempre com desejo de solucionar problemas e entregar qualidade na soluções em que me comprometo a criar, o relaciomento e comunicação transparentes fazem a diferênça!</p>
                    </div>
                </SwiperSlide>
            </Swiper>
            <div className="flex items-center flex-col gap-2 justify-center my-5 text-gray-500">
                <small className="text-xs my-2">Clique neste botão para</small>
                <Link href="https://wa.me/5561996681439" className="animate-bounce inline-flex px-6 py-2 text-lg text-gray-200 transition-opacity border rounded focus:outline-none bg-tertiary border-tertiary hover:opacity-80" target="_blank">
                    Criar uma solução!
                </Link>
            </div>
        </section>
    )
}