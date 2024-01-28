import React from 'react';
import { Link } from 'react-router-dom';

export default function Poems(props) {
    const book = props.book;
    const title = book?.[1];
    console.log(book);
  return (
    <div className='cardStyle'>
        {book &&
        <div class="card lg col-4" style={{width: "18rem"}}>
            {book && book?.[6] && <img src={book?.[6]} class="card-img-top" className='imgStyle' alt="..."></img>}
            <div class="card-body">
                {book && book?.[1] && <h5 class="card-title">{book?.[1]}</h5>}
                {book && book?.[4] && <p class="card-text">{book?.[4]}</p>}
                {book && book.price && <Link to={title} class="btn btn-warning">Collect</Link>}
            </div>
        </div> }
    </div>
  )
}
