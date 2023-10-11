import Link from "next/link";

export default function Header(){
    return(
        <div className="flex justify-between items-center h-20 container mx-auto px-2">
            <Link href={'/'} className="text-lg font-extrabold leading-tight text-gray-200 uppercase">
                {"<Web Developer />"}
            </Link>
            <Link href={'/contacts'} className="bg-gray-200 h-full flex items-center p-4 rounded-b-lg font-semibold uppercase text-green-600 hover:bg-green-600 hover:text-gray-200 transition-colors">
                Contato
            </Link>
        </div>
    )
}