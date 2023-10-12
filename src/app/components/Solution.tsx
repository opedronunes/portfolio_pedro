import { project } from "@/data/Project";
import { tech } from "@/data/Tech";
import Image from "next/image";

export default function Solution() {
    return (
        <section>
            {project.map((item)=> (
                <div className="border flex-wrap-reverse" key={item.id}>
                    <Image src={item.image} alt={item.description} width={400} height={400} />
                    <h4>{item.title}</h4>
                    <p>{item.technologies}</p>
                    <p>{item.description}</p>
                    <div className="link-card">
                        <a href={item.githublink} target="_blank" rel="noreferrer"> GitHub</a>
                        <a href={item.deploylink} target="_blank" rel="noreferrer"> Site</a>
                    </div>
                </div>
            ))}
        </section>
    )
}