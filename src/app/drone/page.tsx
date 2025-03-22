import { Metadata } from 'next'
import DroneVideomaker from '../components/DroneVideomaker'
import { InstaFeed } from '../components/InstaFeed'

export const metadata: Metadata = {
    title: 'Drone',
    description: 'Videomaker completo para capturar seus momentos mais incríveis!',
    keywords: ['Drone', 'Videomaker', 'Videos', 'cinematográfico']
}
export default function Drone() {
    return (
        <section className=" my-4 container mx-auto px-2">
            <div>
                <DroneVideomaker />
                <InstaFeed />
            </div>
        </section>
    )
}