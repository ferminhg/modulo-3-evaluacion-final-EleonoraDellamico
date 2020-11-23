import { useState, useEffect } from 'react';
import '../App.scss';
import api from "../services/api";
import CharacterList from "./CharacterList";
import Filters from "./Filters";


const App = () => {
  //ESTADO ARRAY
  const [character, setCharacter] = useState([]);
  //ESTADO INPUT
  const [textInput, setTextInput] = useState("");

  //DATA FROM API
  useEffect(() => {
    //console.log("me monto")
    api.getDataFromApi().then(data => {
      //console.log(data);
      setCharacter(data);
    });
  }, []);

  //EVENTO INPUT PASA POR LIFTING
  const handleFilter = (ev) => {
    setTextInput(ev);
    console.log("Estoy Aqui");
  };



  return (
    <div className="App">
      <h1>Funciona ._.</h1>
      <Filters handleFilter={handleFilter} />
      <CharacterList character={character} />
    </div>
  );
}

export default App;
