import { useState, useEffect } from 'react';
import '../App.scss';
import api from "../services/api";
/* import CharacterList from "./CharacterList"; */


const App = () => {
  //ESTADO
  const [character, setCharacter] = useState([]);

  //DATA FROM API
  useEffect(() => {
    //console.log("me monto")
    api.getDataFromAPi().then(data => {
      //console.log(data);
      setCharacter(data);
    });
  }, []);



  return (
    <div className="App">
      <h1>Funciona ._.</h1>
      {/*  <CharacterList character={character} /> */}
    </div>
  );
}

export default App;
