import './App.css';
import {Routes, Route} from "react-router-dom"
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import About from './Components/About';
import Products from './Components/Products';
import Checkout from './Components/Checkout';
import Footer from './Components/Footer';
import SingleProduct from './Components/SingleProduct';
import Cart from './Components/Cart';
import Sidebar from './Components/Sidebar';


function App() {
  return (
    <div className="app">
      <Navbar />
      <Sidebar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element ={<About />} />
        <Route path='/products' element ={<Products />} />
        <Route path='/checkout' element ={<Checkout />} />
        <Route path = '/products/:id' element={<SingleProduct />} />
        <Route path = '/cart' element={<Cart />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
