import React from "react";

const AwardContnet = [
  {
    img: "me",
    awardName: "Devendra Deshmukh",
    awardFor: "Education Consultant ( MBA, CPHR)",
  },
  {
    img: "me",
    awardName: "Deepak Shoor",
    awardFor: "Education Consultant ( MBA, CPHR)",
  },
];

const Awards = () => {
  return (
    <>
      <div  className="row">
        {AwardContnet.map((val, i) => (
          <div
            className="col-lg-6 m-15px-tb"
            key={i}
            data-aos="fade-right"
            data-aos-duration="1200"
            data-aos-delay={val.delayAnimation}
          >
            <div className="feature-box-02 d-flex align-items-center">
              <div className="icon">
                <img src={`img/award/${val.img}.png`} alt="award" />
              </div>
              <div className="media-body">
                <h6>{val.awardName}</h6>
                <p>{val.awardFor}</p>
              </div>
            </div>
          </div>
          // End .col
        ))}
      </div>
      {/* End .row */}
    </>
  );
};

export default Awards;
