import { useState, useEffect, Fragment } from 'react'
import api from './services/api.js'

function App() {
  const [pokemon, setPokemon] = useState([])
  const [allPokemons, setAllPokemons] = useState([])

  useEffect(() => {
    getAllPokemons()
    for(let i = 1; i <= allPokemons.length; i++){
      getPokemon(i)
    }    
  }, [])

  async function getAllPokemons() {
    let { data } = await api.get()
    let dataReaults = data.results
    setAllPokemons(dataReaults)
  }

  async function getPokemon(elements){
    let { data } = await api.get(`${elements}`)
    setPokemon(data)
  }

  return (
    <Fragment>
        {}
    </Fragment>
  )

}

export default App
