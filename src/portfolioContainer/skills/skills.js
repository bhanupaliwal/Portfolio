import React from 'react';
import "./skills.css"

function Skills(props) {
    return (
        <section className='skills-section'>
            <div className='heading-section'>
                <h1>Skills & Stack</h1>
                <p>I learned these skills by myself.</p>
            </div>
            <div className='content-section'>
                <div className='language-col'>
                    <div className='items'>
                        <i class="fa-brands fa-js-square item"></i>
                        <span>Javascript</span>
                    </div>
                    <div className='items'>
                        <i class="fa-brands fa-html5 item"></i>
                        <span>HTML</span>
                    </div>
                    <div className='items'>
                        <i class="fa-brands fa-css3-alt item"></i>
                        <span>CSS</span>
                    </div>
                    <div className='items'>
                        <i class="fa-brands fa-python item"></i>
                        <span>Python</span>
                    </div>
                </div>
                <div className='framework-col'>
                    <div className='items'>
                        <i class="fa-brands fa-react item"></i>
                        <span>React</span>
                    </div>
                </div>
                <div className='library-col'>
                    <div className='items'>
                        <i class="fa-brands fa-node item"></i>
                        <span>Node</span>
                    </div>
                </div>
                <div className='database-col'>
                    <div className='items'>
                    <i class="fa-solid fa-database item"></i>
                        <span>Database</span>
                    </div>
                </div>
                <div className='tool-col'>
                    <div className='items'>
                        <i class="fa-brands fa-git-alt item"></i>
                        <span>Git</span>
                    </div>
                    <div className='items'>
                        <i class="fa-brands fa-docker item"></i>
                        <span>Docker</span>
                    </div>
                    <div className='items'>
                        <i class="fa-brands fa-figma item"></i>
                        <span>Figma</span>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Skills;