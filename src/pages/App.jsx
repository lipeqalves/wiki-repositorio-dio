
import { useState } from 'react'
import gitLogo from '../assets/github.png'
import { Button } from '../components/Button'
import { Input } from '../components/Input'
import { ItemRepo } from '../components/Repositorio'
import { Api } from '../services/api'
import { Container } from './styles'

export const  App = () => {

  const [currentRepo, setCurrentRepo] = useState('');
  const [repos, setRepos] = useState([]);

  const handleSearchRepo = async () => {
    const { data } = await Api.get(`repos/${currentRepo}`);
    
    if(data.id){
      const isExist = repos.find(repo => repo.id === data.id)
      if(!isExist){
        setRepos(prev => [...prev, data]);
        setCurrentRepo('');
      }else{
        alert('Repositório já existe')
        setCurrentRepo('');
      }
      return;
    }

    alert('Repositório não encontrado')
    setCurrentRepo('');
  }

  const handleRemoveRepo = (id) =>{
    const remove = repos.filter(repo => repo.id !== id);
    setRepos(remove);
  }
 

  return (
    <Container >
      <img src={gitLogo} width={72} height={72}></img>   
      <Input value={currentRepo} onChange={(e) => setCurrentRepo(e.target.value)}/>
      <Button onClick={handleSearchRepo}/>
      {repos.map((repo, key) => <ItemRepo repo={repo} key={key} handleRemoveRepo={handleRemoveRepo}/>)}
    </Container>
  )
}


