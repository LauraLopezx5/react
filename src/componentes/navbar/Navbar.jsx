import React from 'react'
import Cartwidge from './Cartwidge'
import './navbar.css'

const Navbar = () => {
  return (
    <div>
      <nav className ="navbar navbar-expand-lg bg-dark navbar-dark">
        <div className ="container-fluid">
          <a className ="navbar-brand" href="#">Inicio</a>
          <a href="#" className="navbar-brand"> <Cartwidge/> </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#">Seccion 1</a>
              </li>
              <li className ="nav-item">
                <a className="nav-link" href="#">Seccion 2</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Seccion 3</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Seccion 4
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">1</a></li>
                  <li><a className="dropdown-item" href="#">2</a></li>
                  <li><a className="dropdown-item" href="#">3</a></li>
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