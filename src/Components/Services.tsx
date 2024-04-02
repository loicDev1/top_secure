// import React from "react";
import s1 from '../assets/img/s1.png'
import s2 from '../assets/img/s2.png'
import s3 from '../assets/img/s3.png'

function Services() {
  return (
    <>
      <section className="service_section layout_padding">
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
                Voici un ensemble de services que vous offre Top Secure
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
                    <h5>Wallet</h5>
                    <p style={{textAlign:'justify'}}>
                      Récupérer votre recharge sur top secure avec une adresse bitcoin avec des frais standard
                    </p>
                    {/* <a href="">Read More</a> */}
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
                    <h5>CONFIDENTIALITÉ</h5>
                    <p style={{textAlign:'justify'}}>
                      Technologie standard de sécurisation des connexions Internet par le chiffrement des données transitant entre une application et un site web (ou entre deux serveurs). Durant leur transfert, les données (personnelles, financières,etc.)
                    </p>
                    {/* <a href="">Read More</a> */}
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
                    <h5>VALIDITÉS</h5>
                    <p style={{textAlign:'justify'}}>
Vous pouvez obtenir les informations de votre coupon , solde du coupon , date  d’activation, date, heure ou validité
                    </p>
                    {/* <a href="">Read More</a> */}
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="btn-box">
              <a
                style={{ margin: "15px 0px" }}
                href=""
                data-aos="fade-left"
                data-aos-duration="1000"
              >
                View All
              </a>
            </div> */}
          </div>
        </div>
      </section>
    </>
  );
}

export default Services;
