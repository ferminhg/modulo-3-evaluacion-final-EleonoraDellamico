import React from "react";
import { Link } from "react-router-dom";

const CharacterCard = (props) => {
  console.log("yo soy card", props);
  return <article>
    <img src={props.img} alt="Main character" />
    <Link title="Details character" to={`/character-detail/${props.id}`}><h3>{props.name}</h3></Link>
    <h4>{props.species}</h4>


  </article>
}
export default CharacterCard;  
