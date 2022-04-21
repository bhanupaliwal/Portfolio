import React, { useState } from "react"
import { Link } from "react-router-dom"
import "./Header.css"

export default function Header(){
    return(
        <nav>
            <div className="logo"><Link to="/">Bhanu.dev</Link></div>
            <input type="checkbox" id="check"></input>
            <label className="menu-btn" for="check">
                <i class="fa-solid fa-bars"></i>
            </label>
            <ul>
                <li><Link to='/' className="navbar-item" onClick={change}>Home</Link></li>
                <li><Link to="/projects" className="navbar-item" onClick={change}>Projects</Link></li>
                <li><Link to="/skills" className="navbar-item" onClick={change}>Skills</Link></li>
                <li><Link to="/blogs" className="navbar-item" onClick={change}>Blogs</Link></li>
                <li><Link to="/aboutme" className="navbar-item" onClick={change}>About</Link></li>
            </ul>
        </nav>
    )
}