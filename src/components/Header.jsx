'use client'
import Link from "next/link";
import{ useState } from "react";
import { List, X } from 'phosphor-react';

import { HeaderStyled, Navbar, Toogle } from "../assets/styles/components/header"

export function Header() {

    const [visibility, setVisibility] = useState(false)

    return (
        <header className="flex items-center justify-between h-16">
            <div className="container mx-auto">
                <Navbar>
                    <div className="text-lg font-extrabold leading-tight text-gray-200 uppercase">
                        <Link href={'/'}>
                        {"< Web Developer />"}
                        </Link>
                    </div>
                    <ul>
                        <li>
                            <Link
                                className={({isActive}) => (isActive ? 'active' : 'underline')}
                                href={'/'}
                            >início
                            </Link>
                        </li>
                        <li>
                            <Link 
                                className={({isActive}) => (isActive ? 'active' : 'underline')}
                                href={'/contact'}>Contato
                            </Link></li>
                    </ul>

                </Navbar>

                <Toogle>
                    {!visibility == true &&
                        <div className="hamburger">
                            <a onClick={() => setVisibility(true)}>
                                <List size={32} />
                            </a>
                        </div>
                    }
                    {visibility === true &&
                        <ul>
                            <div className="close">
                                <a onClick={() => setVisibility(false)}>
                                    <X size={32} />
                                </a>
                            </div>
                            <div className="link-mobile">
                                <li>
                                    <Link 
                                        href={'/'} 
                                        className={({isActive}) => (isActive ? 'active' : '')}
                                        onClick={() => setVisibility(false)}
                                    >Início
                                    </Link>
                                </li>
                                <li>
                                    <Link 
                                        href={'/projects'} 
                                        className={({isActive}) => (isActive ? 'active' : '')}
                                        onClick={() => setVisibility(false)}
                                    >Projetos
                                    </Link>
                                </li>
                                <li>
                                    <Link 
                                    className={({isActive}) => (isActive ? 'active' : '')}
                                        href={'/contact'} 
                                        onClick={() => setVisibility(false)}
                                    >Contato
                                    </Link>
                                </li>
                            </div>
                        </ul>
                    }
                </Toogle>
                
            </div>
        </header>
    )
}
