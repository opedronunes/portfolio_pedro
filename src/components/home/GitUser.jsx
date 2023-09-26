'use client'
import React from 'react'
import { useEffect, useState  } from 'react';
import { GitUserStyled } from '../../assets/styles/components/gitUser';
import axios from 'axios';
import { GithubLogo, GitBranch } from 'phosphor-react';

export function GitUser() {

    
    const [user, setUser] = useState([]);
    const [errorMsg, setErrorMsg] = useState("");

    useEffect(() => {
        getApiUser()
    }, []);

    function getApiUser(){
        axios.get('https://api.github.com/users/opedronunes', {})
            .then(response => {
                setUser(response.data);
            })
            .catch(error => {
                console.log(error)
                setErrorMsg("Não foi possível retornar dados do GitHub!")
            })
    }

    return (
        <GitUserStyled>
            <span>{errorMsg}</span>
            <div id="git_user" key={user.id}>
                <img src={user.avatar_url} alt="" />
                <a href={user.html_url} target="_blank">
                    <h3><GithubLogo size={24} /> {user.login}</h3>
                </a>
                <p>{user.bio}</p>
            </div>
            <footer>
                <strong>Repositórios: {user.public_repos} +</strong>
                <a href="https://github.com/opedronunes?tab=repositories" target="_blank" rel="noreferrer">
                    <GitBranch size={24} />
                    Ver todos
                </a>
            </footer>
        </GitUserStyled>
    )
}
