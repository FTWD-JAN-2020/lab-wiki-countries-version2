import React, { Component } from 'react'

export default class RandomComponent extends Component {
  render() {
    console.log(this.props)
    console.log(this.props.match)
    console.log(this.props.match.params)
    return (
      <div>
        Hello Michael
      </div>
    )
  }
}
