import Image from "next/image"
import Link from "next/link";

export default function NotFound(){
    return(
        <section className="px-2 flex items-center h-screen justify-center flex-col bg-[rgba(255, 255, 255, 0.1)] rounded-lg backdrop-blur-md text-gray-200">
            <div className="flex gap-4 flex-col md:flex-row">
                <Image className="rounded" src={'/images/404.jpg'} width={500} height={500} alt="Imagem com jardim e o número 404 indicando que a rota não foi encontrada"/>
                <div className="text-center flex flex-col items-center justify-center gap-4">
                    <p>Oops, não se preocupe! a culpa não é sua.</p>
                    <Link href={"/"} className="w-full justify-center animate-bounce bg-gray-200 flex items-center p-4 rounded-lg font-semibold uppercase text-green-600 hover:bg-green-600 hover:text-gray-200 transition-colors">Voltar</Link>
                </div>
            </div>
        </section>
    )
}