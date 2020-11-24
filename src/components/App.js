import { useState, useEffect } from 'react';
import { Route, Switch } from "react-router-dom";
import '../App.scss';
import api from "../services/api";
import CharacterList from "./CharacterList";
import Filters from "./Filters";
import CharacterDetail from "./CharacterDetail";




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
  }

  // EVENTO FILTERS

  const filtered = character.filter((character) => {
    return character.name.toUpperCase().includes(textInput.toUpperCase());
  });

  //EVENTO SWITCH

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
      //console.log(foundCharacter);
      return <CharacterDetail
        image={foundCharacter.image}
        name={foundCharacter.name}
        species={foundCharacter.species}
        origin={foundCharacter.origin}
        episode={foundCharacter.episode}
        status={foundCharacter.status} />;
    } else {
      return <p>character no encotrado</p>
    }

  };




  return (
    <div className="App">
      <Filters handleFilter={handleFilter} />
      <Switch>
        <Route exact path="/"><CharacterList character={filtered} />
        </Route>
        <Route path="/character-detail/:characterId" render={renderDetail} />
      </Switch>

    </div>
  );
}

export default App;
