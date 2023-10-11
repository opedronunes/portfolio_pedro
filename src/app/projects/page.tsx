
type Projects = {
    image: string | StaticImageData,
}
import Image, { StaticImageData } from "next/image"
import  {Repos}  from "../components/Repo"
import { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
    title: 'Projects',
    description: 'Principais projetos criados e os seis primeiros projetos do GitHub em ordem alfabética.',
    keywords: ['GitHub', 'Projetos', 'repositório', 'tecnologias']
}

export default function Projects(): Projects | any{
    return (
        <div className="container px-2 mx-auto">
            <div className="my-4">
                <div className="my-2 text-gray-200">
                    <h4 className=" text-2xl font-bold">Principais projetos</h4>
                    <p>Em breve!!!</p>
                </div>
            </div>
            <div>
                <h4 className="my-2 text-2xl font-bold">Repositório</h4>
                <Repos/>
            </div>
        </div>
    )
}