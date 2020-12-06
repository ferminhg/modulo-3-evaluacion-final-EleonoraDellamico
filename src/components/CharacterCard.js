import React from "react";
import { Link } from "react-router-dom";



const CharacterCard = (props) => {
  //console.log("yo soy card", props);
  return <Link title="Details character" to={`/character-detail/${props.id}`}>
  <section className="article">
    <img className="characterCard_photo" src={props.img} alt="Main character" />
    <h3 className="character_title link">{props.name}</h3>
    <h4 className="character_title">{props.species}</h4>
  </section>
  </Link>
} 
export default CharacterCard;  
