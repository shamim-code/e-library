import React from 'react'
import Slider from './Slider'
import Books from './Books'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react';
import { FaFacebook, FaTwitter } from "react-icons/fa";
import Book from './Book';


export default function Home() {

  const [authorImg, setCover] = useState([]);
  const [authorName, setName] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(()=>{
    fetch("http://localhost/Eapi/topAuthorImg.php")
    .then((res)=>{
      return res.json();
    })
    .then((data)=>{
      setCover(data);
    })
  },[])


  useEffect(()=>{
    fetch("http://localhost/Eapi/topAuthor.php")
    .then((res)=>{
      return res.json();
    })
    .then((data)=>{
      setName(data);
    })
  },[])

  console.log(authorImg);
  console.log(authorName);


  return (
    <div >

          <h3 style={{textAlign:"center", padding:"10px, 0",marginTop:"50px", textDecoration:"underline"}}>Top Searching Books</h3>
          <div className='slider'>
            <Slider/>
          </div>

          <div className='author-section'>
            <h3>Famous Authors:</h3>
            <marquee direction="left">
              
              <div className='authors'>
                <div>
                  <h5>{authorName[0]?.[0]}</h5>
                  <img src={authorImg[0]?.[0]}></img>
                </div>

                <div>
                  <h5>{authorName[1]?.[0]}</h5>
                  <img src={authorImg[1]?.[0]}></img>
                </div>

                <div>
                  <h5>{authorName[2]?.[0]}</h5>
                  <img src={authorImg[2]?.[0]}></img>
                </div>

                <div>
                  <h5>{authorName[3]?.[0]}</h5>
                  <img src={authorImg[3]?.[0]}></img>
                </div>
              </div>
            </marquee>
          </div>
          <hr></hr>


          <h5 style={{marginLeft: "5px",display:"inline"}}>Books:</h5>
          <div class="d-flex" style={{display:"inline"}}>
              <input class="form-control me-2" style={{display:"inline",width:"400px", marginLeft:"35%"}} type="search" placeholder="Search" aria-label="Search" onChange={(e)=>setQuery(e.target.value)}></input>
            </div>

          <div className='books'>
            <div className="item"><Books q={query} /></div>
          </div>


          <div className='footer'>
              <div className='f-logo' >
                E-library @ 2023
              </div>
              <div className='info'>
                <h5>Information:</h5>
                <Link to="/faq" className='f-link'>FAQs</Link>
                <Link to="/special" className='f-link'>Special Offers</Link>
              </div>
              <div className='follow'>
                <h5>Follow us:</h5>
                <Link to="https://www.facebook.com/zuck" className='ib'>< FaFacebook className='fb' /></Link>
                <Link to="https://twitter.com/elonmusk" className='ib'>< FaTwitter className='twt'/></Link>
              </div>
          </div>
    </div>
  )
}
