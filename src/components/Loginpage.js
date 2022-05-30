import React,{useState,useRef,useEffect} from 'react'
import './Login.css';
import {Navigate} from 'react-router-dom'

export const UserContext=React.createContext()


function Loginpage() {
    const refvar=useRef()
    const[details , setDetails]=useState({username:'', password:''})
    const[flag,setFlag]=useState(false)

    useEffect(()=>{
        refvar.current.focus()
    },[])

    const handler=(e)=>{
        e.preventDefault();
        if(details.username ==='foo'&& details.password ==='bar' ){
            setFlag(true)
            localStorage.setItem("token",false)
        }
        else{
            alert('wrong credentials')
        }
        setDetails({username:'', password:''})
    }
  return (
      <>
      {flag ?(<Navigate to="/home"/>)
      :
      <div className="login">
        <form onSubmit={handler}>
            <label>User name</label>
            <br/>
            <input type='text' ref={refvar} value={details.username} placeholder='    foo' 
            onChange={e=>setDetails({...details, username: e.target.value})} />
            <br/>
            <label>password</label>
            <br/>
            <input type='Password' value={details.password} placeholder='    bar' 
            onChange={e=>setDetails({...details, password: e.target.value})} />
            <br/>
            <input id='btn' type='submit' value='Submit'/>
        </form>

      </div>
      }
      </>
    
  )
}

export default Loginpage