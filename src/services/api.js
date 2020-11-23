const getDataFromApi = () => {
  //console.log("obteniendo datos...");
  return fetch("https://raw.githubusercontent.com/Adalab/rick-y-morty/master/data/rick-y-morty.json")
    .then(response => response.json())
    .then(data => {
      //console.log(data);
      //console.log("ya tengo los datos");
      return data.results;

    });
};

export default { getDataFromApi: getDataFromApi }