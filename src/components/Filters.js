import React from "react";
const Filters = (props) => {
  const handleFilter = (ev) => {
    //console.log(ev.target.value);
    props.handleFilter(ev.target.value);
  };
  return (
    <form>
      <label htmlFor="name">Buscar por nombre</label>
      <input type="text" id="name" onChange={handleFilter} />
    </form>
  );

};
export default Filters;




