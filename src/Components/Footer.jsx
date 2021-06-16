import React from 'react';

const Footer = () => {
  return (
    <footer>
      <div className="footer-container container">
        <div>
          <h3>Film Maker Skooly Josh</h3>
          <p>"When People ask me if I went to film school, I tell them, 'No, I went to Films' " ~ Skooly Josh</p>
        </div>
        <div>
          <h3>Hire Us Today</h3>
          <p>Please check out Pricing pages to see your package.</p>

          <div className="subs">
            <i className="fas fa-envelope"></i>
            <input type="email" id="email" placeholder="Email Address" />
            <button type="submit">SUBSCRIBE</button>
          </div>
        </div>
      </div>
      <p>&copy; Copyright Film Maker Skooly Josh.</p>
    </footer>
  )
}

export default Footer;