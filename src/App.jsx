import { useState, useEffect, Fragment } from 'react'
import api from './services/api.js'
import axios from 'axios'

function App() {
  const [pokemon, setPokemon] = useState([])

  useEffect(() => {
    getPokemon()
  }, [])

  // async function getPokemon(){
  //   axios.get('https://pokeapi.co/api/v2/pokemon') 
  //     .then(res=>res.data.results)
  //     .then(results=>Promise.all(results.map(res=> axios.get(`${res.url}`))))  
  //     .then(results=>setPokemon(results.map(res=>res.data)))
  // }

  async function getPokemon() {
    await axios.get('https://pokeapi.co/api/v2/pokemon')
      .then(res => {
        return res.data.results
      })
      .then(results => {
        return Promise.all(results.map(res => {
          return axios.get(`${res.url}`)
        }))
      })
      .then(results => {
        setPokemon(results.map(el => {
          return el.data
        }))
        // não funciona
        // results.map(el=>{
        //   return setPokemon(el.data)
        // })
      })
  }


  return (
    <Fragment>
      <section className="section hero is-success">
        <div className="container">
          {console.log(pokemon.slice(0, 3))}
          {pokemon.map((p) => (
            <img className="img-fluid" src={p.sprites.other.dream_world.front_default} />
            // <img className="img-fluid" src={p.sprites.front_default}/>      
          ))}
        </div>
      </section>


    </Fragment>
  )

}

export default App
