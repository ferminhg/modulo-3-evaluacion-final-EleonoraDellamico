import CharacterCard from "./CharacterCard";
import newGifError from "../images/newGifError.gif";

const CharacterList = (props) => {
  const character = props.character.map(card => (
    <li key={card.id}>
      <CharacterCard img={card.image} name={card.name} species={card.species} id={card.id} />
    </li>

  ));
  return props.character.length > 0 ? (<ul>{character} {props.handleFilter}</ul>) : <div className="gif"><p>Error we can't find the character! </p>  <img className="gif_error" alt="gif rick and morty" src={newGifError}/></div>;
};


export default CharacterList;