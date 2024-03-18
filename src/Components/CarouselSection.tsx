// import React from "react";
import Navbar from "./Navbar";
import hero_bg from '../assets/img/hero-bg.png'
import slider_img from '../assets/img/slider-img.png'

function CarouselSection() {
  return (
    <>
      <div className="hero_area">
        <div className="hero_bg_box">
          <div className="bg_img_box">
            <img src={hero_bg} alt="hero_bg" />
          </div>
        </div>

        <Navbar />

        <section className="slider_section ">
          <div
            id="customCarousel1"
            className="carousel slide"
            data-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item">
                <div className="container ">
                  <div className="row">
                    <div className="col-md-6 ">
                      <div className="detail-box" data-aos="fade-up" data-aos-duration="1000">
                        <h1>
                          Crypto <br />
                          Currency
                        </h1>
                        <p>
                          Explicabo esse amet tempora quibusdam laudantium,
                          laborum eaque magnam fugiat hic? Esse dicta aliquid
                          error repudiandae earum suscipit fugiat molestias,
                          veniam, vel architecto veritatis delectus repellat
                          modi impedit sequi.
                        </p>
                        <div className="btn-box">
                          <a href="" className="btn1">
                            Read More
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="img-box">
                      <img src={slider_img} alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item active">
                <div className="container ">
                  <div className="row">
                    <div className="col-md-6 ">
                      <div className="detail-box" data-aos="fade-up" data-aos-duration="1300">
                        <h1>
                          Crypto <br />
                          Currency
                        </h1>
                        <p>
                          Explicabo esse amet tempora quibusdam laudantium,
                          laborum eaque magnam fugiat hic? Esse dicta aliquid
                          error repudiandae earum suscipit fugiat molestias,
                          veniam, vel architecto veritatis delectus repellat
                          modi impedit sequi.
                        </p>
                        <div className="btn-box">
                          <a href="" className="btn1">
                            Read More
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="img-box">
                        <img src={slider_img} alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="container ">
                  <div className="row">
                    <div className="col-md-6 ">
                      <div className="detail-box" data-aos="fade-up" data-aos-duration="1000">
                        <h1>
                          Crypto <br />
                          Currency
                        </h1>
                        <p>
                          Explicabo esse amet tempora quibusdam laudantium,
                          laborum eaque magnam fugiat hic? Esse dicta aliquid
                          error repudiandae earum suscipit fugiat molestias,
                          veniam, vel architecto veritatis delectus repellat
                          modi impedit sequi.
                        </p>
                        <div className="btn-box">
                          <a href="" className="btn1">
                            Read More
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="img-box">
                        <img src="images/slider-img.png" alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <ol className="carousel-indicators">
              <li
                data-target="#customCarousel1"
                data-slide-to="0"
                className="active"
              ></li>
              <li data-target="#customCarousel1" data-slide-to="1"></li>
              <li data-target="#customCarousel1" data-slide-to="2"></li>
            </ol>
          </div>
        </section>
      </div>
    </>
  );
}

export default CarouselSection;
