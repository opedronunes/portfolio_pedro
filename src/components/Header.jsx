import{ useState } from "react";
import { Link } from "react-router-dom";
import { List, X } from 'phosphor-react';

import { HeaderStyled, Navbar, Toogle } from "../assets/styles/components/header"


export function Header() {

    const [visibility, setVisibility] = useState(false)

    return (
        <HeaderStyled>
            <div className="container">
                <Navbar>
                    <div>
                        <Link to={'/'} className="">
                            Logo
                        </Link>
                    </div>
                    
                    <ul>
                        <li><Link to={'/'}>início</Link></li>
                        <li><Link to={'/projects'}>Projetos</Link></li>
                        <li><Link to={'/contact'}>Contato</Link></li>
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
                                <li><Link to={'/'} onClick={() => setVisibility(false)}>Início</Link></li>
                                <li><Link to={'/projects'} onClick={() => setVisibility(false)}>Projetos</Link></li>
                                <li><Link to={'/contact'} onClick={() => setVisibility(false)}>Contato</Link></li>
                            </div>
                        </ul>
                    }
                </Toogle>
                
            </div>
        </HeaderStyled>
    )
}
