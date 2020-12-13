import { useState, useEffect } from 'react';
import { Route, Switch } from "react-router-dom";
import '../App.scss';
import api from "../services/api";
import CharacterList from "./CharacterList";
import Filters from "./Filters";
import CharacterDetail from "./CharacterDetail";
import logo from "../images/LogoRickMorty.png"; 
import Loading from "./Loading";
import gitTitle from "../images/gitTitle.gif";






const App = () => {
  //ESTADO ARRAY
  const [character, setCharacter] = useState([]);
  //ESTADO INPUT
  const [textInput, setTextInput] = useState("");
  //ESTADo LOADING
  const[isLoading, setIsLoading] = useState("true");

  //DATA FROM API
  useEffect(() => {
    setIsLoading(true);
    //console.log("me monto")
    api.getDataFromApi().then(data => {
      //console.log(data);
      setCharacter(data);
      setIsLoading(false);
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
       {isLoading === true ? <Loading/> : null}
      <Switch>
        <Route exact path="/">
          <div className="home__container--img">
        <img className="img_home"alt="Ricky and Morty" src={gitTitle} /> 
        </div>
          <Filters handleFilter={handleFilter} textInput={textInput} />
          <CharacterList character={filtered}/>
        </Route>
        <Route path="/character-detail/:characterId" render={renderDetail} />
      </Switch>

    </div>
  );
}

export default App;
