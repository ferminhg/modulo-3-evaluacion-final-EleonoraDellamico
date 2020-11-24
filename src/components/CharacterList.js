import CharacterCard from "./CharacterCard";

const CharacterList = (props) => {
  const character = props.character.map(card => (
    <li key={card.id}>
      <CharacterCard img={card.image} name={card.name} species={card.species} id={card.id} />
    </li>

  ));
  return <ul>{character} {props.handleFilter}</ul>;
};

export default CharacterList;