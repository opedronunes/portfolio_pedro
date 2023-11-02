import { project } from "@/data/Project";
import Image, { StaticImageData } from "next/image"
import Link from "next/link";


export default function Solution() {
    return (
        <section className="text-gray-400">
            <h2 className="font-semibold text-green-600 text-2xl my-4">Soluções</h2>
            <div className=" grid md:grid-cols-2 grid-cols-1 gap-2">
                {project.map((item) => (
                    <div className="mb-10 p-2" key={item.id}>
                        <div className="rounded-md h-64 overflow-hidden">
                            <Image src={item.image} alt={item.description} width={500} height={500} className="object-cover object-center h-full w-full" />
                        </div>
                        <h2 className="title-font text-2xl font-medium text-gray-200 mt-6 mb-3">{item.title}</h2>
                        <p className="leading-relaxed text-sm">{item.description}</p>
                        <div className="flex flex-col my-2 gap-1">
                            <small className="text-xs">Stacks:</small>
                            <p className="bg-green-600 rounded-sm p-2 font-semibold text-gray-200 leading-relaxed">{item.technologies}</p>
                        </div>

                        <div className="flex gap-2 my-3">
                            {item.githublink && (
                                <a href={item.githublink} target="_blank" rel="noreferrer" className="inline-flex px-4 py-1 text-lg hover:text-gray-200 text-green-600 transition-colors border rounded focus:outline-none hover:bg-green-600 border-green-600"> GitHub</a>
                            )}
                            {item.deploylink && (
                                <a href={item.deploylink} target="_blank" rel="noreferrer" className="inline-flex px-4 py-1 text-lg hover:text-gray-200 text-green-600 transition-colors border rounded focus:outline-none hover:bg-green-600 border-green-600"> Site</a>
                            )}
                            {!item.githublink && !item.deploylink && (
                                <p className="text-red-500 text-sm">Projeto privado!</p>
                            )}
                        </div>
                    </div>

                ))}
            </div>
        </section>
    )
}