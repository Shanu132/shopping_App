import React from 'react'
import './Search.css'

function Search({names,nameset}) {
  return (
    <div className='select-tab'>
        
        <input className='input' placeholder='   Search Product...' type='text' value={names} onChange={e=>nameset(e.target.value)} />
        
    </div>
  )
}

export default Search