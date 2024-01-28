import React from 'react'
import Novels from './Novels';
import { useState, useEffect } from 'react'

export default function Novel() {

  const [novel,setNovel] = useState([]);

    useEffect(()=>{
      fetch("http://localhost/Eapi/getNovel.php")
      .then((res)=>{
        return res.json();
      })
      .then((data)=>{
        setNovel(data);
      })
    },[])

    
  return (
    <div>
      <h4 style={{margin:"10px",textAlign:"center",textDecoration:"underline"}}>Our Novel Collection:</h4>
      {
        novel.map((book, index) => (<Novels book={book} />))
      }

      <div className='books'>
        <div className='item'> <Novels /></div>
      </div>
      
    </div>
  )
}
