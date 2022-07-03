
import axios from "axios";
import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import { GitPerfil, GitRepo } from "../../assets/styles/components/git";
import { useFetch } from "../../hooks/useFetch"



export function GitHub() {

  const { data: repositories, isFetching } = useFetch ('users/PedroNunes-Dev/repos')
  const [userGit, setUserGit] = useState([]);
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    getApiUser()
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

  const api = axios.create({
    baseURL: 'https://api.github.com/'
  })

  return (
    <div>
      <div className="container">
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
                      <p>{repo.repos_url}</p>
                    </li>
                  </GitRepo>
                )
              })}
            </ul>
            <span>Repositórios: {userGit.public_repos}+</span>
          </div>
        </div>
      </div>
    </div>
  )
}
