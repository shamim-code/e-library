import React, { useState, useEffect } from 'react'
import Poems from './Poems';

export default function Poem(props) {

  const [poems,setPoem] = useState([]);

    useEffect(()=>{
      fetch("http://localhost/Eapi/poem.php")
      .then((res)=>{
        return res.json();
      })
      .then((data)=>{
        setPoem(data);
      })
    },[])

  return (

    <div>
      <h4 style={{margin:"10px",textAlign:"center",textDecoration:"underline"}}>Our Poem Collection:</h4>
      {
        poems.map((book, index) => (<Poems book={book} />))
      }

      <div className='books'>
        <div className='item'> <Poems /></div>
      </div>
      
    </div>
    
  )
}
