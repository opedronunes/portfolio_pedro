'use client'
import Link from "next/link";
import MobileMenu from "./MobileMenu";
import { usePathname } from "next/navigation";

export default function Header() {
    const pathname = usePathname();
    return (

        <header className="body-font">
            <div className="container mx-auto flex flex-wrap justify-between py-3 px-2 md:px-0 md:flex-row items-center">
                <Link href={'/'} className="text-lg font-extrabold leading-tight flex uppercase title-font items-center ">
                    <img src="/images/icon.png" className="w-20 md:w-28 h-auto" alt="" />
                    <span className="ml-3 text-xl xl:block lg:hidden">Pedro Nunes</span>
                </Link>
                <div className=" inline-flex lg:justify-end ml-5 lg:ml-0">
                    {[
                        { href: "/drone", label: "Drone" },
                        { href: "/contacts", label: "Contato" },
                    ].map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={`hidden bg-bg-secondary md:flex items-center p-4 rounded text-base font-semibold uppercase text-tertiary transition-colors 
                            ${pathname === link.href
                                    ? "bg-tertiary text-white" // Ativo
                                    : "hover:bg-tertiary hover:text-white"}`
                            }
                        >
                            {link.label}
                        </Link>
                    ))}

                </div>
                <MobileMenu />

                {/* <div className=" inline-flex lg:justify-end ml-5 lg:ml-0">
                    
                    <Link href={'/drone'} className="hidden bg-bg-secondary md:flex items-center p-4 rounded text-base font-semibold uppercase text-tertiary hover:bg-tertiary hover:text-gray-200 transition-colors">
                        Drone
                    </Link>
                    <Link href={'/contacts'} className="hidden bg-bg-secondary md:flex items-center p-4 rounded text-base font-semibold uppercase text-tertiary hover:bg-tertiary hover:text-gray-200 transition-colors">
                        Contato
                    </Link>
                </div> */}
            </div>
        </header>
    )
}