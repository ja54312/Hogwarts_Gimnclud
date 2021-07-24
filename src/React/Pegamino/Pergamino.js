import React from "react";
import './Pergamino.css';
import Pergamino1 from '../../assets/pergamino.png';

export default function Pergamino(){
    return(
      <>
      <div className = "container-title-clases">
        <h2>Tabla de Asignaturas</h2>
      </div>
      <div className = "container-info-clases">
          <img src = {Pergamino1} className="image-pergamino"></img>
          <table className = "table-info-clases">
            <td>
                <tr><h3>Profesores</h3></tr>
                <tr>Lía Malfoy</tr>
                <br></br>
                <tr>Ximena Larsson</tr><br></br>
                <tr>Jin Snape</tr><br></br>
                <tr>4</tr><br></br>
                <tr>5</tr><br></br>
                <tr>5</tr>
            </td>
            <td>
                <tr><h3>Asignatura</h3></tr>
                <tr>Herbologia</tr><br></br>
                <tr>Defensa contra <br></br>las artes oscuras</tr>
                <tr>Pociones</tr><br></br>
                <tr>o</tr><br></br>
                <tr>u</tr><br></br>
                <tr>b</tr>
            </td>
          </table>
      </div>
       
      </>
    )
  }