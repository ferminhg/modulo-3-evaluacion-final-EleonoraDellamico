import CharacterCard from "./CharacterCard";

const CharacterList = (props) => {
  const character = props.character.map(card => (
    <li key={card.id}>
      <CharacterCard img={card.image} name={card.name} species={card.species} id={card.id} />
    </li>

  ));
  return props.character.length > 0 ? (<ul>{character} {props.handleFilter}</ul>) : <p>No hay ningún personaje que coincida con la palabra {props.setTextInput}</p>;
};


export default CharacterList;