import React from "react";

const ServiceContent = [
  {
    icon: "icon-target",
    title: "Expert Guidance:",
    descriptions: ` Our team of seasoned consultants provides expert advice, guiding you through the intricacies of the immigration and education process.`,
    delayAnimation: "",
  },
  {
    icon: "icon-desktop",
    title: "Personalized Approach:",
    descriptions: `Recognizing the uniqueness of each client, we tailor our services to meet individual goals, ensuring a personalized and effective strategy.`,
    delayAnimation: "200",
  },
  {
    icon: "icon-clipboard",
    title: "Comprehensive Services:",
    descriptions: `From university selection and admission assistance to visa processing and settlement support, we offer end-to-end solutions for a hassle-free experience.
    `,
    delayAnimation: "400",
  },
];
export default function Service() {
  return (
    <>
      <div className="row">
        {ServiceContent.map((val, i) => (
          <div
            className="col-md-6 col-lg-4 my-3"
            key={i}
            data-aos="fade-right"
            data-aos-duration="1200"
            data-aos-delay={val.delayAnimation}
          >
            <div className="feature-box-01">
              <div className="icon">
                <i className={`icon ${val.icon}`}></i>
              </div>
              <div className="feature-content">
                <h5>{val.title}</h5>
                <p>{val.descriptions}</p>
              </div>
            </div>
            {/* End .feature-box-01 */}
          </div>
        ))}
      </div>
    </>
  );
}
