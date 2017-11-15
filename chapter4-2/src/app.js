import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      input: "",
      todos:[],
      time: new Date(),
      intervalId: ""
    }
    this.addToDo = this.addToDo.bind(this)
    this.tick = this.tick.bind(this)
  }
  tick(){
    let { time } = this.state
    time.setSeconds(time.getSeconds() + 1)
    this.setState({time: time})
  }
  componentDidMount(){
    let id = setInterval(this.tick, 1000)
    this.setState({intervalId: id})
  }

  componentWillUnmount(){
    clearInterval(this.state.intervalId)
  }
  addToDo(){
    let { todos, input } = this.state
    todos = todos.concat(input)
    this.setState({todos:todos, input:""})
  }
  render() {
    return (
      <div>
        <h1>新しいタスク</h1>
        <input type="text" onChange={e => this.setState({input: e.target.value})} value={this.state.input}/>
        <button onClick={this.addToDo}>追加</button>
        <h2>現在の時間</h2>
        <span>今の時間 {this.state.time.toLocaleTimeString()}</span>
        <h2>ToDo:</h2>
        <ul>
        {this.state.todos.map((todo) => {
          return <li key={todo}>{todo}</li>
        })}
        </ul>
      </div>
    )
  }

}
ReactDOM.render(
  <App />,
  document.getElementById("app")
)
