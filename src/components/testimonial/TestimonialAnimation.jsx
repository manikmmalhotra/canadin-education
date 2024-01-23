import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function SimpleSlider() {
  const settings = {
    dots: true,
    arrow: false,
    infinite: true,
    speed: 900,
    slidesToShow: 2,
    slidesToScroll: 2,
    autoplay: false,
    margin: 30,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 420,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const TestimonilContent = [
    {
      imageName: "team-1",
      desc: `We have had an outstanding experience with Canadin Education. The team's profound understanding of the education landscape, combined with individualized guidance, has been instrumental in assisting our students through the intricate college admissions process. We highly endorse their services for individuals seeking expert advice and support`,
      reviewerName: "Nancy Byers",
      designation: "CEO at ib-themes",
      delayAnimation: "",
    },
    {
      imageName: "team-2",
      desc: `We extend sincere appreciation for the support and direction offered by Canadin Education. Their comprehensive comprehension of academic pathways and unwavering commitment to student success set them apart. The team's devoted efforts to empower students in making well-informed decisions about their education are truly commendable.`,
      reviewerName: "Jara Afsari",
      designation: "CEO at ib-themes",
      delayAnimation: "200",
    },
    {
      imageName: "team-3",
      desc: `We extend sincere appreciation for the support and direction offered by Canadin Education. Their comprehensive comprehension of academic pathways and unwavering commitment to student success set them apart. The team's devoted efforts to empower students in making well-informed decisions about their education are truly commendable.`,
      reviewerName: "Jara Afsari",
      designation: "CEO at ib-themes",
      delayAnimation: "200",
    },
    {
      imageName: "team-4",
      desc: `I had the privilege of collaborating with Canadin Education for professional development workshops for our teaching staff. The insights they shared were both inspiring and practical, elevating the skills and approaches of our educators. Their dedication to cultivating educational excellence is evident in every facet of their work.`,
      reviewerName: "Janiaya kiaram",
      designation: "Visual Designer",
      delayAnimation: "400",
    },
  ];

  return (
    <div className="testimonial-wrapper">
      <Slider {...settings}>
        {TestimonilContent.map((val, i) => (
          <div
            key={i}
            data-aos="fade-up"
            data-aos-duration="1200"
            data-aos-delay={val.delayAnimation}
          >
            <div className="testimonial-01 media">
              <div className="avatar">
                <img
                  src={`https://nairo.ibthemespro.com/img/testimonial/${val.imageName}.jpg`}
                  alt="review comments"
                ></img>
              </div>
              <div className="media-body">
                <p>{val.desc}</p>
                <h6>{val.reviewerName}</h6>
                <span>{val.designation}</span>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
