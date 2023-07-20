import './App.css';
import NavBar from './Components/Navbar/Navbar';
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer"


function App() {
  return (
    <div className="App">
      <NavBar/>
      <ItemListContainer greting={"BIENVENIDOS"}/>
    </div>
  );
}

export default App;
