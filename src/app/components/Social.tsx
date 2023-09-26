'use client'

import Link from "next/link"
import { GithubLogo, LinkedinLogo, InstagramLogo, Envelope } from "phosphor-react"

export default function Social(){
    return(
        <div className="flex items-center gap-2 my-3">
            <Link target="_blank" href="https://github.com/opedronunes"><GithubLogo size={25} /></Link>
            <Link target="_blank" href="https://www.linkedin.com/in/opedronunes/"><LinkedinLogo size={25} /></Link>
            <Link target="_blank" href="https://www.instagram.com/opedronunes.dev/"><InstagramLogo size={25} /></Link>
            <Link target="_blank" href="mailto:adm.pedronunes@hotmail.com"><Envelope size={25} /></Link>
        </div>
    )
}