import Link from "next/link";
import Social from "./Social";

export default function Footer(){
    return(
        <footer className="text-gray-600 body-font">
            <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
                <Link href={'/'} className="text-lg font-extrabold leading-tight text-gray-200 uppercase">
                    {"<Web Developer />"}
                </Link>
                <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-600 sm:py-2 sm:mt-0 mt-4">© 2023 Pedro Nunes
                </p>
                <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
                    <Social/>
                </span>
            </div>
        </footer>
    )
}