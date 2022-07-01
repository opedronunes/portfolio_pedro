
import axios from "axios";
import { useEffect, useState } from "react"
import { useFetch } from "../../hooks/useFetch"

const api = axios.create({
  baseURL: 'https://api.github.com/'
})

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

  return (
    <div>

      <div>
        <img src={userGit.avatar_url} alt="Foto do github" />
        <h3>{userGit.login}</h3>
        <p>{userGit.bio}</p>
      </div>
      <p className="text-danger px-2">{errorMsg}</p>
      <div>
        <ul>
          { isFetching && <p>Carregando...</p> }
          {repositories?.slice(0, 4).map(repo => {
            return(
              <li key={repo.full_name}>
                <strong>{repo.full_name}</strong>
                <p>{repo.description}</p>
              </li>
            )
          })}
        </ul>
      </div>
      
    </div>
  )
}
