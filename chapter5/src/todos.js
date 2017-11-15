import React from "react";
import ReactDOM from "react-dom"


export default class Todo extends React.Component {
  render(){
    const { todos } = this.props
    return(
        <ul>
        {todos.map((todo, i) =>{
          return(
            <li key={todo} onClick={e => this.props.removeToDo(i)}>{todo}</li>
          )
        })}
        </ul>
    )
  }
}
