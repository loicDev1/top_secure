// import React from "react";

function Footer() {
  return (
    <>
      <section className="info_section layout_padding2">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-lg-3 info_col">
              <div className="info_contact">
                <h4>Address</h4>
                <div className="contact_link_box">
                  <a href="">
                    <i className="fa fa-map-marker" aria-hidden="true"></i>
                    <span>11 rue du 4 septembre Versailles, paris</span>
                  </a>
                  <a href="tel:+33756911190">
                    <i className="fa fa-phone" aria-hidden="true"></i>
                    <span>+33756911190</span>
                  </a>
                  <a href="">
                    <i className="fa fa-envelope" aria-hidden="true"></i>
                    <a href="mailto:topsecure642@gmail.com">topsecure642@gmail.com</a>
                  </a>
                </div>
              </div>
              <div className="info_social">
                <a href="">
                  <i className="fa fa-facebook" aria-hidden="true"></i>
                </a>
                <a href="">
                  <i className="fa fa-twitter" aria-hidden="true"></i>
                </a>
                <a href="">
                  <i className="fa fa-linkedin" aria-hidden="true"></i>
                </a>
                <a href="">
                  <i className="fa fa-instagram" aria-hidden="true"></i>
                </a>
              </div>
            </div>
            {/* <div className="col-md-6 col-lg-3 info_col">
              <div className="info_detail">
                <h4>Info</h4>
                <p>
                  necessary, making this the first true generator on the
                  Internet. It uses a dictionary of over 200 Latin words,
                  combined with a handful
                </p>
              </div>
            </div> */}
            {/* <div className="col-md-6 col-lg-2 mx-auto info_col">
              <div className="info_link_box">
                <h4>Links</h4>
                <div className="info_links">
                  <a className="active" href="index.html">
                    Home
                  </a>
                  <a className="" href="about.html">
                  TRANSCASH
                  </a>
                  <a className="" href="service.html">
                    NEOSURF
                  </a>
                  <a className="" href="why.html">
                    PCS
                  </a>
                  <a className="" href="team.html">
                  PAYSAFECARD
                  </a>
                </div>
              </div>
            </div> */}
            {/* <div className="col-md-6 col-lg-3 info_col ">
              <h4>Subscribe</h4>
              <form action="#">
                <input type="text" placeholder="Enter email" />
                <button type="submit">Subscribe</button>
              </form>
            </div> */}
          </div>
        </div>
      </section>

      <section className="footer_section">
    <div className="container">
      <p>
        &copy; <span id="displayYear"></span> Tout droits reservés, 
        <a href="#">Top Secure</a>
      </p>
    </div>
  </section>
    </>
  );
}

export default Footer;
