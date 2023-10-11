'use client'

import Link from "next/link"
import { GithubLogo, LinkedinLogo, InstagramLogo, Envelope } from "@phosphor-icons/react"

export default function Social(){
    return(
        <div className="flex items-center gap-4 text-gray-400">
            <Link className="hover:text-green-600 transition-colors" target="_blank" href="https://github.com/opedronunes"><GithubLogo size={30} /></Link>
            <Link className="hover:text-green-600 transition-colors" target="_blank" href="https://www.linkedin.com/in/opedronunes/"><LinkedinLogo size={30} /></Link>
            <Link className="hover:text-green-600 transition-colors" target="_blank" href="https://www.instagram.com/opedronunes.dev/"><InstagramLogo size={30} /></Link>
            <Link className="hover:text-green-600 transition-colors" target="_blank" href="mailto:adm.pedronunes@hotmail.com"><Envelope size={30} /></Link>
        </div>
    )
}