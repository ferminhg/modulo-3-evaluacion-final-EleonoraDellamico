import { Link } from "react-router-dom";

const CharacterDetail = (props) => {
  console.log(props.origin.name);
  return <form>
    <div className="characterDetail_container">
      <div className=" characterDetail_containerImg">
        <img className="characterDetail_imgDetail" src={props.image} alt="Main character" />
        </div>
        <div className="characterDetail_containerInfo">
        <h3 className="characterDetail detailName">Name: {props.name}</h3>
        <h3 className="characterDetail detailSpieces">Species: {props.species}</h3>
        <h3 className="characterDetail detailOrigin">Origin: {props.origin.name}</h3>
        <h3 className="characterDetail detailEpisode">Episode: {props.episode.length}</h3>
        <h3 className="characterDetail detailSatuts">Status: {props.status}</h3>
        </div>
        <div className= "characterDetail_button">
        <Link  className="characterLink" title="character" to="/">
           <button className="characterDetail_ home" title="volver">Home</button>
          </Link>
          </div>
    
    </div>
  </form>
}
export default CharacterDetail; 