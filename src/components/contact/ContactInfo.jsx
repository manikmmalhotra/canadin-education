import React from "react";

const ContactInfo = () => {
  return (
    <>
      <div className="contact-info">
        <h4>What’s your story? Get in touch</h4>
        <p>
        Unlock Your Future, Excel with Us: Your Gateway to Canadian Education!
        </p>

        <ul>
          <li className="media">
            <i className="icon icon-map"></i>
            <span className="media-body">
            Unit 22B,  8120 128 St, Surrey, BC V3W 5L7.
            </span>
          </li>
          {/* End li */}

          <li className="media">
            <i className="icon icon-envelope"></i>
            <span className="media-body"> Devadeshmukh204@gmail.com</span>
          </li>
          <li className="media">
            <i className="icon icon-envelope"></i>
            <span className="media-body"> Deepakshoor0006@gmail.com</span>
          </li>
          {/* End li */}

          <li className="media">
            <i className="icon icon-phone"></i>
            <span className="media-body">778-917-1621, 604-749-2977, 236-777-6356</span>
          </li>
          {/* End li */}
        </ul>
      </div>
      {/* End .contact-info */}
    </>
  );
};

export default ContactInfo;
