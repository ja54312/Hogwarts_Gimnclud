import React from "react";
import ReactDOM from "react-dom";
import './src/styles/home.css';
import Pergamino from "./src/React/Pegamino/Pergamino";
import Version from "./src/React/Version/Version";

export default function App(){
  return(
    <>
      <div className = "container-titulo-principal">
      <h1 className="titulo-principal">Hogwarts Gimnclud</h1>
      </div>
      <hr/>
      <Pergamino/>
      <Version/>
    </>
  )
}

const entryPointMalta = document.getElementById("root");
ReactDOM.render(<App/>, entryPointMalta);