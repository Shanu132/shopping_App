import React,{useState} from 'react'
import '../App.css'

function Buttoncontainer({colorfilter,datafilter,reset,rawdata}) {
  const[flag,setFlag]=useState(false)
  const[theme,setTheme]=useState(false)
  const[color,setColor]=useState(false)
  
  return (
    <>
    <div>
        <div className='cat ' id='hamburger' onClick={()=>setFlag(!flag)}><i className="fa-solid fa-bars"></i></div>
        {
          flag && 
          (
            <div>
            
            <div className="cat btn" onClick={()=>setTheme(!theme)}>Theme</div>
            {
              theme &&
              (
                <>
                <div className="btn" onClick={()=>reset(rawdata)} >All</div>
                <div className="btn" onClick={()=>datafilter('Festive')} >Festive</div>
                <div className="btn" onClick={()=>datafilter('Casual')} >Casual</div>
                </>
              )
            }
            <div className="cat btn" onClick={()=>setColor(!color)}>Color</div>
            {
              color &&
              (
                <>
                <div className="btn" onClick={()=>colorfilter('Blue')} >Blue</div>
                <div className="btn" onClick={()=>colorfilter('Grey')} >Grey</div>
                <div className="btn" onClick={()=>colorfilter('Green')} >Green</div>
                <div className="btn" onClick={()=>colorfilter('Pink')} >Pink</div>
                <div className="btn" onClick={()=>colorfilter('Yellow')} >Yellow</div>
                <div className="btn" onClick={()=>colorfilter('Orange')} >Orange</div>
                </>
              )
            }
            

           </div>

          )
          
        }
        
    </div>
    </>
  )
}

export default Buttoncontainer