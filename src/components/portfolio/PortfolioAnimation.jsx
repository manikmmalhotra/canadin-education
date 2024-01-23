import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { Gallery, Item } from "react-photoswipe-gallery";
import "photoswipe/dist/photoswipe.css";
import { FiLink } from "react-icons/fi";
import Masonry from "react-masonry-css";

const breakpointColumnsObj = {
  default: 3,
  1100: 3,
  700: 2,
  500: 1,
};

const tabList = ["All", "Canada", "India", "Australia", "New- Zealand", "UK", "USA", "Russia", "Singapore", "China"];
const tabListContent = [
  {
    porftoliItems: [
      {
        img: "data:image/png;base64,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",
        width: 400,
        height: 550,
        title: "Western Community College (WCC)",
        subTitle: "University",
        alterText: "Bottle Illustration",
        delayAnimation: "",
        portfolioLink:
          "https://wcc.ca/",
      },
    ],
  },
  {
    porftoliItems: [
      {
        img: "data:image/png;base64,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",
        width: 400,
        height: 550,
        title: "Western Community College (WCC)",
        subTitle: "University",
        alterText: "Bottle Illustration",
        delayAnimation: "",
        portfolioLink:
          "https://wcc.ca/",
      },
    ],
  },
];

const PortfolioAnimation = () => {
  return (
    <div className="portfolio-filter-01">
      <Tabs>
        <TabList className="filter d-flex flex-wrap justify-content-start">
          {tabList.map((val, i) => (
            <Tab key={i}>{val}</Tab>
          ))}
        </TabList>
        {/* End tablist */}
        <Gallery>
          {tabListContent.map((tabContent, i) => (
            <TabPanel key={i}>
              <div className="portfolio-content ">
                <Masonry
                  breakpointCols={breakpointColumnsObj}
                  className="my-masonry-grid"
                  columnClassName="my-masonry-grid_column"
                >
                  {tabContent.porftoliItems.map((val, i) => (
                    <div
                      className="portfolio-box-01"
                      key={i}
                      data-aos="fade-right"
                      data-aos-duration="1200"
                      data-aos-delay={val.delayAnimation}
                    >
                      <div className="portfolio-img">
                        <div className="portfolio-info">
                          <h5>
                            <a
                              href={val.portfolioLink}
                              target="_blank"
                              rel="noreferrer"
                            >
                              {val.title}
                            </a>
                          </h5>
                          <span>{val.subTitle}</span>
                        </div>
                        {/* End .portfolio-info */}
                        <Item
                          original={val.img}
                          thumbnail={val.img}
                          width={val.width}
                          height={val.height}
                        >
                          {({ ref, open }) => (
                            <div className="gallery-link">
                              <img
                                src={val.img}
                                alt="Childhood"
                                role="button"
                                ref={ref}
                                onClick={open}
                              />
                            </div>
                          )}
                        </Item>

                        <a
                          className="portfolio-icon"
                          href={val.portfolioLink}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <FiLink />
                        </a>
                        {/* End .portfolio-icon */}
                      </div>
                    </div>
                  ))}
                </Masonry>
              </div>
              {/* End list wrapper */}
            </TabPanel>
          ))}
        </Gallery>
        {/* End tabpanel */}
      </Tabs>
    </div>
  );
};

export default PortfolioAnimation;
