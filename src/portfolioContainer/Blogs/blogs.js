import React from "react"
import "./blogs.css"

export default function Blogs(){
    return(
        <section className="blogs-section">
            <div className="heading-section">
                <h1>My Blogs</h1>
                <p>I have written these blogs from bottom of my heart. So just read it with love.</p>
            </div>
            <div className="content-section">
                    <div className="blogs-col-1 new-row">
                        <h4>How to make telegram bots</h4>
                        <img src="https://techsmartest.com/wp-content/uploads/2021/09/Telegram-bots-the-best-you-can-use-and-how-to-find-new-bots.jpg" alt="image"/>
                        <p>1Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged...</p>
                        <div><a href="#"><button className="blog-button">Read More</button></a></div>
                    </div>
                    <div className="blogs-col-2 new-row">
                        <h4>How to make telegram bots</h4>
                        <img src="https://techsmartest.com/wp-content/uploads/2021/09/Telegram-bots-the-best-you-can-use-and-how-to-find-new-bots.jpg" alt="image" />
                        <p>2Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged...</p>
                        <div><a href="#"><button className="blog-button">Read More</button></a></div>
                    </div>
                    <div className="blogs-col-1 new-row">
                        <h4>How to make telegram bots</h4>
                        <img src="https://techsmartest.com/wp-content/uploads/2021/09/Telegram-bots-the-best-you-can-use-and-how-to-find-new-bots.jpg" alt="image" />
                        <p>3Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged...</p>
                        <div><a href="#"><button className="blog-button">Read More</button></a></div>
                    </div>
                    <div className="blogs-col-2 new-row">
                        <h4>How to make telegram bots</h4>
                        <img src="https://techsmartest.com/wp-content/uploads/2021/09/Telegram-bots-the-best-you-can-use-and-how-to-find-new-bots.jpg" alt="image" />
                        <p>4Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged...</p>
                        <div><a href="#"><button className="blog-button">Read More</button></a></div>
                    </div>
            </div>
        </section>
    );
}