import React from "react";
const Filters = (props) => {
  const handleFilter = (ev) => {
    //console.log(ev.target.value);
    props.handleFilter(ev.target.value);
  };
  //FUNCION  PARA EL INTRO 
  const handleFormSubmit = (ev) => {
    ev.preventDefault();
  }
  return (
    <form className="form" onSubmit={handleFormSubmit}>
      <label className="character_title label" htmlFor="name">Buscar por nombre</label>
      <input value={props.textInput} type="text" id="name" onChange={handleFilter} />
    </form>
  );

};
export default Filters;




