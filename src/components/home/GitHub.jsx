
import axios from "axios";
import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import { Git, GitPerfil, GitRepo } from "../../assets/styles/components/git";
import { useFetch } from "../../hooks/useFetch"



export function GitHub() {

  const { data: repositories, isFetching } = useFetch ('users/PedroNunes-Dev/repos')
  const [userGit, setUserGit] = useState([]);
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    getApiUser()
  })

  const api = axios.create({
    baseURL: 'https://api.github.com/'
  })

  function getApiUser(){
    
    api.get('users/PedroNunes-Dev', {

    })
      .then(response => {
        setUserGit(response.data);
      })
      .catch(error => {
        console.log(error)
        setErrorMsg("GitHub temporariamente fora de serviço!")
      });
      

  }

  return (
    <Git>
      <div className="container">
        <h2 className="title">GitHub</h2>
        <div className="row">
          <p className="text-danger px-2">{errorMsg}</p>
          <div className="col-md-6">
            <GitPerfil>
              <img src={userGit.avatar_url} alt="Foto do github" />
              <h3>{userGit.login}</h3>
              <p>{userGit.bio}</p>
            </GitPerfil>
          </div>
          <div className="col-md-6">
            <div className="repo">
              <ul>
                { isFetching && <p>Carregando...</p> }
                {repositories?.slice(0, 4).map(repo => {
                  return(
                    <GitRepo>
                      <li className="card-repo" key={repo.full_name}>
                        <Link to={repo.html_url} target="_blank" rel="noreferrer">
                          <strong className="card-title">{repo.name}</strong>
                        </Link>
                        <p>{repo.description}</p>
                      </li>
                    </GitRepo>
                  )
                })}
              </ul>
              <div className="card-rodape">
                <strong>Repositórios: {userGit.public_repos} +</strong>
                <a href="https://github.com/PedroNunes-Dev?tab=repositories" target="_blank" rel="noreferrer">Ver todos</a>
              </div>

            </div>
          </div>
        </div>
      </div>
    </Git>
  )
}
