import '../App.scss';
import api from "../services/api";


api.getDataFromAPi().then(data => {
  console.log(data);
});





const App = () => {
  return (
    <div className="App">
      <h1>Funciona</h1>
    </div>
  );
}

export default App;
