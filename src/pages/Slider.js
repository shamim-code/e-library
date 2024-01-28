import React from 'react';
import { useState, useEffect } from 'react';


export default function Slider() {

const [bookCover, setCover] = useState([]);

  useEffect(()=>{
    fetch("http://localhost/Eapi/secondTop.php")
    .then((res)=>{
      return res.json();
    })
    .then((data)=>{
      setCover(data);
    })
  },[])

  console.log(bookCover);
  
  return (
            <div id="carouselExampleFade" class="carousel slide carousel-fade" data-bs-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active">
                <img src={bookCover[0]?.[0]} class="d-block w-100" className='slide-img' alt="..."></img>
                </div>
                <div class="carousel-item">
                <img src={bookCover[1]?.[0]} class="d-block w-100" className='slide-img' alt="..."></img>
                </div>
                <div class="carousel-item">
                <img src={bookCover[2]?.[0]} class="d-block w-100" className='slide-img' alt="..."></img>
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
  )
}
