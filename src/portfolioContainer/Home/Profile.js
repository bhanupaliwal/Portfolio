import React from "react"
import "./profile.css"
import { Link } from "react-router-dom"

export default function Profile(){
    return(
        <div className="profile-container">
            <div className="profile-details">
                <div className="profile-things">
                    <div className="profile-content">
                        <h1>Hello, I'm <span>Bhanu Paliwal</span></h1>
                        <p>I am a Full Stack Web Developer based India. <br /> Check out my work to see what I can do for you.</p>
                    </div>
                    <div className="button">
                        <button className="btn1"><i class="fa-solid fa-download"></i>   Resume</button>
                        <Link to="/projects"><button className="btn2">View Projects</button></Link>
                    </div>
                </div>
                <div className="profile-social">
                    <ul>
                        <li><a href="#">
                            <i class="fa-brands fa-github"></i>
                            </a>
                        </li>
                        <li><a href="#">
                            <i class="fa-brands fa-linkedin"></i>
                            </a>
                        </li>
                        <li><a href="#">
                            <i class="fa-brands fa-twitter-square"></i>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}