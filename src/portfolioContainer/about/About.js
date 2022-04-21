import React from "react"
import "./About.css"

export default function About(){
    return(
        <section className="about-section">
            <div className="about-heading">
                <h1>About Me</h1>
            </div>
            <div className="about-content">
                <div className="about-text"><p>My name is Peter, or Gabor, whichever you prefer. I am a full stack web developer, based in London. I am originally from Budapest, studied for a year in Japan, living in the UK since 2012. So far in my life, I have also been a Japanese teacher, briefly worked as a self employed daytrader, did my fair share of hospitality, and a lot of bar mangement. As you can see, I enjoy learning new things.<br/><br />Actively programming pretty much full time since early 2020, I am currently looking for my first tech position as a web developer. My current stack is mainly JavaScript based, I am also spending a plenty of time with TypeScript recently. I am familiar with frontend frameworks - React and Vue, HTML and CSS, styling with Sass. I build RESTful and GraphQLAPIs, relational and non-relational databases. I enjoy figuring out best practices, designing architecture, reusable code. As an ex-daytrader, I find flashing red test cases turning green extremely rewarding. I am cofident using Git for version control, currently integrating Docker and CI/CD to my everyday workflow<br /> <br />

I am focusing on my skills as an overall engineer at the moment, learning about Data Structures, Algorithms and Object Oriented Design Patterns. I am currently learning Java , to take my OOP skills to the next level. I am also pretty confident with Python, I could pick it up relatively quickly if needed. <br/><br />

In my free time, I like learning new things like tech or languages (my Chinese needs work), working on side projects. I love spending time with my lovely wife, I enjoy an occasional video game, or being outside chasing wildlife. I would love to get back into martial arts (wing-chun for me), once I have a more regular schedule.<br /><br />

Although I don`t have aspirations in bartending or hospitality anymore, I do maintain a professional curiosity, and always try to apply the lessons I have learnt. <br /><br />

I am currently building a full featured Role Playing application with a UX designer friend, under the name StudioGR</p></div>
                <div className="about-image"><img src="https://pbs.twimg.com/profile_images/1502545723711053826/uipr6Eiv_400x400.jpg" alt="my" /></div>
            </div>
        </section>
    )
}