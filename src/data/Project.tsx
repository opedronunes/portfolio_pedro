//import rusch from '../../images/rusch.png'
import * as FaIcons from 'react-icons/fa'
import * as DiIcons from 'react-icons/di';
import { StaticImageData } from 'next/image';
import Boleto1 from '../../public/images/boleto1.png'
import Boletos2 from '../../public/images/boletos2.png'
import Boletos3 from '../../public/images/boletos3.png'

export const project = [
    
    {
        id: 0,
        title: "Controle de Boletos",
        image:  "/images/boletos2.png",
        //technologies: [<DiIcons.DiPhp/>, <DiIcons.DiLaravel/>, <FaIcons.FaBootstrap/>],
        technologies: ['PHP -', ' Laravel -', ' Bootstrap'],
        githublink: "Private",
        deploylink: "https://contas.nonotransporteselocacoes.com.br/",
        description: "Trabalho profissional realizado como freelancer em que foi criado sistema web para gerenciamento de boletos, vencimentos e realtórios."
    },
    {
        id: 1,
        title: "Nonô transportes e Serviços",
        image: "/images/nono.png",
        //technologies: [<DiIcons.DiPhp/>, <FaIcons.FaJs/>, <FaIcons.FaBootstrap/>],
        technologies: ['PHP -', ' Javascript -', ' Bootstrap'],
        githublink: "https://github.com/PedroNunes-Dev/nonotransportes",
        deploylink: "https://nonotransporteselocacoes.com.br/",
        description: "Trabalho profissional realizado como freelancer em que foi criado site institucional para uma empresa no ramo de locação de equipamentos e serviços."
    },
    {
        id: 2,
        title: "Rusch Construções",
        image: '/images/rusch.png',
        //technologies: [<DiIcons.DiPhp/>, <FaIcons.FaJs/>, <FaIcons.FaBootstrap/>],
        technologies: ['PHP -', ' Javascript -', ' Bootstrap'],
        githublink: "https://github.com/PedroNunes-Dev/rusch",
        deploylink: "https://ruschconstrucoes.com.br",
        description: "Trabalho profissional realizado como freelancer, para um cliente no ramo de locaçoes de máquinas e equipamentos."
    },
]