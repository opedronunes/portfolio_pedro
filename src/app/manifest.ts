import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {

    return {
        name: 'Portfólio Web',
        short_name: 'Portfólio',
        description: 'Criação de sites responsivos e dinâmicos.',
        start_url: '/',
        display: 'standalone',
        background_color: '#121214',
        theme_color: '#121214',
        icons: [
            {
                src: '/favicon.ico',
                sizes: 'any',
                type: 'image/x-icon',
            },
        ],
    }
}