import React, { useState } from "react"
import { Link } from "react-router-dom"
import "./Header.css"

export default function Header(){
    const[sidebar,setsidebar] = useState(false);
    const showsidebar =() => setsidebar(!sidebar);
    return(
        <nav>
            <div className="logo"><Link to="/">Bhanu.dev</Link></div>
            <input type="checkbox" id="check"></input>
            <label className="menu-btn" for="check">
                <i class="fa-solid fa-bars"></i>
            </label>
            <ul onClick={showsidebar}>
                <li><Link to='/' className="navbar-item">Home</Link></li>
                <li><Link to="/projects" className="navbar-item">Projects</Link></li>
                <li><Link to="/skills" className="navbar-item">Skills</Link></li>
                <li><Link to="/blogs" className="navbar-item">Blogs</Link></li>
                <li><Link to="/aboutme" className="navbar-item">About</Link></li>
            </ul>
        </nav>
    )
}