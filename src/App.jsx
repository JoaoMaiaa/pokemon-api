import { useState, useEffect, Fragment } from 'react'
import api from './services/api.js'
import { Facebook, Instagram, Twitter, Tiktok } from 'react-bootstrap-icons'
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
      {pokemon.slice(0, 3).map(p => {
        console.log(p)
      })}
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
                <a className="navbar-item has-text-light">Home</a>
                <a className="navbar-item has-text-light">Documentação</a>
                <div className="navbar-item has-dropdown is-hoverable">
                  <a className="navbar-link has-text-light">Pokémons</a>
                  <div className="navbar-dropdown">
                    <a className="navbar-item">Planta</a>
                    <a className="navbar-item">Fogo</a>
                    <a className="navbar-item">Água</a>
                    <a className="navbar-item">Insetos 1</a>
                    <a className="navbar-item">Insetos 2</a>
                    <a className="navbar-item">Pássaros</a>
                    <a className="navbar-item">Roedores</a>
                  </div>
                </div>
              </div>
              <div className="navbar-end m-0">
                <div className="navbar-item">
                  <div className="buttons">
                    <a className="button is-success is-outlined mr-2">
                      <strong>Inscrever-se</strong>
                    </a>
                    <a className="button is-light">Entrar</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
      <section className="section pt-4 has-background-black">
        <div className="container p-4">
          <div className="columns pb-5 mb-5">
            <div className="column has-text-light">
              <h1 className="h1 is-size-2 mr-5">O melhor jogo de <span className="has-text-weight-bold">Pokémon te espera</span></h1>
              <p className="mt-3 has-text-grey-light">Conheça o nosso jogo de pokemon e comece a capturar o seu.</p>
              <p className="has-text-grey-light">Temos uma variedade de pokemons para você capturar e se divertir com sua família e seus amigos.</p>
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
      <section className="section">
        <div className="container">
          <div className="columns">
            <div className="column is-4">
              <div className="px-5 notification has-background-success-dark">
                <div className=" is-flex">
                  {pokemon.slice(0, 3).map(p => (
                    <img src={p.sprites.front_default} alt="" className="mx-auto img-fluid" />
                  ))}
                </div>
                <div className="is-flex">
                  {pokemon.slice(0, 3).map(p => (
                    <p className="mx-auto">{p.species.name}</p>
                  ))}
                </div>
              </div>
            </div>
            <div className="column is-4">
              <div className="px-5 notification has-background-danger">
                <div className="is-flex">
                  {pokemon.slice(3, 6).map(p => (
                    <img src={p.sprites.front_default} alt="" className="mx-auto img-fluid" />
                  ))}
                </div>
                <div className="is-flex">
                  {pokemon.slice(3, 6).map(p => (
                    <p className="mx-auto">{p.species.name}</p>
                  ))}
                </div>
              </div>
            </div>
            <div className="column is-4">
              <div className="px-5 notification has-background-info">
                <div className="is-flex">
                  {pokemon.slice(6, 9).map(p => (
                    <img src={p.sprites.front_default} alt="" className="mx-auto img-fluid" />
                  ))}
                </div>
                <div className="is-flex">
                  {pokemon.slice(6, 9).map(p => (
                    <p className="mx-auto">{p.species.name}</p>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="columns">
            <div className="column is-4">
              <div className="px-5 notification has-background-success">
                <div className="">
                  {pokemon.slice(9, 12).map(p => (
                    <img src={p.sprites.front_default} alt="" className="mx-auto img-fluid" />
                  ))}
                </div>
                <div className="is-flex">
                  {pokemon.slice(9, 12).map(p => (
                    <p className="mx-auto">{p.species.name}</p>
                  ))}
                </div>
              </div>
            </div>
            <div className="column is-4">
              <div className="px-5 notification has-background-warning">
                <div className="is-flex">
                  {pokemon.slice(12, 15).map(p => (
                    <img src={p.sprites.front_default} alt="" className="mx-auto img-fluid" />
                  ))}
                </div>
                <div className="is-flex">
                  {pokemon.slice(12, 15).map(p => (
                    <p className="mx-auto">{p.species.name}</p>
                  ))}
                </div>
              </div>
            </div>
            <div className="column is-4">
              <div className="px-5 notification has-background-success">
                <div className="is-flex">
                  {pokemon.slice(15, 18).map(p => (
                    <img src={p.sprites.front_default} alt="" className="mx-auto img-fluid" />
                  ))}
                </div>
                <div className="is-flex">
                  {pokemon.slice(15, 18).map(p => (
                    <p className="mx-auto">{p.species.name}</p>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="columns">
            <div className="column">
              <div className="px-5 notification has-background-warning-dark">
                <div className="is-flex is-justify-content-center">
                  {pokemon.slice(18, 20).map(p => (
                    <img src={p.sprites.front_default} alt="" className="mx-auto img-fluid" />
                  ))}
                </div>
                <div className="is-flex">
                  {pokemon.slice(18, 20).map(p => (
                    <p className="mx-auto">{p.species.name}</p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section has-background-light">
        <div className="container">
          <div className="columns">
            <div className="column">
              <h2 className="h2 is-size-3 has-text-black has-text-weight-normal">Todos os pokémons <span className="has-text-weight-bold is-underlined">disponíveis</span> para você e seus amigos capturarem.</h2>
              <p className="mt-4 has-text-weight-normal">Pokémon é uma franquia de mídia que pertence a The Pokémon Company, tendo sido criada por Satoshi Tajiri em <span className="has-text-black has-text-weight-bold">1995</span>. Ela é centrada em criaturas ficcionais chamadas <span className="has-text-black has-text-weight-bold">"Pokémon"</span>, que os seres humanos capturam e os treinam para lutarem entre si com seus ataques de <span className="has-text-black has-text-weight-bold">diversos tipos.</span></p>
              <h3 className="h3 is-size-4 mt-5 has-text-black">Inscreva-se na nossa lista de conteúdo semanal</h3>
              <div class="field has-addons mt-4">
                <div class="control">
                  <input class="input" type="text" placeholder="Your email" />
                </div>
                <div class="control">
                  <a href="#" class="button is-black">
                    Enviar
                  </a>
                </div>
              </div>
            </div>
            <div className="column is-6 is-flex is-justify-content-center">
              {
                pokemon.slice(4, 5).map((p) => (
                  <img className="img-fluid" src={p.sprites.other.dream_world.front_default} />
                  // <img className="img-fluid" src={p.sprites.front_default} />
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
                <li className="my-2"><a href="#" className="has-text-grey-light">Home</a></li>
                <li className="my-2"><a href="#" className="has-text-grey-light">Contato</a></li>
                <li className="my-2"><a href="#" className="has-text-grey-light">Documentação</a></li>
                <li className="my-2"><a href="#" className="has-text-grey-light">Sobre</a></li>
              </ul>
              <p className="is-size-3 my-4">Siga-nos</p>
              <ul className="is-flex is-baseline">
                <li className="mr-2"><a href="#"><i className="has-text-success"><Facebook /></i></a></li>
                <li className="mx-2"><a href="#"><i className="has-text-success"><Instagram /></i></a></li>
                <li className="mx-2"><a href="#"><i className="has-text-success"><Twitter /></i></a></li>
                <li className="mx-2"><a href="#"><i className="has-text-success"><Tiktok /></i></a></li>
              </ul>
            </div>
            <div className="column">
              <p className="is-size-3">Tipos de Pokemon</p>
              <ul>
                <li className="my-2"><a href="#" className="has-text-grey-light">Planta</a></li>
                <li className="my-2"><a href="#" className="has-text-grey-light">Água</a></li>
                <li className="my-2"><a href="#" className="has-text-grey-light">Fogo</a></li>
                <li className="my-2"><a href="#" className="has-text-grey-light">Inseto 1</a></li>
                <li className="my-2"><a href="#" className="has-text-grey-light">Inseto 2</a></li>
                <li className="my-2"><a href="#" className="has-text-grey-light">Pássaros</a></li>
                <li className="my-2"><a href="#" className="has-text-grey-light">Roedores</a></li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <footer className="footer has-background-black">
        <div className="container has-text-centered">
          Feito por <a target="_black" className="has-text-grey-light" href="https://github.com/JoaoMaiaa">João Maia</a>
        </div>
      </footer>
    </Fragment>
  )

}

export default App
