import { Link } from "react-router-dom";

const CharacterDetail = (props) => {
  console.log(props.origin.name);
  return <form>
    <Link title="character" to="/">
      <button className="detailVolver" title="volver">Volver</button>
    </Link>
    <div className="container">
      <div className="divDetails">
        <img className="imgDetail" src={props.image} alt="Main character" />
      </div>
      <div className="divInfo">
        <h3 className="character_title detailCard">Name: {props.name}</h3>
        <h3 className="character_title detailCard">Species: {props.species}</h3>
        <h3 className="character_title detailCard">Origin: {props.origin.name}</h3>
        <h3 className="character_title detailCard">Episode: {props.episode.length}</h3>
        <h3 className="character_title detailCard">Status: {props.status}</h3>
      </div>
    </div>
  </form>
}
export default CharacterDetail; 