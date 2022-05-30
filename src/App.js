import React,{useState} from 'react';
import './App.css';
import { Routes,Route } from 'react-router-dom';
import Products from './components/Products';
import Loginpage from './components/Loginpage';
import Invalid from './components/Invalid';
import Cart from './components/Cart';
import Imagecontainer from './components/Imagecontainer';

export  const Addcontext= React.createContext()

function App() {
  const [item, setItem] = useState([]);

  const handelcart=(cartitem)=>{
    setItem([cartitem,...item])
    console.log(item)
  }
  const removecarthandler=(removeitem)=>{
    const filterdata=item.filter(el=>el.id_product!==removeitem.id_product)
    setItem(filterdata)
  }

  return (
    <Addcontext.Provider value={{items:item, addtocart:handelcart, removetocart:removecarthandler}}>
    
    <div className="App">
      
      <Routes>
        <Route path='/' element={<Loginpage />}/>
        <Route path='home' element={<Products />}/>
        <Route path='cart' element={<Cart/>}/> 
        <Route path='img' element={<Imagecontainer/>}/>       
        <Route path='*' element={<Invalid />}/>
      </Routes>
    </div>
    </Addcontext.Provider>
  );
}

export default App
