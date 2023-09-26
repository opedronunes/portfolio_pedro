'use client'

import Link from "next/link"
import { GithubLogo, LinkedinLogo, InstagramLogo, Envelope } from "phosphor-react"

export default function Social(){
    return(
        <div className="flex items-center gap-2 my-3">
            <Link href=""><GithubLogo size={25} /></Link>
            <Link href=""><LinkedinLogo size={25} /></Link>
            <Link href=""><InstagramLogo size={25} /></Link>
            <Link href=""><Envelope size={25} /></Link>
        </div>
    )
}