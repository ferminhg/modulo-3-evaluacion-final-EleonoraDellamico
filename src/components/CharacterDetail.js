//onClick={handleHome} meter evento en botton para volver atrás 

const CharacterDetail = (props) => {
  console.log(props.origin.name);
  return <article>
    <button title="volver">Volver</button>

    <img src={props.image} alt="Main character" />
    <h3>name: {props.name}</h3>
    <h4>species:{props.species}</h4>
    <h4>origin:{props.origin.name}</h4>
    <h4>episode:{props.episode.length}</h4>
    <h4>status:{props.status}</h4>
  </article>
}
export default CharacterDetail; 