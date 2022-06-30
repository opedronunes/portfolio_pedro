
import axios from "axios"
import { useQuery } from "react-query"



export function GitHub() {

  
  const { data, isFetching } = useQuery('repos', async () => {
    
    const response = await axios.get('https://api.github.com/users/PedroNunes-Dev/repos');
    return response.data;

  }, {
    staleTime: 1000 * 60, // 1 minuto
  });

  return (
    <div>

      <div>
        <ul>
          { isFetching && <p>Carregando...</p> }
          {data?.map(repo => {
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
