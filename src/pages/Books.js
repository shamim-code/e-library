import React, { useEffect, useState } from 'react'
import Book from './Book'

export default function Books(props) {
    
  const [books, setBookData] = useState([]);
  let query = props.q;
  console.log(props);

  useEffect(()=>{
    fetch("http://localhost/Eapi/getBookData.php")
    .then((res)=>{
      return res.json();
    })
    .then((data)=>{
      setBookData(data);
    })
  },[])
    
  return (
    <div>
      {
         books.filter((book)=> book?.[1].includes(query)).map((book, index) => (<Book book={book} />))
        
      }
    </div>
  )
}
