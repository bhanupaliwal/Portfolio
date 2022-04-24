import React, { useState } from "react"
import { Link } from "react-router-dom"
import "./Header.css"

export default function Header(){
    const[isMobile,setisMobile] = useState(false);
    return(
        <nav className="navbar">
            <div className="logo"><Link to="/">Bhanu.dev</Link></div>
            <button className="mobile-menu-icon" onClick={()=>setisMobile(!isMobile)}>
                {isMobile ? (<li className="fas fa-times"></li>) : (<i class="fa-solid fa-bars"></i>)}
            </button>
            <ul className={isMobile ? "nav-links-mobile" : "nav-links"} onClick={()=> setisMobile(false)}>
                <li><Link to='/' className="navbar-item">Home</Link></li>
                <li><Link to="/projects" className="navbar-item">Projects</Link></li>
                <li><Link to="/skills" className="navbar-item">Skills</Link></li>
                <li><Link to="/blogs" className="navbar-item">Blogs</Link></li>
                <li><Link to="/aboutme" className="navbar-item">About</Link></li>
            </ul>
        </nav>
    )
}