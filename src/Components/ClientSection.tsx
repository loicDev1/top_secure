// import React from "react";
// import client1 from "../../images/client1.jpg";
import client1 from '../assets/img/client1.jpg'
import client2 from '../assets/img/client2.jpg'

function ClientSection() {
  return (
    <>
      <section className="client_section layout_padding">
        <div className="container">
          <div className="heading_container heading_center psudo_white_primary mb_45">
            <h2>
              Ce que disent nos <span>Utilisateurs</span>
            </h2>
          </div>
          <div className="carousel-wrap ">
            <div className=" client_owl-carousel">
              <div className="item" data-aos="fade-left"
                data-aos-duration="1000" data-aos-offset="200">
                <div className="box">
                  <div className="img-box">
                    <img src={client2} alt="" className="box-img" />
                  </div>
                  <div className="detail-box">
                    <div className="client_id">
                      <div className="client_info">
                        <h6>Davilla</h6>
                        <p>Utilisateur premium Top Secure</p>
                      </div>
                      <i className="fa fa-quote-left" aria-hidden="false"></i>
                    </div>
                    <p>
                    topsecure tu me facilite la vie,en me permettant de consulter le solde de ma recharge.
                    </p>
                  </div>
                </div>
              </div>
              <div className="item" data-aos="fade-right"
                data-aos-duration="1000" data-aos-offset="200"> 
                <div className="box">
                  <div className="img-box">
                    <img src={client1} alt="" className="box-img"/>
                  </div>
                  <div className="detail-box">
                    <div className="client_id">
                      <div className="client_info">
                        <h6>Lucien</h6>
                        <p>Utilisateur premium Top Secure</p>
                      </div>
                      <i className="fa fa-quote-left" aria-hidden="true"></i>
                    </div>
                    <p>
                    Top Secure c'est facile. tu reçois le mail de validité 1 minute plus tard 
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ClientSection;
