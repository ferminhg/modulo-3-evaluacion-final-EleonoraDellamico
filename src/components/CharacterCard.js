import React from "react";
import { Link } from "react-router-dom";

const CharacterCard = (props) => {
  //console.log("yo soy card", props);
  return <section className="article">
    <img className="characterCard_photo" src={props.img} alt="Main character" />
    <Link title="Details character" to={`/character-detail/${props.id}`}><h3 className="character_title link">{props.name}</h3></Link>
    <h4 className="character_title">{props.species}</h4>
  </section>
}
export default CharacterCard;  
