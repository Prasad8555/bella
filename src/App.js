import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/home';
import SpecificProduct from './components/specificProduct';
import './App.css';
import Cart from './components/Cart';
import Favorites from './components/Favorites';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path='/products/:id' element={<SpecificProduct/>} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/favorites' element={<Favorites/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
