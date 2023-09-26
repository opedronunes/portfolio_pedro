
type Projects = {
    image: string | StaticImageData,
}
import Image, { StaticImageData } from "next/image"
import { data } from "../../data/projects"
import  {Repos}  from "../components/Repo"
import { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
    title: 'Projects',
    description: 'Principais projetos criados e os seis primeiros projetos do GitHub em ordem alfabética.',
    keywords: ['GitHub', 'Projetos', 'repositório', 'tecnologias']
}

export default function Project(): Projects | any{
    return (
        <div className="container px-2 mx-auto">
            <div className="my-4">
                <div className="my-2 text-2xl font-bold">Principais Projetos</div>
                <div className="grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3">
                    {data.map((project) => (
                        <div className="flex flex-col p-2 shadow-md shadow-gray-950 bg-[rgba(255, 255, 255, 0.1)] rounded-lg backdrop-blur-md" key={project.id}>
                            <Image src={project.image} alt={project.description} width={500} height={500} className="rounded-md" />
                            <h4 className="my-4 text-xl font-semibold text-green-600">{project.title}</h4>
                            <div className="flex flex-col h-full gap-3 text-gray-600">
                                <div className="flex gap-2 text-lg">{project.technologies}</div>
                                <p>{project.description}</p>
                            </div>
                            <div className="flex items-center gap-3 mt-3">
                                <Link href={project.githublink} target="_blank" rel="noreferrer" className="inline-flex px-6 py-2 text-lg text-gray-400 transition-colors border border-gray-600 rounded focus:outline-none hover:bg-green-600 hover:border-green-600 hover:text-gray-200">GitHub</Link>
                                <Link href={project.deploylink} target="_blank" rel="noreferrer" className="inline-flex px-6 py-2 text-lg text-gray-400 transition-colors border border-gray-600 rounded focus:outline-none hover:bg-green-600 hover:border-green-600 hover:text-gray-200">Site</Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div>
                <h4 className="my-2 text-2xl font-bold">Repositório</h4>
                <Repos/>
            </div>
        </div>
    )
}