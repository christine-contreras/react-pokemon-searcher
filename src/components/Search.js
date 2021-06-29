import React, { Component } from 'react'

export class Search extends Component {
  render() {
    return (
      <div className="ui search">
      <div className="ui icon input">
        <input className="prompt" type="text" name="search" placeholder="pickachu" onChange={this.props.handleInputChange}/>
        <i className="search icon" />
      </div>
    </div>
    )
  }
}

export default Search
