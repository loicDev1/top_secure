import w1 from '../assets/img/w1.png'
import w2 from '../assets/img/w2.png'
import w3 from '../assets/img/w3.png'
import w4 from '../assets/img/w4.png'

function WhyUs() {
  return (
    <>
      <section className="why_section layout_padding">
        <div className="container">
          <div className="heading_container heading_center">
            <h2 data-aos="zoom-in" data-aos-duration="1000" data-aos-offset="200">
              Pourquoi choisir <span>TopSecure</span>
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
                  Incidunt odit rerum tenetur alias architecto asperiores omnis
                  cumque doloribus aperiam numquam! Eligendi corrupti, molestias
                  laborum dolores quod nisi vitae voluptate ipsa? In tempore
                  voluptate ducimus officia id, aspernatur nihil. Tempore
                  laborum nesciunt ut veniam, nemo officia ullam repudiandae
                  repellat veritatis unde reiciendis possimus animi autem natus
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
                  Incidunt odit rerum tenetur alias architecto asperiores omnis
                  cumque doloribus aperiam numquam! Eligendi corrupti, molestias
                  laborum dolores quod nisi vitae voluptate ipsa? In tempore
                  voluptate ducimus officia id, aspernatur nihil. Tempore
                  laborum nesciunt ut veniam, nemo officia ullam repudiandae
                  repellat veritatis unde reiciendis possimus animi autem natus
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
                  Incidunt odit rerum tenetur alias architecto asperiores omnis
                  cumque doloribus aperiam numquam! Eligendi corrupti, molestias
                  laborum dolores quod nisi vitae voluptate ipsa? In tempore
                  voluptate ducimus officia id, aspernatur nihil. Tempore
                  laborum nesciunt ut veniam, nemo officia ullam repudiandae
                  repellat veritatis unde reiciendis possimus animi autem natus
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
                  Incidunt odit rerum tenetur alias architecto asperiores omnis
                  cumque doloribus aperiam numquam! Eligendi corrupti, molestias
                  laborum dolores quod nisi vitae voluptate ipsa? In tempore
                  voluptate ducimus officia id, aspernatur nihil. Tempore
                  laborum nesciunt ut veniam, nemo officia ullam repudiandae
                  repellat veritatis unde reiciendis possimus animi autem natus
                </p>
              </div>
            </div>
          </div>
          <div className="btn-box">
            <a href="">Read More</a>
          </div>
        </div>
      </section>
    </>
  );
}

export default WhyUs;
