
import React, { useState, useEffect } from 'react'
import Sciences from './Sciences';

export default function Science(props) {

      const [science,setScience] = useState([]);

      useEffect(()=>{
        fetch("http://localhost/Eapi/ScienceBook.php")
        .then((res)=>{
          return res.json();
        })
        .then((data)=>{
          setScience(data);
        })
      },[])

  return (

    <div>
      <h4 style={{margin:"10px",textAlign:"center",textDecoration:"underline"}}>Our Science Fiction Collection:</h4>
      {
        science.map((book, index) => (<Sciences book={book} />))
      }

      <div className='books'>
        <div className='item'> <Sciences /></div>
      </div>
      
    </div>
    
  )
}
