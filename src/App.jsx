import { useState, useEffect, Fragment } from 'react'
import api from './services/api.js'
import foto1 from '../assets/images/foto-1.jpeg'
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
        <nav class="navbar has-background-black">
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
      <section className="section pt-4 has-background-black">
        <div className="container p-4">
          <div className="columns">
            <div className="column has-text-light">
              <h1 className="h1 is-size-2 mr-5">O melhor jogo de <span className="has-text-weight-bold">Pokemon te espera</span></h1>
              <p className="mt-3">Conheça o nosso jogo de pokemon e comece a capturar o seu.</p>
              <p>Temos uma variedade de pokemons para você capturar e se divertir com sua família e seus amigos.</p>
              <a href="#" className="mt-5 button is-light">Saiba mais</a>
            </div>
            <div className="column">
              <img src={foto1} alt="" className="img-pokefire img-fluid" />
            </div>
          </div>
        </div>
      </section>
      <section className="section has-background-success-dark">
        <div className="container">
          <div className="columns">
            <div className="column">

            </div>
            <div className="column">
              {
                pokemon.slice(0, 3).map((p) => (
                  <img className="img-fluid" src={p.sprites.other.dream_world.front_default} />
                  // <img className="img-fluid" src={p.sprites.front_default}/>      
                ))
              }
            </div>
          </div>
        </div>
      </section>
      <section className="section has-background-danger">
        <div className="container">
          <div className="columns">
            <div className="column">
              {
                pokemon.slice(3, 6).map((p) => (
                  <img className="img-fluid" src={p.sprites.other.dream_world.front_default} />
                  // <img className="img-fluid" src={p.sprites.front_default}/>      
                ))
              }
            </div>
            <div className="column">

            </div>
          </div>
        </div>
      </section>
      <section className="section has-background-info">
        <div className="container">
          <div className="columns">
            <div className="column">

            </div>
            <div className="column">
              {
                pokemon.slice(6, 9).map((p) => (
                  <img className="img-fluid" src={p.sprites.other.dream_world.front_default} />
                  // <img className="img-fluid" src={p.sprites.front_default}/>      
                ))
              }
            </div>
          </div>
        </div>
      </section>
      <section className="section has-background-success">
        <div className="container">
          <div className="columns">
            <div className="column">
              {
                pokemon.slice(9, 12).map((p) => (
                  <img className="img-fluid" src={p.sprites.other.dream_world.front_default} />
                  // <img className="img-fluid" src={p.sprites.front_default}/>      
                ))
              }
            </div>
            <div className="column"></div>
          </div>
        </div>
      </section>
      <section className="section has-background-warning">
        <div className="container">
          <div className="columns">
            <div className="column"></div>
            <div className="column">
              {
                pokemon.slice(12, 15).map((p) => (
                  <img className="img-fluid" src={p.sprites.other.dream_world.front_default} />
                  // <img className="img-fluid" src={p.sprites.front_default}/>      
                ))
              }
            </div>
          </div>
        </div>
      </section>
      <section className="section has-background-success">
        <div className="container">
          <div className="columns">
            <div className="column">
              {
                pokemon.slice(15, 18).map((p) => (
                  <img className="img-fluid" src={p.sprites.other.dream_world.front_default} />
                  // <img className="img-fluid" src={p.sprites.front_default}/>      
                ))
              }
            </div>
            <div className="column"></div>
          </div>
        </div>
      </section>
      <section className="section has-background-warning-dark">
        <div className="container">
          <div className="columns">
            <div className="column"></div>
            <div className="column">
              {
                pokemon.slice(18, 20).map((p) => (
                  <img className="img-fluid" src={p.sprites.other.dream_world.front_default} />
                  // <img className="img-fluid" src={p.sprites.front_default}/>      
                ))
              }
            </div>
          </div>
        </div>
      </section>
      <section className="section has-background-light">
        <div className="container">
          <div className="columns">
            <div className="column">
              <h2 className="h2 is-size-3 has-text-black">Todos os pokemons <span className="has-text-weight-bold">disponíveis</span> para você e seus amigos capturarem</h2>
            </div>
            <div className="column is-6">
              {
                pokemon.map((p) => (
                  // <img className="img-fluid" src={p.sprites.other.dream_world.front_default} />
                  <img className="img-fluid" src={p.sprites.front_default} />
                ))
              }
            </div>
          </div>
        </div>
      </section>
      <section className="section has-background-black">
        <div className="container">
          <div className="columns">
            <div className="column">
              <p className="is-size-3">Menu</p>
              <ul>
                <li><a href="#" className="has-text-grey-light">lorem ipsum</a></li>
                <li><a href="#" className="has-text-grey-light">lorem ipsum</a></li>
                <li><a href="#" className="has-text-grey-light">lorem ipsum</a></li>
                <li><a href="#" className="has-text-grey-light">lorem ipsum</a></li>
              </ul>
            </div>
            <div className="column">
              <p className="is-size-3">Tipos de Pokemon</p>
              <ul>
                <li><a href="#" className="has-text-grey-light">lorem ipsum</a></li>
                <li><a href="#" className="has-text-grey-light">lorem ipsum</a></li>
                <li><a href="#" className="has-text-grey-light">lorem ipsum</a></li>
                <li><a href="#" className="has-text-grey-light">lorem ipsum</a></li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <footer className="footer has-background-black">
        <div className="container has-text-centered">
          Feito por <a target="_black" href="https://github.com/JoaoMaiaa">João Maia</a>
        </div>
      </footer>
    </Fragment>
  )

}

export default App
