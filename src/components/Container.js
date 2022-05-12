import React from 'react'
import "../App.css"

function Container({data}) {
  return (
    <div>
        <div className="products-container">
        <div className="product-container-inside">
        {data.map((el)=> ( 
          <div key={el.id_product} className="card">
            <div><img src={el.image} alt="#"/></div>
            <div className="card-description">
               <h6>{el.name}</h6>
               <h6>{`Price: ${el.selling_price}`}</h6>
               <h6>{`Category: ${el.category}`}</h6>
               <button className="add_btn">ADD TO CART</button>
            </div>
          </div>
      ))}
        </div>
      </div>
    </div>
  )
}

export default Container