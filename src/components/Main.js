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
                <img className="hero-elena" src="/images/marywenphotography.jpg" alt="image of woman under water" />
            </div>
            </section>
            </main>
            
        </div>
    )
}

export default Main
