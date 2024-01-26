import React from "react";
import TextLoop from "react-text-loop";
import Homee from "../../assets/img/clg.png";
import logo from "../../assets/img/logo1.png";

const conctInfo = {
  phone: "778-917-1621, 604-749-2977, 236-777-6356",
  email: "Deepakshoor0006@gmail.com,  Devadeshmukh204@gmail.com",
};

const sliderContent = {
  name: "Canadin Education",
  description: `Embrace the journey of knowledge, where every step with us becomes a milestone towards a brighter future. In the vast realm of Canadian education, let your aspirations soar, guided by the wisdom of Canadin Education. Your dreams, our expertise – a partnership destined for success.`,
  btnText: "Contact Us",
};

const Slider = () => {
  return (
    <>
      {/*  Home Banner */}
      <section id="home" className="home-banner">
        <div className="hb-top-fixed d-flex">
          {/* <div className="hb-info">
            <a href="tel:778-917-1621">{conctInfo.phone}</a>
            <a href="mailto:mail%20to:Deepakshoor0006@gmail.com,com">
              {conctInfo.email}
            </a>
          </div> */}
          <div className="hl-top">
            <div className="hl-logo">
              <img src={logo}   />
            </div>
          </div>
        </div>
        {/* End hp-top-fixed */}

        <div className="container">
          <div className="row full-screen align-items-center">
            <div className="col-lg-7">
              <div className="type-box">
                <h1
                  className="font-alt"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                  data-aos-delay="100"
                >
                  {sliderContent.name}
                </h1>
                <div
                >
                  
                    <p className="loop-text lead">Make It Happen</p>
                   
                 
                </div>

                <p
                  className="desc"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                  data-aos-delay="300"
                >
                  {sliderContent.description}
                </p>
                <div
                  className="mt-4"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                  data-aos-delay="400"
                >
                  <a
                    className="px-btn px-btn-white"
                    href="mailto:mail%20to:info@canadineducation.ca"
                    download
                  >
                    {sliderContent.btnText}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Container*/}
        <div
          className="hb-me"
          style={{
            backgroundImage: `url(${Homee})`,
          }}
        ></div>
      </section>

      {/* End Home Banner  */}
    </>
  );
};

export default Slider;
