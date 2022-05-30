import React,{useContext} from 'react'
import './Navbar.css'
import{NavLink} from 'react-router-dom'
import {Addcontext} from '../App'
import Cart from './Cart'

function Navbar() {

  const {items,handelcart} = useContext(Addcontext)

  return (
    <>
    <div className='upper-navbar'>
      <span>Wish List</span>
      <span>Shopping Cart</span>
      <span>Checkout</span>
    </div>

    <div className='navbar'>
      <div>
         <span className='block' id='mainname'><NavLink to="/home"><h1>DressKart</h1></NavLink></span>
      </div>
      <div id='nav-remove'>
          <span className='block'>Latest</span>
          <span className='block'>Specials</span>
          <span className='block'>Contact</span>
          <span className='block'><i className="fa-solid fa-phone-volume"></i> 500-100-289</span>
      </div>
      <div>
        <span className='block' id='logout'><NavLink to="/"><i className="fa-solid fa-arrow-right-from-bracket"></i>Logout</NavLink></span>
        <span className='block' id='cart'><NavLink to="/cart"><i className="fa-solid fa-cart-plus"></i><span id='cartcount'>{items.length}</span></NavLink></span>
      </div>
    
    </div>
    </>
  )
}

export default Navbar