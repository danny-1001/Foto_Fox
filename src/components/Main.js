import React from 'react'

function Main() {
    return (
        <div>
            <main>
            <section className="hero">
            <div className="hero-introduction flex">
                <h2>FotoFox <br /> Photography</h2>
                <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis sequi dolore veniam ut, consequatur eum nulla eos est quasi libero!
                </p>
                <a href="#gallery">Gallery</a>
            </div>
            <div className="hero-images">
                <img className="hero-elena" src="/images/bluehouse.jpeg" alt="image of woman under water" />
            </div>
            </section>
            <section className="about" id="about">
            <div className="about-image">
                <h5>MINIMAL</h5>
                <img src="/images/pexels-jc-siller-6948605.jpg" alt="portrait-pic" />
            </div>
            <div className="about-text flex" id="work">
                <h2>About Us</h2>
                <div className="about-life">
                <h3>Our Mission</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim odio maxime similique, numquam placeat libero rerum dolor fuga quasi mollitia.</p>
                </div>
                <div className="about-work">
                <h3>Our Work</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim odio maxime similique, numquam placeat libero rerum dolor fuga quasi mollitia.</p>
                </div>
                <div className="about-contact">
                <h3>Get in Touch</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim odio maxime similique, numquam placeat libero rerum dolor fuga quasi mollitia.</p>
                </div>
            </div>
            </section>
            <section className="gallery" id="gallery">
            <header className="gallery-head">
                <a href="#">
                <h2>See More</h2>
                </a>
            </header>
            <img className="gallery1" src="/images/golden.jpeg" alt="man in suit" />
            <img className="gallery2" src="/images/gallery-2.jpg" alt="lady in coat" />
            <img className="gallery3" src="/images/pexels-bela-cheers-4508085.jpg" alt="lady in t-shirt" />
            <img className="gallery4" src="/images/pexels-breston-kenya-3552544.jpg" alt="lady in jacket" />
            </section>
            <section className="contact" id="contact">
            <div className="form-wrapper flex">
                <h2>Get in <br /> 
                <span>touch</span> 
                </h2>
                <form action="action=https://formspree.io/f/mgerkdpl" method="POST">
                <label htmlFor="email"> Your Email: </label>
                <input type="email" name="_replyto" id="email required" />
                <label htmlFor="message"> Your Message: </label>
                <input className="text" name="message" />  
                <button type="submit">Submit</button>
                </form>
            </div>
            <img src="/images/contact-image.jpg" alt="cortez" />
            </section>
            </main>
            
        </div>
    )
}

export default Main
