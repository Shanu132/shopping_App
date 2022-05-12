import React, { useState, useEffect } from "react";
import "../App.css";
import axios from "axios";


const Products = () => {
  
  const [data, setData] = useState([]);
  const [datas, setDatas] = useState([]);

  useEffect(() => {
    axios({
      method: "GET",
      url: "https://pim.wforwoman.com/pim/pimresponse.php/?service=category&store=1&url_key=top-wear-kurtas&page=1&count=20&sort_by=&sort_dir=desc&filter=",
    })
      .then((res) => {
        console.log(res.data.result.products);
        setData(res.data.result.products);
        setDatas(res.data.result.products);
      })
      .catch((e) => console.log(e))    
  }, []);

  
  const filterData = (text)=>{
    const updateData= data.filter(el=>el.occasion===text);
    setDatas(updateData)
  }
  const filtercolor = (text)=>{
    const updateData= data.filter(el=>el.color===text);
    setDatas(updateData)
  }
  
  return (
    <div className="main-container">
      <div className="btn-container">
        <button className="cat" onClick={()=>setDatas(data)} >Home</button>
        <div className="cat">Select Category</div>
        <br/>Theme<hr/>
        <button className="btn" onClick={()=>filterData('Festive')} >Festive</button>
        <button className="btn" onClick={()=>filterData('Casual')} >Casual</button>
        <br/>Color<hr/>
        <button className="btn" onClick={()=>filtercolor('Blue')} >Blue</button>
        <button className="btn" onClick={()=>filtercolor('Grey')} >Grey</button>
        <button className="btn" onClick={()=>filtercolor('Green')} >Green</button>
        <button className="btn" onClick={()=>filtercolor('Pink')} >Pink</button>
        <button className="btn" onClick={()=>filtercolor('Yellow')} >Yellow</button>
        <button className="btn" onClick={()=>filtercolor('Orange')} >Orange</button>
      </div>
      <div>
        <div className="products-container">
          <div className="product-container-inside">
          {datas.map((el)=> ( 
            <div key={el.id_product} className="card">
              <div>
                <img src={el.image} alt="#"/>
              </div>
              <div className="card-description">
                <h6>{`Price: ${el.selling_price}`}</h6>
                <h6>{`Category: ${el.category}`}</h6>
                <button className="add_btn">ADD TO CART</button>
              </div>
            </div>
          ))}
         </div>
        </div>
      </div>
    </div>

    
    
  );
};

export default Products;
