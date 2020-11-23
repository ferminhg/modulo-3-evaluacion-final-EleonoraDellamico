import CharacterCard from "./CharacterCard";


const CharacterList = (props) => {
  const character = props.character.map(card => (
    <li key="id">
      <CharacterCard img={card.image} name={card.name} types={card.species} />
    </li>
  ));
  return <ul>{character} {props.handleFilter}</ul>;
};




export default CharacterList;