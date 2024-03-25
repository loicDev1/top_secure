import w1 from '../assets/img/w1.png'
import w2 from '../assets/img/w2.png'
import w3 from '../assets/img/w3.png'
import w4 from '../assets/img/w4.png'

function WhyItWork() {
  return (
    <>
      <section className="why_section layout_padding">
        <div className="container">
          <div className="heading_container heading_center">
            <h2 data-aos="zoom-in" data-aos-duration="1000" data-aos-offset="200">
              Comment fonctionne <span>TopSecure</span>  ?
            </h2>
          </div>
          <div className="why_container">
            <div className="box" data-aos="fade-up" data-aos-duration="1000" data-aos-offset="200">
              <div className="img-box">
                <img src={w1} alt="" />
              </div>
              <div className="detail-box">
                <h5>Expert Management</h5>
                <p>
                  choisir le type de la carte prépayée
                </p>
              </div>
            </div>
            <div className="box" data-aos="fade-up" data-aos-duration="1000" data-aos-offset="200">
              <div className="img-box">
                <img src={w2} alt="" />
              </div>
              <div className="detail-box">
                <h5>Secure Investment</h5>
                <p>
                  Entrer le montant Total de ses recharges tout en sélectionnant le nombres de recharges
                </p>
              </div>
            </div>
            <div className="box" data-aos="fade-up" data-aos-duration="1000" data-aos-offset="200">
              <div className="img-box">
                <img src={w3} alt="" />
              </div>
              <div className="detail-box">
                <h5>Instant Trading</h5>
                <p>
                  Entrée soigneusement le(s) code(s) de recharge(s) et votre adresse email. Assurez vous d’avoir correctement remplît le formulaire et cliqués sur le bouton consulter
                </p>
              </div>
            </div>
            <div className="box" data-aos="fade-up" data-aos-duration="1000" data-aos-offset="200">
              <div className="img-box">
                <img src={w4} alt="" />
              </div>
              <div className="detail-box">
                <h5>Happy Customers</h5>
                <p>
                  vous recevrez instantanément un mail de validité
                </p>
              </div>
            </div>
          </div>
          <div className="btn-box">
            {/* <a href="">Read More</a> */}
          </div>
        </div>
      </section>
    </>
  );
}

export default WhyItWork;
