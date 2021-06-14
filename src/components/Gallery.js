import React from 'react'

function Gallery() {
    return (
        <section className="gallery" id="gallery">
            <header className="gallery-head">
                <a href="#/">
                <h2>See More</h2>
                </a>
            </header>
            <img className="gallery1" src="/images/golden.jpeg" alt="Golden retriever in a grass field." />
            <img className="gallery2" src="/images/gallery-2.jpg" alt="Person in white outfit." />
            <img className="gallery3" src="/images/bluehouse.jpeg" alt="A blue house." />
            <img className="gallery4" src="/images/pexels-bela-cheers-4508085.jpg" alt="Smiling woman crouched in a field of yellow flowers." />
            </section>
    )
}

export default Gallery
