// import React from "react";
import s1 from '../assets/img/s1.png'
import s2 from '../assets/img/s2.png'
import s3 from '../assets/img/s3.png'

function Services() {
  return (
    <>
      <section className="service_section ">
        <div className="service_container">
          <div className="container ">
            <div className="heading_container heading_center">
              <h2
                style={{ margin: "20px 0px" }}
                data-aos="fade-right"
                data-aos-duration="1000"
                data-aos-offset="300"
              >
                Nos <span>Services</span>
              </h2>
              <p>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration
              </p>
            </div>
            <div className="row">
              <div className="col-md-4 ">
                <div
                  className="box "
                  data-aos="fade-up"
                  data-aos-offset="250"
                  data-aos-duration="1000"
                >
                  <div className="img-box">
                  <img src={s1} alt="" />
                  </div>
                  <div className="detail-box">
                    <h5>Currency Wallet</h5>
                    <p>
                      fact that a reader will be distracted by the readable
                      content of a page when looking at its layout. The point of
                      using
                    </p>
                    <a href="">Read More</a>
                  </div>
                </div>
              </div>
              <div className="col-md-4 ">
                <div
                  className="box "
                  data-aos="fade-down"
                  data-aos-offset="250"
                  data-aos-duration="1500"
                >
                  <div className="img-box">
                  <img src={s2} alt="" />
                  </div>
                  <div className="detail-box">
                    <h5>Security Storage</h5>
                    <p>
                      fact that a reader will be distracted by the readable
                      content of a page when looking at its layout. The point of
                      using
                    </p>
                    <a href="">Read More</a>
                  </div>
                </div>
              </div>
              <div className="col-md-4 ">
                <div
                  className="box "
                  data-aos="fade-up"
                  data-aos-offset="250"
                  data-aos-duration="2000"
                >
                  <div className="img-box">
                    <img src={s3} alt="" />
                  </div>
                  <div className="detail-box">
                    <h5>Expert Support</h5>
                    <p>
                      fact that a reader will be distracted by the readable
                      content of a page when looking at its layout. The point of
                      using
                    </p>
                    <a href="">Read More</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="btn-box">
              <a
              style={{margin: "15px 0px"}}
                href=""
                data-aos="fade-left"
                data-aos-duration="1000"
              >
                View All
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Services;
