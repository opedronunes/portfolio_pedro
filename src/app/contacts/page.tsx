import Link from "next/link";
import Social from "../components/Social";

export default function Contacts(){
    return(
        <section className="h-screen bg-[rgba(255, 255, 255, 0.1)] backdrop-blur-md my-4 container mx-auto">
            <div className="divide-x-[1px] divide-gray-400 flex justify-end my-4">
                <Link className="p-1 text-gray-300 font-medium hover:text-tertiary transition-colors" href={"/"}>Home</Link>
                <Link className="p-1 text-gray-300 font-medium hover:text-tertiary transition-colors" href={"/projects"}>Projetos</Link>
            </div>
            <div className="flex items-center flex-col justify-center gap-4 text-gray-400">
                <Social/>
                Em produção...
            </div>
        </section>
    )
}