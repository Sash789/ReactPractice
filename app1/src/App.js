import './App.css';

import React,{useState} from "react";//funcion para poder modificar componentes

function App() {
  const[resultado, setResultado]= useState(null);// []


  const elemento = <h1 className="centrar-titulo">Hola alumnos</h1>
  const elemento2 = <h2>{suma (7,5)}</h2>

  const botonPulsado =()=>{//Se usa una funcion anonima, no necesariamente
    const result=suma(7,5);
    setResultado(result);
  };

  return <div>
    <button onClick= {botonPulsado} style={{marginTop: "10px", marginLeft:"10px"}}>Pulsame</button>
    <div>{elemento}</div>
    <div>{elemento2}</div>
    <div>{resultado!=null&& <h2>El resultado es: {resultado}</h2>}</div>{/* resultado!=null&&  SI resultado no es nulo devuelve todo a la derecha de &&  */}
    </div>
  //return <><div>{elemento}</div><div>{elemento2}</div></>
}


export default App;

function suma(a,b){
  return a+b;
}