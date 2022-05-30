import React, { useState, useEffect } from "react";
import "../App.css";
import axios from "axios";
import Search from "./Search";
import Buttoncontainer from "./Buttoncontainer";
import Imagecontainer from "./Imagecontainer";
import Navbar from "./Navbar";
import Footer from "./Footer";



const Products = () => {
  const [data, setData] = useState([]);
  const [datas, setDatas] = useState([]);
  const[name, setName]=useState('');
  

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
          
  }, []);

  

  const handleinput=(e)=>{
    setName(e)
    const filterdata= data.filter((el,id)=>{
      return el.description.toLowerCase().includes(name.toLowerCase())
    })
    setDatas(filterdata)
  }
  const reset1=(rawdatafromchild)=>{
    setDatas(rawdatafromchild)
  }
  const filterData = (occationfromchild)=>{
    const updateData= data.filter(el=>el.occasion===occationfromchild);
    setDatas(updateData)
  }
  const filtercolor = (colorfromchild)=>{
    const updateData= data.filter(el=>el.color===colorfromchild);
    setDatas(updateData)
  }
  
  return (
    <>
    <Navbar/>
    <Search nameset={handleinput}  names={name} />
    <div className="main-container">
      <div className="btn-container">
        <Buttoncontainer colorfilter={filtercolor} datafilter={filterData} reset={reset1} rawdata={data}/>
      </div>
      <div>
        <div className="products-container">
          <Imagecontainer maindata={datas} />
        </div>
      </div>
    </div>
    <Footer/>
    </>  
  );
};

export default Products;
