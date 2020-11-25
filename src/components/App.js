import { useState, useEffect } from 'react';
import { Route, Switch } from "react-router-dom";
import '../App.scss';
import api from "../services/api";
import CharacterList from "./CharacterList";
import Filters from "./Filters";
import CharacterDetail from "./CharacterDetail";
/* import logo from "../images/Logo_Rick_and_Morty"; */





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
  const handleFilter = textInput => {
    setTextInput(textInput);
  };


  // EVENTO FILTERS

  const filtered = character.filter((character) => {
    return character.name.toUpperCase().includes(textInput.toUpperCase());
  });



  //EVENTO SWITCH TARJETA DETALLES

  const renderDetail = props => {
    const routeCharacterId = parseInt(props.match.params.characterId);
    const foundCharacter = character.find((card) => {
      if (routeCharacterId === card.id) {
        return true;
      } else {
        return false;
      }
    });
    if (foundCharacter !== undefined) {
      console.log("soy FoundCharacter", foundCharacter);
      return <CharacterDetail
        image={foundCharacter.image}
        name={foundCharacter.name}
        species={foundCharacter.species}
        origin={foundCharacter.origin}
        episode={foundCharacter.episode}
        status={foundCharacter.status} />;
    }

  };




  return (
    <div className="App">
      {/*  <img alt="Ricky and Morty" src={logo} /> */}

      <Switch>
        <Route exact path="/">
          <Filters handleFilter={handleFilter} textInput={textInput} />
          <CharacterList character={filtered} />
        </Route>
        <Route path="/character-detail/:characterId" render={renderDetail} />
      </Switch>

    </div>
  );
}

export default App;
