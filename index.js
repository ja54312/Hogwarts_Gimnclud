import React from "react";
import ReactDOM from "react-dom";
import './style.css';

export default function App(){
  return(
    <>
      <h1>Hogwarts Gimnclud</h1>
    </>
  )
}

const entryPointMalta = document.getElementById("root");
ReactDOM.render(<App/>, entryPointMalta);