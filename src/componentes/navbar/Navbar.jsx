import React from 'react'
import Cartwidge from './Cartwidge'

const Navbar = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-dark navbar-dark">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">Inicio</a>
          <a href="#" class="navbar-brand"> <Cartwidge/> </a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Seccion 1</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Seccion 2</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Seccion 3</a>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Seccion 4
                </a>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="#">1</a></li>
                  <li><a class="dropdown-item" href="#">2</a></li>
                  <li><a class="dropdown-item" href="#">3</a></li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar