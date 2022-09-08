import{ useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { List, X } from 'phosphor-react';

import { HeaderStyled, Navbar, Toogle } from "../assets/styles/components/header"

export function Header() {

    const [visibility, setVisibility] = useState(false)

    return (
        <HeaderStyled>
            <div className="container">
                <Navbar>
                    <div className="logo">
                        <Link to={'/'}>
                        {"<Web Developer/>"}
                        </Link>
                    </div>
                    
                    <ul>
                        <li>
                            <NavLink
                                className={({isActive}) => (isActive ? 'active' : '')}
                                to={'/'}
                            >início
                            </NavLink>
                        </li>
                        <li>
                            <NavLink 
                                className={({isActive}) => (isActive ? 'active' : '')}
                                to={'/projects'}>Projetos
                            </NavLink></li>
                        <li>
                            <NavLink 
                                className={({isActive}) => (isActive ? 'active' : '')}
                                to={'/contact'}>Contato
                            </NavLink></li>
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
                                    <NavLink 
                                        to={'/'} 
                                        className={({isActive}) => (isActive ? 'active' : '')}
                                        onClick={() => setVisibility(false)}
                                    >Início
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink 
                                        to={'/projects'} 
                                        className={({isActive}) => (isActive ? 'active' : '')}
                                        onClick={() => setVisibility(false)}
                                    >Projetos
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink 
                                    className={({isActive}) => (isActive ? 'active' : '')}
                                        to={'/contact'} 
                                        onClick={() => setVisibility(false)}
                                    >Contato
                                    </NavLink>
                                </li>
                            </div>
                        </ul>
                    }
                </Toogle>
                
            </div>
        </HeaderStyled>
    )
}
