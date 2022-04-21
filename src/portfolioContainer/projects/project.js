import React from "react"
import "./project.css"

var project1 = ['Typescript','css','html','javascript']
var project2 = ['redux','html','appollo','hyna']
// var project3 = ['Typescript','css','html','javascript']
// var project4 = ['redux','html','appollo','hyna']

export default function Project(){
    return(
        <section className="project-content">
            <div className="heading-content">
                <h1>Main Projects</h1>
                <p>Full Stack Applications and more complex, longer projects I tend to spend more time with.</p>
            </div>
            <div className="projects-content">
                <div className="project-col-1">
                    <article className="project-grids">
                        <div className="project-heading">
                            <h3>My Project</h3>
                        </div>
                        <div className="project-image">
                            <img src= "https://www.simplilearn.com/ice9/free_resources_article_thumb/What_Is_a_Project.jpg" alt="img"/>
                        </div>
                        <div className="project-tech">
                            <ul>
                                {project1.map(name => <li> {name} </li>)}
                            </ul>
                        </div>
                        <div className="project-description">
                            <p>Hi this project is the best project of me. My project is little bit complecated and i think you can not understand. Not a problem i will explain in a more comprehensive manner.</p>
                        </div>
                        <div className="Project-button">
                            <a className="button1" href="#">Live</a>
                            <a className="button2" href="#">github</a>
                        </div>
                    </article>
                </div>
                <div className="project-col-2">
                    <article className="project-grids">
                            <div className="project-heading">
                                <h3>My Project</h3>
                            </div>
                            <div className="project-image">
                                <img src= "https://www.simplilearn.com/ice9/free_resources_article_thumb/What_Is_a_Project.jpg" alt="img"/>
                            </div>
                            <div className="project-tech">
                                <ul>
                                    {project2.map(name => <li> {name} </li>)}
                                </ul>
                            </div>
                            <div className="project-description">
                                <p>Hi this project is the best project of me. My project is little bit complecated and i think you can not understand. Not a problem i will explain in a more comprehensive manner.</p>
                            </div>
                            <div className="Project-button">
                                <a className="button1" href="#">Live</a>
                                <a className="button2" href="#">github</a>
                            </div>
                    </article>
                </div>
                <div className="project-col-1 row-2">
                    <article className="project-grids">
                        <div className="project-heading">
                            <h3>My Project</h3>
                        </div>
                        <div className="project-image">
                            <img src= "https://www.simplilearn.com/ice9/free_resources_article_thumb/What_Is_a_Project.jpg" alt="img"/>
                        </div>
                        <div className="project-tech">
                            <ul>
                                {project1.map(name => <li> {name} </li>)}
                            </ul>
                        </div>
                        <div className="project-description">
                            <p>Hi this project is the best project of me. My project is little bit complecated and i think you can not understand. Not a problem i will explain in a more comprehensive manner.</p>
                        </div>
                        <div className="Project-button">
                            <a className="button1" href="#">Live</a>
                            <a className="button2" href="#">github</a>
                        </div>
                    </article>
                </div>
                <div className="project-col-2 row-2">
                    <article className="project-grids">
                            <div className="project-heading">
                                <h3>My Project</h3>
                            </div>
                            <div className="project-image">
                                <img src= "https://www.simplilearn.com/ice9/free_resources_article_thumb/What_Is_a_Project.jpg" alt="img"/>
                            </div>
                            <div className="project-tech">
                                <ul>
                                    {project2.map(name => <li> {name} </li>)}
                                </ul>
                            </div>
                            <div className="project-description">
                                <p>Hi this project is the best project of me. My project is little bit complecated and i think you can not understand. Not a problem i will explain in a more comprehensive manner.</p>
                            </div>
                            <div className="Project-button">
                                <a className="button1" href="#">Live</a>
                                <a className="button2" href="#">github</a>
                            </div>
                    </article>
                </div>
            </div>
        </section>
    );
}