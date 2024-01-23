import React from "react";

const Map = () => {
  return (
    <>
      <div className="google-map">
        <div className="embed-responsive embed-responsive-21by9">
          <iframe
            className="embed-responsive-item"
            title="location title"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2194.43885724421!2d-122.86926440799405!3d49.15041550522096!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5485d99d1f7ce755%3A0x8b136d7f8b531d21!2s8120%20128%20St%20%2322b%2C%20Surrey%2C%20BC%20V3W%204E9%2C%20Canada!5e0!3m2!1sen!2sin!4v1706018348961!5m2!1sen!2sin"
          ></iframe>
        </div>
      </div>
      {/* End google-map */}
    </>
  );
};

export default Map;
