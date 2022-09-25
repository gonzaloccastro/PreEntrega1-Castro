import './App.css';
import ItemListContainer from './components/ItemListContainer';
import NavbarComp from './components/NavbarComp';

function App() {
  return (
    <div className="App">
      <NavbarComp />
      <ItemListContainer greeting='Bienvenido a Arbol-App' />
    </div>
  );
}

export default App;
