import './App.css';
import ItemListContainer from './components/Main/ItemListContainer';
import ItemDetailContainer from './components/Main/ItemDetailContainer';
import NavbarComp from './components/Header/NavbarComp';
import Cart from './components/Cart/Cart';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Formu from './components/Form/Form';
import Provider from './context/CartContext';

function App() {

  return (
    <Provider>
      <div className="App">
        <BrowserRouter>  
          <NavbarComp />
          <Routes>
              <Route path='/' element={<ItemListContainer />}/>
              <Route path='/category/:categoryName' element={<ItemListContainer />}
              />
              <Route path='/item/:id' element={<ItemDetailContainer />}/>
              <Route path='/cart' element={<Cart />}/>
              <Route path='/checkout' element={<Formu />}/>
          </Routes>
        </BrowserRouter>
      </div>
    </Provider>
  )
};

export default App;
