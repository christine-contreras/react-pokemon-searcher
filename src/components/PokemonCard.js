import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {
  state={
    frontPic: true
  }

  togglePic = () => {
    this.setState(preivousState => {
      return {
        frontPic: !preivousState.frontPic
      }
    })
  }

  render() {
    return (
      <Card onClick={this.togglePic}>
        <div>
          <div className="image">
            <img alt={this.props.pokemon.name} src={
              this.state.frontPic ? this.props.pokemon.sprites.front : this.props.pokemon.sprites.back
            } />
          </div>
          <div className="content">
            <div className="header">{this.props.pokemon.name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {this.props.pokemon.hp}
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
