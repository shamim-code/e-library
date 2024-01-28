import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Books from './Books';


export default function Navs() {

  const navigate = useNavigate();

  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-warning">
        <div class="container-fluid">
          <Link to="/" class="navbar-brand" style={{color: "white", textDecoration: 'none', fontSize: "30px"}}>E-Library</Link>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <Link to="/about" class="nav-link active">About</Link>
              </li>
              <li class="nav-item">
                <Link to="/contact" class="nav-link active">Contact</Link>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link active dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Categories
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <Link to="/novel" class="dropdown-item">Novel</Link>
                  <Link to="/poem" class="dropdown-item">Poem</Link>
                  <Link to="/science" class="dropdown-item">Science Fiction</Link>
                </ul>
              </li>
              <li class="nav-item">
                  <Link to="/createaccount" class="nav-link active">Create Account</Link>
              </li>
              <li class="nav-item">
              <Link to="/login" class="nav-link active">Login</Link>
              </li>
            </ul>

              
                <Link to="/login" style={{marginInlineStart:"10px",marginBlock:"10px"}}  class="btn btn-secondary btn-sm">Dashboard</Link>
              
          </div>
        </div>
      </nav>


    </div>
  )
}
