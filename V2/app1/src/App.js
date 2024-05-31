import './miCss.css';
import imgSisebuto from "./assets/reyes/rey_sisebuto.png"
import imgLeogivildo from "./assets/reyes/rey_leogivildo.png"
import imgAtanagildo from "./assets/reyes/rey_atanagildo.png"

function App() {
  let reyes=[{nombre:"Sisebuto", imagen: imgSisebuto},{nombre:"Leogivildo", imagen: imgLeogivildo},{nombre:"Atanagildo", imagen: imgAtanagildo}]
  return (
   <div className="Reyes">
    <div className="FichaRey">
      <img src={reyes[0].imagen}></img>
      <h1>{reyes[0].nombre}</h1>
    </div>
    <div className="FichaRey">
      <img src={reyes[1].imagen}></img>
      <h1>{reyes[1].nombre}</h1>
    </div>
    <div className="FichaRey">
      <img src={reyes[2].imagen}></img>
      <h1>{reyes[2].nombre}</h1>
    </div>
   </div>
   
  );
}

export default App;
