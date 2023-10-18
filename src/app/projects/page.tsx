
import  {Repos}  from "../components/Repo"
import { Metadata } from "next"
import Solution from "../components/Solution"

export const metadata: Metadata = {
    title: 'Projects',
    description: 'Principais projetos criados e os seis primeiros projetos do GitHub em ordem alfabética.',
    keywords: ['GitHub', 'Projetos', 'repositório', 'tecnologias']
}

export default function Projects(){
    return (
        <div className="container px-2 mx-auto">
            <div className="my-4">
                <div className="my-2 text-gray-200">
                    <h4 className=" text-2xl font-bold">Principais projetos</h4>
                    <Solution/>
                </div>
            </div>
            <div>
                <h4 className="my-2 text-2xl font-bold text-gray-200">Repositório</h4>
                <Repos/>
            </div>
        </div>
    )
}