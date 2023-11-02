
import { Repos } from "../components/Repo"
import { Metadata } from "next"
import Solution from "../components/Solution"
import Link from "next/link"

export const metadata: Metadata = {
    title: 'Projects',
    description: 'Principais projetos criados e os seis primeiros projetos do GitHub em ordem alfabética.',
    keywords: ['GitHub', 'Projetos', 'repositório', 'tecnologias']
}

export default function Projects() {
    return (
        <div className="container px-2 mx-auto">
            <div className="divide-x-[1px] divide-gray-400 flex justify-end my-4">
                <Link className="p-1 text-gray-300 font-medium hover:text-green-600 transition-colors" title="Ir para" href={"/"}>Home</Link>
                <Link className="p-1 text-gray-300 font-medium hover:text-green-600 transition-colors" title="Ir para" href={"/contacts"}>Contato</Link>
            </div>
            <div>
                <h4 className="my-2 text-2xl font-bold text-gray-200">Repositório GitHub</h4>
                <Repos />
            </div>
        </div>
    )
}