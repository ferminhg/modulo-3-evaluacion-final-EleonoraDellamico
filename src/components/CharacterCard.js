const CharacterCard = (props) => {
  <article>
    <img src={props.url} alt="Main character" />
    <h3>{props.name}</h3>
    <h4>{props.species}</h4>
  </article>
}
export default CharacterCard;  