import React from "react";
import ReactDOM from "react-dom";
import './style.css';

class HelloMessage extends React.Component {
  render() {
    return <div>Holi {this.props.name}</div>;
  }
}

var mountNode = document.getElementById("root");
ReactDOM.render(mountNode);