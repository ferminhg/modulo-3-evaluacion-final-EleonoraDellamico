import React from "react";
import { Link } from "react-router-dom";


const CharacterCard = (props) => {
  return <article>
    <img src={props.img} alt="Main character" />
    <Link title="Details character" to={`/character-detail/${props.id}`}>
      <h3>{props.name}</h3>
    </Link>
    <h3>{props.species}</h3>


  </article>
}
export default CharacterCard;  
