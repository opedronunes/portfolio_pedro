
import axios from "axios";
import { useEffect, useState } from "react"
import { Git, GitPerfil, GitRepo } from "../../assets/styles/components/git";
import { useFetch } from "../../hooks/useFetch"
import { BiCodeAlt } from 'react-icons/bi'
import ScrollReveal from "scrollreveal";



export function GitHub() {

  ScrollReveal().reveal('.perfil', { 
    
    delay: 500,
    distance: '80px',
    origin: 'left',
    duration: 700,
    reset: true
  });

  ScrollReveal().reveal('.repo', { 
    
    delay: 500,
    distance: '80px',
    origin: 'rigth',
    duration: 700,
    reset: true
  });

  const { data: repositories, isFetching } = useFetch ('https://api.github.com/users/PedroNunes-Dev/repos')
  const [userGit, setUserGit] = useState([]);
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    getApiUser()
  }, [])

   function getApiUser(){
    
     axios.get('https://api.github.com/users/PedroNunes-Dev', {

    })
      .then(response => {
        setUserGit(response.data);
        console.log(response);
      })
      .catch(error => {
        console.log(error)
        setErrorMsg("Oops, esperando dados do GitHub!")
      });
      

  }

  return (
    <Git>
      <div className="container">
        <h2 className="title">GitHub</h2>
        <div className="row">
          <p className="text-danger px-2">{errorMsg}</p>
          <div className=" perfil col-md-6">
            <GitPerfil key={userGit.id}>
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
                    <GitRepo key={repo.id} >
                      <li className="card-repo">
                        <a href={repo.html_url} target="_blank" rel="noreferrer">
                          <BiCodeAlt size={30} />
                          <strong className="card-title">{repo.name}</strong>
                        </a>
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
