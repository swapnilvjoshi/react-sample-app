import React, { ReactNode } from 'react'
import ReactDOM from 'react-dom'

class App extends React.PureComponent {
  state ={}
  render(): ReactNode {
    return (<h2>This is where react app will run</h2>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'))