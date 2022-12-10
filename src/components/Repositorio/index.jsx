
import { ItemContainer } from './styles'


export const  ItemRepo = ({repo, handleRemoveRepo}) => {

  const handleRemove = () =>{
    handleRemoveRepo(repo.id)
  }
  return (
    <ItemContainer >
      <h3>{repo.name}</h3>
      <p>{repo.full_name}</p>
      <a href={repo.html_url} target="_blank" className="repositorio">Ver Repositório</a><br/>
      <a href='#' onClick={handleRemove} className="remover">Remover</a>
      <hr/>
    </ItemContainer>
  )
}