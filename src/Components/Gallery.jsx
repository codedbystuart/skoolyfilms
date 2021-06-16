import React from 'react';
import Footer from './Footer';
import Header from './Header';

const Gallery = () =>{
  return (
    <div>
      <Header/>
      <section className = "section-three">
            <div className = "container">
                <div className = "gallery">
                    <a href = "images/gallery1.jpg">
                        <div className = "single-img">
                            <img src = "images/gallery1.jpg" alt = "gallery "/>
                            <div className = "single-img-content">
                                <h3>Beautiful Work</h3>
                            </div>
                        </div>
                    </a>

                    <a href = "images/gallery2.jpg">
                        <div className = "single-img">
                            <img src = "images/gallery2.jpg" alt = "gallery"/>
                            <div className = "single-img-content">
                                <h3>Beautiful Work</h3>
                            </div>
                        </div>
                    </a>

                    <a href = "images/gallery3.jpg">
                        <div className = "single-img">
                            <img src = "images/gallery3.jpg" alt = "gallery"/>
                            <div className = "single-img-content">
                                <h3>Beautiful Work</h3>
                            </div>
                        </div>
                    </a>

                    <a href = "images/gallery4.jpg">
                        <div className = "single-img">
                            <img src = "images/gallery4.jpg" alt = "gallery"/>
                            <div className = "single-img-content">
                                <h3>Beautiful Work</h3>
                            </div>
                        </div>
                    </a>

                    <a href = "images/gallery5.jpg">
                        <div className = "single-img">
                            <img src = "images/gallery5.jpg" alt = "gallery"/>
                            <div className = "single-img-content">
                                <h3>Beautiful Work</h3>
                            </div>
                        </div>
                    </a>

                    <a href = "images/gallery6.jpg">
                        <div className = "single-img">
                            <img src = "images/gallery6.jpg" alt = "gallery"/>
                            <div className = "single-img-content">
                                <h3>Beautiful Work</h3>
                            </div>
                        </div>
                    </a>

                    <a href = "images/gallery7.jpg">
                        <div className = "single-img">
                            <img src = "images/gallery7.jpg" alt = "gallery"/>
                            <div className = "single-img-content">
                                <h3>Beautiful Work</h3>
                            </div>
                        </div>
                    </a>

                    <a href = "images/gallery8.jpg">
                        <div className = "single-img">
                            <img src = "images/gallery8.jpg" alt = "gallery"/>
                            <div className = "single-img-content">
                                <h3>Beautiful Work</h3>
                            </div>
                        </div>
                    </a>

                    <a href = "images/gallery9.jpg">
                        <div className = "single-img">
                            <img src = "images/gallery9.jpg" alt = "gallery"/>
                            <div className = "single-img-content">
                                <h3>Beautiful Work</h3>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        </section>

      <Footer/>
    </div>
  )
}
export default Gallery;