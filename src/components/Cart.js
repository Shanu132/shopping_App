import React,{useContext, useEffect, useState} from 'react'
import Navbar from './Navbar'
import {Addcontext} from '../App'
import Footer from './Footer'
import './Cart.css'

function Cart() {

const[total,setTotal]=useState()  
const {items,addtocart,removetocart} = useContext(Addcontext)
useEffect(()=>{
  setTotal(items.reduce((acc,curr)=>acc+Number(curr.selling_price),0))
},[items])

  return (
    <div>
      <Navbar/>
      <div>
        <div id='bill'>
          <span><h1>Total Amount : {total}</h1></span>
          <span><h1>Quantity : {items.length}</h1></span>
          <button>Place Order</button>
        </div>
      {
        items.map((el,id)=>{
          return(
            <div id='box' key={id} >
              <span>
              <div>
                <img src={el.image} alt="#"/>
              </div>
              <div id='buttonbox'>
                
                <button className="add_btn" onClick={()=>addtocart(el)}>+</button>
                <button ><h2>{`Price: ${el.selling_price}`}</h2></button>
                <button className="remove_btn" onClick={()=>removetocart(el)}>-</button>
              </div>
              </span>
            </div>
            
          )

        })
      }
      </div>
      
      <Footer/>
  </div>
  )
}

export default Cart