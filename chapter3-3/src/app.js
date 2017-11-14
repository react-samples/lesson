import React from 'react';
import ReactDOM from 'react-dom';
import styles from "./css/app.css";

class App extends React.Component {
  render() {
    return (
      <div id="main">
        <h1 className="title">{"Hello World"}</h1>
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById("app")  
)
