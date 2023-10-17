import { project } from "@/data/Project";
import Image, { StaticImageData } from "next/image"


export default function Solution(){
    return (
        <section>
            {project.map((item)=> (
                <div className="md:flex gap-2 p-3 bg-[rgba(255, 255, 255, 0.1)] rounded-lg backdrop-blur-md" key={item.id}>
                    <Image src={item.image} alt={item.description} width={500} height={500} className="rounded md:w-[50%]"/>
                    <div className="bg-gray-600 flex flex-col gap-2 rounded-md mt-2 md:m-0 p-2 text-gray-400">
                        <h4 className="font-bold text-xl leading-tight text-gray-200">{item.title}</h4>
                        <div className="flex flex-col gap-1">
                            <small className="text-xs">Stacks utilizadas:</small>
                            <p className="bg-green-600 rounded-sm p-2 font-semibold text-gray-200 leading-relaxed">{item.technologies}</p>
                        </div>
                        <p>{item.description}</p>
                        <div className="flex gap-2">
                            <a href={item.githublink} target="_blank" rel="noreferrer" className="inline-flex px-4 py-1 text-lg hover:text-gray-200 text-green-600 transition-colors border rounded focus:outline-none hover:bg-green-600 border-green-600"> GitHub</a>
                            <a href={item.deploylink} target="_blank" rel="noreferrer" className="inline-flex px-4 py-1 text-lg hover:text-gray-200 text-green-600 transition-colors border rounded focus:outline-none hover:bg-green-600 border-green-600"> Site</a>
                        </div>
                    </div>
                    
                </div>
            ))}
        </section>
    )
}