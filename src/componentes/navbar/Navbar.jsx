import React from 'react'
import { Link } from 'react-router-dom'
import Cartwidge from './Cartwidge'
import './navbar.css'

const Navbar = () => {
  return (
    <div>
      <nav className ="navbar navbar-expand-lg bg-dark navbar-dark">
        <div className ="container-fluid">
          <Link to = "/" className ="navbar-brand">Inicio</Link>
          <Link to = "/cart" className ="navbar-brand"><Cartwidge/></Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Categorias
                </a>
                <ul className="dropdown-menu">
                  <li><Link to ="/category/1" className ="dropdown-item">Categoria 1</Link></li>
                  <li><Link to ="/category/2" className ="dropdown-item">Categoria 2</Link></li>
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