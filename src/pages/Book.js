import React from 'react'
import { Link } from 'react-router-dom';

export default function Book(props) {
    const book =props.book;
    
     let title = book?.[1];
     let image = book?.[6];
     let price = book?.[4];
     console.log(title);
    console.log(image);
    console.log(price);

    console.log(book);
  
    return (

    <div className='cardStyle'>
        {book &&
        <div class="card lg col-4" style={{width: "18rem"}}>
            {book && image && <img src={`${image}`} class="card-img-top" className='imgStyle' alt="..."></img>}
            <div class="card-body">
                {book && title && <h5 class="card-title">{title}</h5>}
                {book && price && <p class="card-text">{price}৳</p>}
                {book && price && <Link to={title} class="btn btn-warning">Collect</Link>}
            </div>
        </div> }
        
    </div>
    
  )
}



      
