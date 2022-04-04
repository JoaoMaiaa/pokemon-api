import { useState, useEffect, Fragment } from 'react'
import api from './services/api.js'

function App() {
  const [pokemon, setPokemon] = useState([])
  const [allPokemons, setAllPokemons] = useState([])

  useEffect(() => {
    getAllPokemons()
    // getPokemon()
  }, [])

  async function getAllPokemons() {
    const { data } = await api.get()
    setAllPokemons(data)
  }

  return (
    <Fragment>

    </Fragment>
  )

}

export default App
