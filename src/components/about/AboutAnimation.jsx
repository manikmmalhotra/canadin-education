import React from "react";
import Social from "../Social";
import Testimonials from "../testimonial/TestimonialAnimation";
import Services from "../service/ServiceAnimation";
import Awards from "../award/AwardsAnimation";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  
} from "react-icons/fa";
import { SiGmail } from "react-icons/si";

import logo from "../../assets/img/logo.png";

const About = () => {
  return (
    <>
       <section className="section theme-light dark-bg">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            
            <div className="col-md-6 col-lg-4">
              <div id="about" className="about-me">
                <div className="img">
                  <div className="img-in">
                    <img src={logo} alt="about" />
                  </div>
                  
                  {/* End social icon */}
                </div>
                {/* End img */}
                
                {/* End info */}
              </div>
              {/* End about-me */}
            </div>
            {/* End col */}

            <div className="col-lg-7 ml-auto">
              <div className="about-info">
                <div className="title">
                  <h3>About Us</h3>
                </div>
                <div className="about-text">
                  <p>
                  Welcome to Canadin Education, your go-to destination for seamless education immigration solutions. As a premier provider committed to global education empowerment, we serve as a guiding light for individuals aspiring to study abroad and carve out a successful future. 
                  </p>
                  <p>
                  Our experts bring extensive experience in education and immigration, ensuring a smooth transition for students and professionals. We stay updated on evolving policies and educational landscapes to provide clients with the knowledge needed to make informed decisions at every step of their educational journey.
                  </p>
                  
                </div>
                <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",width:"50%"}} className="social-cons">
                    <a style={{fontSize:"23px",color:"#3b5998"}}>
                      <FaFacebookF />
                    </a>
                    <a style={{fontSize:"23px",color:"#406e94"}} href="https://www.instagram.com/canadineducation">
                      <FaInstagram />
                    </a>
                    <a style={{fontSize:"23px",color:"#007bb6"}}>
                      <FaLinkedinIn />
                    </a>
                    <a style={{fontSize:"23px",color:"#55acee"}}>
                      <FaTwitter />
                    </a>
                    <a style={{fontSize:"23px",color:"#9e0010"}}>
                      <SiGmail />
                    </a>
                  </div>
              </div>
            </div>
            {/* End col */}
          </div>

          {/* separated */}
          <div
            className="separated"
            style={{
              backgroundImage: `url(${
                process.env.PUBLIC_URL + "img/border-dark.png"
              })`,
            }}
          ></div>
          {/* End separated */}
          <div  className="title">
            <h3>What We do?</h3>
          </div>
          <Services />
          {/* End .row */}

          {/* separated */}
          <div id="team"
            className="separated"
            style={{
              backgroundImage: `url(${
                process.env.PUBLIC_URL + "img/border-dark.png"
              })`,
            }}
          ></div>
          {/* End separated */}

          <div  className="title">
            <h3>Our Team</h3>
          </div>
          <Awards />
          {/* End Awards */}

          {/* separated */}
          <div
            className="separated"
            style={{
              backgroundImage: `url(${
                process.env.PUBLIC_URL + "img/border-dark.png"
              })`,
            }}
          ></div>
          {/* End separated */}

          <div className="title">
            <h3>Testimonials.</h3>
          </div>
          <Testimonials />
          {/* End Testimonaial */}
        </div>
      </section>
    </>
  );
};

export default About;
