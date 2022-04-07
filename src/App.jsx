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
      <header>
        <nav class="navbar is-fixed-top">
          <div className="container p-4">

            <div class="navbar-brand">
              <a class="navbar-item" href="#">
                <img className="img-fluid" src="../assets/images/logo.png" alt="Bulma: a modern CSS framework based on Flexbox" />
              </a>

              <a role="button" className="ml-auto mr-0 navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
              </a>
            </div>

            <div id="navbarBasicExample" className=" navbar-menu">
              <div className="navbar-start">
                <a className="navbar-item has-text-light">
                  Home
                </a>

                <a className="navbar-item has-text-light">
                  Documentation
                </a>

                <div className="navbar-item has-dropdown is-hoverable">
                  <a className="navbar-link has-text-light">
                    More
                  </a>

                  <div className="navbar-dropdown">
                    <a className="navbar-item">
                      About
                    </a>
                    <a className="navbar-item">
                      Jobs
                    </a>
                    <a className="navbar-item">
                      Contact
                    </a>
                    <hr className="navbar-divider" />
                    <a className="navbar-item">
                      Report an issue
                    </a>
                  </div>
                </div>
              </div>

              <div className="navbar-end ml-0 mr-0">
                <div className="navbar-item">
                  <div className="buttons">
                    <a className="button is-primary is-outlined mr-2">
                      <strong>Sign up</strong>
                    </a>
                    <a className="button is-light">
                      Log in
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
      <section className="section has-background-black">
        <div className="container p-4">
          <div className="columns pt-5">
            <div className="column has-text-light">
              <h1 className="h1 is-size-2">O melhor jogo de Pokemon te espera</h1>
              <p className="">Conheça o nosso jogo de pokemon e comece a capturar o seu</p>

            </div>
            <div className="column"></div>
          </div>
          {/* {          
          pokemon.slice(0, 3).map((p) => (
            <img className="img-fluid" src={p.sprites.other.dream_world.front_default} />
            // <img className="img-fluid" src={p.sprites.front_default}/>      
          ))
          }
          {
            pokemon.slice(3, 6).map((p) => (
              <img className="img-fluid" src={p.sprites.other.dream_world.front_default} />
              // <img className="img-fluid" src={p.sprites.front_default}/>      
            ))
          } */}

        </div>
      </section>
    </Fragment>
  )

}

export default App
