import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import { Container } from 'semantic-ui-react'

class PokemonPage extends React.Component {
  state = {
    pokemons: [],
    search: ""
  }

  componentDidMount() {
    fetch('http://localhost:3000/pokemon')
    .then(response => response.json())
    .then(json => {
      this.setState({pokemons: json})
    })
  }

  handleInputChange = (event) => this.setState({search: event.target.value})

  addPokemon = (info) => {
    const formData = {
      "name": info.name,
      "hp": info.hp,
      "sprites": {
        "front": info.frontUrl,
        "back": info.backUrl
      }
    }

    const objectConfig = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(formData)
    }

    fetch('http://localhost:3000/pokemon', objectConfig)
    .then(response => response.json())
    .then(json => {
      this.setState(previousState => {
        return {
          pokemons: [...previousState.pokemons, json]
        }
      })
    })
  }
  
  render() {

    const filteredPokemon = this.state.pokemons.filter(pokemon => pokemon.name.includes(this.state.search))

    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm addPokemon={this.addPokemon}/>
        <br />
        <Search handleInputChange={this.handleInputChange}/>
        <br />
        <PokemonCollection pokemons={filteredPokemon}/>
      </Container>
    )
  }
}

export default PokemonPage
