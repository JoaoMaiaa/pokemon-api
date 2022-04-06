import { useState, useEffect, Fragment } from 'react'
import api from './services/api.js'
import axios from 'axios'

function App() {
  const [allPokemons, setAllPokemons] = useState([])
  const [pokemon, setPokemon] = useState([])

  useEffect(() => {
    getAllPokemons()
  }, [])

  useEffect(()=>{
    getPokemon()
    
  },[])
  async function getAllPokemons() {
    let { data } = await api.get()
    setAllPokemons(data.results) 

  }

  async function getPokemon(){
    axios.get('https://pokeapi.co/api/v2/pokemon') 
      .then(res=>res.data.results)
      .then(results=>Promise.all(results.map(res=> axios.get(`${res.url}`))))  
      .then(results=>setPokemon(results.map(res=>res.data)))
    
    // console.log(value.data.sprites.other.dream_world.front_default)

  }

  return (
    <Fragment>
      <div className="container">

      
      {pokemon.map((p)=>(
          <img className="img-fluid" src={p.sprites.other.dream_world.front_default}/>
      ))}
      </div> 
      
    </Fragment>
  )

}

export default App
