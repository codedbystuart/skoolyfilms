import React from 'react';
import Footer from './Footer';
import Header from './Header';

const Home = () => {
  return(
    <div>
      <Header/>
      <section className = "section-one">
            <div className = "container">
                <div className = "sec-one-left">
               
                    <div>
                        <h3>Lorem ipsum dolor sit amet</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos suscipit ut aliquid ab illo. Repellat nam molestias repellendus perspiciatis blanditiis.</p>
                        {/* <a href = "*" className = "btn">view all</a> */}
                    </div>
                </div>

                <div className = "sec-one-right">
                    <div className = "work-content">
                        <h3>AMAZING TEAM WORK WITH PROFESSIONAL PHOTOGRAPHER</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque ducimus laboriosam facilis repudiandae neque minus in corrupti consequatur illum placeat nam libero adipisci quidem doloribus, numquam eius delectus quaerat omnis illo earum necessitatibus natus soluta deserunt iusto. Modi, soluta quos.</p>
                        {/* <a href = "*" className = "btn">view all</a> */}
                    </div>
                    <div className = "work-imgs">
                        <div className = "work-img-1">
                    
                        </div>
                        <div className = "work-img-2">
                           
                        </div>
                    </div>
                    <h3>"Taking an image, freezing a moment, reveals how rich reality truly is."</h3>
                </div>
            </div>
        </section>

        <section className = "section-two">
            <div className = "container">
                <h2>FOLLOW ON INSTAGRAM</h2>
                <span>@skooly</span>
                <div className = "insta-imgs">
                    <div>
                        <img src = "images/insta-1.jpg" alt=""/>
                        <div className = "icon-overlay flex">
                            <i className = "fab fa-instagram"></i>
                        </div>
                    </div>
                    <div>
                        <img src = "images/insta-2.jpg" alt=""/>
                        <div className = "icon-overlay flex">
                            <i className = "fab fa-instagram"></i>
                        </div>
                    </div>
                    <div>
                        <img src = "images/insta-3.jpg" alt=""/>
                        <div className = "icon-overlay flex">
                            <i className = "fab fa-instagram"></i>
                        </div>
                    </div>
                    <div>
                        <img src = "images/insta-4.jpg" alt=""/>
                        <div className = "icon-overlay flex">
                            <i className = "fab fa-instagram"></i>
                        </div>
                    </div>
                </div>
            </div>
        </section>
      <Footer/>
    </div>
  )
}
export default Home;