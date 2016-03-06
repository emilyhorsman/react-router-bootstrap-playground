import React, { Component } from 'react'
import { render } from 'react-dom'

import './styles.scss'

class App extends Component {
  render() {
    return (
      <div>
        <p>Hi</p>
      </div>
    )
  }
}

render(<App />, document.getElementById('app'))
