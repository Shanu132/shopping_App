import React,{useContext} from 'react'
import {Addcontext} from '../App'

function Imagecontainer({maindata}) {

  const {items,addtocart,removetocart}=useContext(Addcontext)

  return (
    <>
    <div className="product-container-inside">
          {maindata.map((el)=> ( 
            <div key={el.id_product} className="card">
              <div>
                <img src={el.image} alt="#"/>
              </div>
              <div className="card-description">
                <h6>{`Price: ${el.selling_price}`}</h6>
                <h6>{`Category: ${el.category}`}</h6>
                {
                  items.includes(el) ? (
                    <button className="remove_btn" onClick={()=>removetocart(el)}>REMOVE</button>
                  ):(
                    <button className="add_btn" onClick={()=>addtocart(el)}>ADD TO CART</button>
                  )                  
                }
                
              </div>
            </div>
          ))}
         </div>

    </>
  )
}

export default Imagecontainer