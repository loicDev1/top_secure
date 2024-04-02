// import w1 from '../assets/img/w1.png'
// import w2 from '../assets/img/w2.png'
// import w3 from '../assets/img/w3.png'
// import w4 from '../assets/img/w4.png'
import img1 from '../assets/img/1.svg'
import img2 from '../assets/img/two-svgrepo-com.svg'
import img3 from '../assets/img/three-svgrepo-com.svg'
import img4 from '../assets/img/four-svgrepo-com.svg'

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
              <div className="img-box" style={{borderColor:'1px solid red'}}>
                <img src={img1} style={{height:'100px',width:'200px'}} alt="" />
              </div>
              <div className="detail-box">
                <h5>Choix du type de carte</h5>
                <p>
                  choisir le type de la carte prépayée
                </p>
              </div>
            </div>
            <div className="box" data-aos="fade-up" data-aos-duration="1000" data-aos-offset="200">
              <div className="img-box">
                <img src={img2} style={{height:'100px',width:'200px'}} alt="" />
              </div>
              <div className="detail-box">
                <h5>Indiquer le montant</h5>
                <p>
                  Entrer le montant Total de ses recharges tout en sélectionnant le nombres de recharges
                </p>
              </div>
            </div>
            <div className="box" data-aos="fade-up" data-aos-duration="1000" data-aos-offset="200">
              <div className="img-box">
                <img src={img3} style={{height:'100px',width:'200px'}} alt="" />
              </div>
              <div className="detail-box">
                <h5>Inserer votre code</h5>
                <p>
                  Entrée soigneusement le(s) code(s) de recharge(s) et votre adresse email. Assurez vous d’avoir correctement remplît le formulaire et cliqués sur le bouton consulter
                </p>
              </div>
            </div>
            <div className="box" data-aos="fade-up" data-aos-duration="1000" data-aos-offset="200">
              <div className="img-box">
                <img src={img4} style={{height:'100px',width:'200px'}} alt="" />
              </div>
              <div className="detail-box">
                <h5>Délais</h5>
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
