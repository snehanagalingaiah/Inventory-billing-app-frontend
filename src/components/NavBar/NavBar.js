import React, { useState, useEffect } from 'react'
import { useLocation, Link } from 'react-router-dom'

const NavBar = () => {
   return (
    <div>
      <nav className="navbar">
        <ul className="navbar-nav">
        <li className="logo">
      <a href="/dashboard" className="nav-link">
        <span className="link-text">INVENTORY</span>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-arrow-right"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
      </a>
    </li>
          <li className="nav-item">
            <Link to="/dashboard" className="nav-link">
              <span className="link-text">Dashboard</span>
            </Link>
          </li>
          <li className="nav-item">
            <a href="/invoices" className="nav-link">
              <span className="link-text">Invoices</span>
            </a>
          </li>
          <li className="nav-item">
            <a href="/customers" className="nav-link">
              <span className="link-text">Customers</span>
            </a>
          </li>
          <li className="nav-item">
            <a href="/products" className="nav-link">
              <span className="link-text">Products</span>
            </a>
          </li>
        </ul>
      </nav>

    </div>
  )
}

export default NavBar
