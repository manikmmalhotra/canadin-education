import React from "react";
import TextLoop from "react-text-loop";

const conctInfo = {
  phone: "+999999999",
  email: "educationalconsultancy@gmail.com",
};

const sliderContent = {
  name: "Canadin Education",
  description: `Welcome to Canadin Education, your trusted partner in navigating the diverse and enriching landscape of Canadian education. As a premier educational consultancy, we specialize in providing tailored guidance and support to students aspiring to pursue their academic journey in Canada. Our team of experienced professionals is committed to facilitating seamless transitions into the Canadian education system, ensuring that each student's unique aspirations and goals are met. Whether you are seeking information on top universities, programs, or navigating the application process, [Consultancy Name] is here to empower you with the knowledge and resources needed for a successful educational experience in the vibrant and welcoming environment that Canada has to offer. Explore boundless possibilities with us as we pave the way for your educational success in the Great White North.`,
  btnText: "Contact Us",
};

const Slider = () => {
  return (
    <>
      {/*  Home Banner */}
      <section id="home" className="home-banner">
        <div className="hb-top-fixed d-flex">
          <div className="hb-info">
            <a href="tel:+04 6545-9535-6515">{conctInfo.phone}</a>
            <a href="mailto:mail%20to:ibthemes21@gmail.com,com">
              {conctInfo.email}
            </a>
          </div>
          <div className="hb-lang">
            <ul className="nav">
              <li className="active">
                <a href="#">EN</a>
              </li>
              <li>
                <a href="#">FR</a>
              </li>
            </ul>
          </div>
        </div>
        {/* End hp-top-fixed */}

        <div className="container">
          <div className="row full-screen align-items-center">
            <div className="col-lg-7">
              <div className="type-box">
                <h6>Hello, My name is</h6>
                <h1 className="font-alt">{sliderContent.name}</h1>
                <TextLoop>
                  <p className="loop-text lead">Full-stack Developer</p>
                  <p className="loop-text lead"> UI/UX Designer</p>
                  <p className="loop-text lead"> App Developer</p>
                </TextLoop>{" "}
                <p className="desc">{sliderContent.description}</p>
                <div className="mt-4">
                  <a
                    className="px-btn px-btn-white"
                    href="img/resume.png"
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
            backgroundImage: `url(${
              process.env.PUBLIC_URL + "img/slider/home-banner.png"
            })`,
          }}
        ></div>
      </section>

      {/* End Home Banner  */}
    </>
  );
};

export default Slider;
