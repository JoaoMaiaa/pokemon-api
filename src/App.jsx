import { useState, useEffect, Fragment } from 'react'
import api from './services/api.js'
import { Facebook, Instagram, Linkedin } from 'react-bootstrap-icons'
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

  function navBurger(){
    let burger = document.querySelector('.navbar-burger')
    let menu = document.querySelector('.navbar-menu')

    menu.classList.toggle('is-active')
    burger.classList.toggle('is-active')
  }

  return (
    <Fragment>
      <header id="home">
        <nav className="navbar has-background-black">
          <div className="container p-4">
            <div className="navbar-brand">
              <a className="navbar-item" href="#">
                <img className="img-fluid" src="/logo.png" alt="pokemon api" />
              </a>
              <a role="button" onClick={()=>navBurger()} className="ml-auto mr-0 navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
              </a>
            </div>
            <div id="navbarBasicExample" className="navbar-menu">
              <div className="navbar-start">
                <a href="#home" className="navbar-item has-text-grey-light">Home</a>
                <a href="#" className="has-background-black navbar-item has-text-grey-light">Documentação</a>
                <div className="navbar-item has-dropdown is-hoverable">
                  <a className="navbar-link has-text-light has-background-black">Pokémons</a>
                  <div className="navbar-dropdown">
                    <a href="#planta" className="navbar-item">Planta</a>
                    <a href="#fogo" className="navbar-item">Fogo</a>
                    <a href="#agua" className="navbar-item">Água</a>
                    <a href="#insetos-1" className="navbar-item">Insetos 1</a>
                    <a href="#insetos-2" className="navbar-item">Insetos 2</a>
                    <a href="#passaros" className="navbar-item">Pássaros</a>
                    <a href="#roedores" className="navbar-item">Roedores</a>
                  </div>
                </div>
              </div>
              <div className="navbar-end m-0">
                <div className="navbar-item">
                  <div className="buttons">
                    <a className="button is-success is-outlined mr-2">
                      <strong>Inscreva-se</strong>
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
              <img src={foto1} alt="consumo de api do pokemon" className="img-pokefire img-fluid" />
            </div>
          </div>
        </div>
      </section>
      <section className="section has-background-success-dark">
        <div className="container" id="planta">
          <div className="columns">
            <div className="column has-text-light my-auto">
              <h2 className="title is-2 has-text-light pb-4">Tipo planta</h2>
              <p className="my-5">Os Pokémon do tipo grama geralmente são pacíficos e gostam de cuidar de flores e outros, mas também são ótimos lutadores e podem envenenar, paralisar ou colocar o oponente para dormir em batalha.</p>
              <p className="mb-5 pb-4">Normalmente seu corpo costuma ser o mesmo de algumas espécies de plantas, nesse caso o Pokémon cresce em um desenvolvimento muito parecido com uma planta. Quando não é o caso, os Pokémon costumam desenvolver folhas, flores, entre outras que possuem crescimento próprio, mas são controladas pelo Pokémon.Outra coisa que caracteriza os Pokémon do tipo grama é que vários de seus movimentos permitem recuperar pontos de saúde, como raízes, drenos ou síntese</p>
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
        <div className="container" id="fogo">
          <div className="columns">
            <div className="column">
              {
                pokemon.slice(3, 6).map((p) => (
                  <img className="img-fluid" src={p.sprites.other.dream_world.front_default} />
                  // <img className="img-fluid" src={p.sprites.front_default}/>      
                ))
              }
            </div>
            <div className="column has-text-light my-auto">
              <h2 className="title is-2 has-text-light pb-4">Tipo fogo</h2>
              <p className="mb-5 pb-5">O tipo Fogo foi criado na 1ª Geração, quando existiam 12 Pokémon desse tipo. Conforme a franquia evoluiu, a quantidade de tipo Fogo aumentou, chegando atualmente a 87. Quando se levam os Movimentos em consideração, podem ser encontrados entre eles 47 Movimentos de tipo Fogo. No Trading Card Game (TCG), Fogo está exclusivamente representado em um tipo de mesmo nome. Em inglês, o tipo Fogo é chamado de "Fire Type".</p>
            </div>
          </div>
        </div>
      </section>
      <section className="section has-background-info">
        <div className="container">
          <div className="columns" id="agua">
            <div className="column my-auto">
              <h2 className="title is-2 has-text-light pb-4">Tipo água</h2>
              <p className="has-text-light my-5 pb-5">A 1ª Geração foi a que introduziu o tipo Água, incluindo 32 Pokémon e 9 Movimentos. A primeira geração foi, inclusive, a que mais criou Pokémon e Movimentos aquáticos. Atualmente, estes números chegam a 164 Pokémon e 53 Movimentos. Isso provavelmente é uma alusão ao nosso mundo, cuja superfície é 75% composta por água. No TCG, Água está incluído em um tipo de mesmo nome. Em inglês, o tipo Água é chamado de Water Type.</p>
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
        <div className="container" id="insetos-1">
          <div className="columns">
            <div className="column">
              {
                pokemon.slice(9, 12).map((p) => (
                  <img className="img-fluid" src={p.sprites.other.dream_world.front_default} />
                  // <img className="img-fluid" src={p.sprites.front_default}/>      
                ))
              }
            </div>
            <div className="column my-auto">
              <h2 className="title is-2 has-text-light pb-4">Tipo inseto 1</h2>
              <p className="has-text-light my-5 pb-5">O tipo Inseto teve sua introdução na 1ª Geração, em 1996, quando foram criados 12 Pokémon deste tipo. Conforme as Gerações avançaram, mais criaturas do tipo surgiram, até se chegar aos 95 Pokémon atuais. Esse valor se deve, principalmente, à 5ª Geração, que adicionou 18 Pokémon deste tipo à lista. Por outro lado, ao falar de Movimentos, podemos calcular 35 pertencentes ao tipo. Por fim, dentro do TCG, Inseto está incluído no tipo Planta. Em inglês, o tipo Inseto é chamado de Bug Type</p>
            </div>
          </div>
        </div>
      </section>
      <section className="section has-background-warning">
        <div className="container" id="insetos-2">
          <div className="columns">
            <div className="column my-auto">
              <p className="has-text-grey">Também são do tipo inseto</p>
              <p className="has-text-grey is-size-2 my-4">Algumas curiosidades sobre eles</p>
              <p className="has-text-grey">O tipo Inseto nunca foi pareado com Pokémon tipo Dragão ou Sombrio.</p>
              <p className="has-text-grey">Nenhum Pokémon ganha o tipo Inseto quando evolui caso originalmente não o possua.</p>
              <p className="has-text-grey">Todos os Movimentos tipo Inseto podem ser usados nas Sky Battles.</p>
              <p className="has-text-grey">O tipo Inseto era a fraqueza 4x mais comum na Geração I.</p>
              <p className="has-text-grey mb-5 pb-4">Os tipos Inseto e Lutador são os únicos que, separados, resistem um ao outro.</p>
            </div>
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
        <div className="container" id="passaros">
          <div className="columns">
            <div className="column">
              {
                pokemon.slice(15, 18).map((p) => (
                  <img className="img-fluid" src={p.sprites.other.dream_world.front_default} />
                  // <img className="img-fluid" src={p.sprites.front_default}/>      
                ))
              }
            </div>
            <div className="column my-auto">
              <h2 className="title is-2 has-text-light pb-4">Tipo voador</h2>
              <p className="has-text-light my-5 pb-5">Criado na 1ª Geração, o tipo Voador possuía inicialmente 19 representantes. Com o tempo, esse número foi crescendo, atualmente totalizando 86 Pokémon. As duas primeiras Gerações foram as que mais contribuíram para esse valor, pois foram as que mais adicionaram Pokémon voadores: 19 espécies cada. Em termos de Movimentos, o tipo Voador atualmente abrange 33 deles. No TCG, o tipo Voador está incluído em Colorless. Em inglês, o tipo Voador é chamado de Flying Type.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="section has-background-warning-dark">
        <div className="container" id="roedores">
          <div className="columns">
            <div className="column my-auto">
              <h2 className="title is-2 has-text-light pb-4">Tipo roedor</h2>
              <p className="has-text-light pb-5 mb-5">Rattata é um pequeno Pokémon roedor quadrúpede. Tem pêlo roxo com rosto, patas e barriga de cor creme. Tem olhos estreitos contendo esclera branca e pupila com íris vermelhas, orelhas arredondadas com interior de cor creme e um único bigode em cada bochecha. Sua longa cauda é bem enrolada no final. Sua característica mais notável são seus dentes grandes. Como a maioria dos roedores, seus dentes crescem continuamente ao longo de sua vida e devem ser desgastados por roer. Uma fêmea Rattata terá bigodes mais curtos e pêlos mais claros.</p>
            </div>
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
                    <p className="mx-auto has-text-light">{p.base_experience}</p>
                  ))}
                </div>
                <div className="is-flex">
                  {pokemon.slice(0, 3).map(p => (
                    <p className="mx-auto has-text-light">{p.species.name}</p>
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
                    <p className="mx-auto has-text-light">{p.base_experience}</p>
                  ))}
                </div>
                <div className="is-flex">
                  {pokemon.slice(3, 6).map(p => (
                    <p className="mx-auto has-text-light">{p.species.name}</p>
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
                    <p className="mx-auto has-text-light">{p.base_experience}</p>
                  ))}
                </div>
                <div className="is-flex">
                  {pokemon.slice(6, 9).map(p => (
                    <p className="mx-auto has-text-light">{p.species.name}</p>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="columns">
            <div className="column is-4">
              <div className="px-5 notification has-background-success">
                <div className="is-flex">
                  {pokemon.slice(9, 12).map(p => (
                    <img src={p.sprites.front_default} alt="" className="mx-auto img-fluid" />
                  ))}
                </div>
                <div className="is-flex">
                  {pokemon.slice(9, 12).map(p => (
                    <p className="mx-auto has-text-light">{p.base_experience}</p>
                  ))}
                </div>
                <div className="is-flex">
                  {pokemon.slice(9, 12).map(p => (
                    <p className="mx-auto has-text-light">{p.species.name}</p>
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
                    <p className="mx-auto has-text-light">{p.base_experience}</p>
                  ))}
                </div>
                <div className="is-flex">
                  {pokemon.slice(12, 15).map(p => (
                    <p className="mx-auto has-text-light">{p.species.name}</p>
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
                    <p className="mx-auto has-text-light">{p.base_experience}</p>
                  ))}
                </div>
                <div className="is-flex">
                  {pokemon.slice(15, 18).map(p => (
                    <p className="mx-auto has-text-light">{p.species.name}</p>
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
                    <p className="mx-auto has-text-light">{p.base_experience}</p>
                  ))}
                </div>
                <div className="is-flex">
                  {pokemon.slice(18, 20).map(p => (
                    <p className="mx-auto has-text-light">{p.species.name}</p>
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
              <div className="field has-addons mt-4">
                <div className="control">
                  <input className="input" type="text" placeholder="Your email" />
                </div>
                <div class="control">
                  <a href="#" className="button is-black">
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
                <li className="my-2"><a href="#home" className="has-text-grey-light">Home</a></li>
                <li className="my-2"><a href="#" className="has-text-grey-light">Contato</a></li>
                <li className="my-2"><a href="#" className="has-text-grey-light">Documentação</a></li>
                <li className="my-2"><a href="#" className="has-text-grey-light">Sobre</a></li>
              </ul>
              <p className="is-size-3 my-4">Siga-nos</p>
              <ul className="is-flex is-baseline">
                <li className="mr-2"><a target="_black" href="https://facebook.com/eujoaomaia"><i className="has-text-success"><Facebook /></i></a></li>
                <li className="mx-2"><a target="_black" href="https://intagram.com/eumaiajoao"><i className="has-text-success"><Instagram /></i></a></li>
                <li className="mx-2"><a target="_black" href="https://linkedin.com/in/joãomaiaa"><i className="has-text-success"><Linkedin /></i></a></li>                
              </ul>
            </div>
            <div className="column">
              <p className="is-size-3">Tipos de Pokemon</p>
              <ul>
                <li className="my-2"><a href="#planta" className="has-text-grey-light">Planta</a></li>
                <li className="my-2"><a href="#fogo" className="has-text-grey-light">Fogo</a></li>
                <li className="my-2"><a href="#agua" className="has-text-grey-light">Água</a></li>
                <li className="my-2"><a href="#insetos-1" className="has-text-grey-light">Inseto 1</a></li>
                <li className="my-2"><a href="#insetos-2" className="has-text-grey-light">Inseto 2</a></li>
                <li className="my-2"><a href="#passaros" className="has-text-grey-light">Pássaros</a></li>
                <li className="my-2"><a href="#roedores" className="has-text-grey-light">Roedores</a></li>
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
