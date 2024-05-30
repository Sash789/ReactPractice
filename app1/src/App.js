import './App.css';

function App() {
  const elemento = <h1 className="centrar-titulo">Hola alumnos</h1>
  const elemento2 = suma (7,5);
  return <><div>{elemento}</div><div>{elemento2}</div></>
  //return <div><div>{elemento}</div><div>{elemento2}</div></div>
}

export default App;

function suma(a,b){
  return a+b;
}