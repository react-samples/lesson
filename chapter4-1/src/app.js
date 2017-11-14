import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      count: 0
    }
    this.onClickButton = this.onClickButton.bind(this)
  }
  onClickButton(){
    let { count } = this.state
    this.setState({count: count + 1})
  }
  render() {
    return (
      <div>
        <h1>{`クリックした回数: ${this.state.count}`}</h1>
        <button onClick={this.onClickButton}>押す</button>
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById("app")  
)
