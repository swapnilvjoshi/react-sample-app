import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.PureComponent {
  render() {
    return (<h2>This is where react app will run</h2>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'))