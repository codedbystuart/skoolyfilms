import React from 'react';
import Footer from './Footer';
import Header from './Header';

const Blog = () =>{
  return (
    <div>
      <Header/>
      <section className = "section-four">
            <div className = "container">
                <div className = "blogs">
                    <div className = "blog-wrapper-lg">
                        <div className = "blog">
                            <img src = "images/blog1.jpg" alt=""/>
                            <div className = "blog-content">
                                <span className = "badge">Photography</span>
                                <span className = "misc-info">
                                    Published: 1 Week Ago | 25 Comments
                                </span>
                                <h3 className = "blog-title">
                                    Best Photography Tips For Beginners
                                </h3>
                                <p className = "blog-text">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, eligendi!
                                </p>
                                <a href = "/blog" className = "btn">Read More</a>
                            </div>
                        </div>

                        <div className = "blog">
                            <img src = "images/blog2.jpg" alt=""/>
                            <div className = "blog-content">
                                <span className = "badge">Photography</span>
                                <span className = "misc-info">
                                    Published: 1 Week Ago | 25 Comments
                                </span>
                                <h3 className = "blog-title">
                                    Best Photography Tips For Beginners
                                </h3>
                                <p className = "blog-text">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, eligendi!
                                </p>
                                <a href = "/blog" className = "btn">Read More</a>
                            </div>
                        </div>
                    </div>

                    <div className = "blog-wrapper-sm">
                        <div className = "blog">
                            <img src = "images/blog3.jpg" alt=""/>
                            <div className = "blog-content">
                                <span className = "badge">Photography</span>
                                <span className = "misc-info">
                                    Published: 1 Week Ago | 25 Comments
                                </span>
                                <h3 className = "blog-title">
                                    Best Photography Tips For Beginners
                                </h3>
                                <p className = "blog-text">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, eligendi!
                                </p>
                                <a href = "/blog" className = "btn">Read More</a>
                            </div>
                        </div>

                        <div className = "blog">
                            <img src = "images/blog4.jpg" alt=""/>
                            <div className = "blog-content">
                                <span className = "badge">Photography</span>
                                <span className = "misc-info">
                                    Published: 1 Week Ago | 25 Comments
                                </span>
                                <h3 className = "blog-title">
                                    Best Photography Tips For Beginners
                                </h3>
                                <p className = "blog-text">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, eligendi!
                                </p>
                                <a href = "/blog" className = "btn">Read More</a>
                            </div>
                        </div>
                       
                        <div className = "blog">
                            <img src = "images/blog5.jpg" alt=""/>
                            <div className = "blog-content">
                                <span className = "badge">Photography</span>
                                <span className = "misc-info">
                                    Published: 1 Week Ago | 25 Comments
                                </span>
                                <h3 className = "blog-title">
                                    Best Photography Tips For Beginners
                                </h3>
                                <p className = "blog-text">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, eligendi!
                                </p>
                                <a href = "/blog" className = "btn">Read More</a>
                            </div>
                        </div>
                    
                        <div className = "blog">
                            <img src = "images/blog6.jpg" alt=""/>
                            <div className = "blog-content">
                                <span className = "badge">Photography</span>
                                <span className = "misc-info">
                                    Published: 1 Week Ago | 25 Comments
                                </span>
                                <h3 className = "blog-title">
                                    Best Photography Tips For Beginners
                                </h3>
                                <p className = "blog-text">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, eligendi!
                                </p>
                                <a href = "/blog" className = "btn">Read More</a>
                            </div>
                        </div>
                       
                    </div>
                </div>
            </div>
        </section>
      <Footer/>
    </div>
  )
}

export default Blog;