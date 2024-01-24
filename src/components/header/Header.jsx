import React, { useState } from "react";
import Scrollspy from "react-scrollspy";
import { Link } from "react-router-dom";
import ReactTooltip from "react-tooltip";
import {
  FiUser,
  FiBriefcase,
  FiFileText,
  FiPhoneOutgoing, 
} from "react-icons/fi";
import { FaHome, FaBlog,FaSun,FaMoon  } from "react-icons/fa";
import logo from "../../assets/img/logo1.png";

const Header = (ligh) => {
  var list = true;

  
  const [light,SetLight] = useState(list);
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const handleLight = () => {
    SetLight(!light);
    // if(){
    //   list = false;
    // }
  };

  return (
    <>
      {/* Header */}
      <div className="mob-header">
        <button className="toggler-menu" onClick={handleClick}>
          <div className={click ? "active" : ""}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </button>
      </div>
      {/* End Header */}

      {/* nav bar */}
      <header className={click ? "header-left menu-open" : "header-left "}>
        <div className="scroll-bar">
          <div className="hl-top">
            <div className="hl-logo">
              <img src={logo}   />
            </div>
          </div>
          {/* End htl-top */}

          <Scrollspy
            className="nav nav-menu"
            items={["home", "about", "team", "work", "blog", "contactus",]}
            currentClassName="active"
            offset={-30}
          >
            <li>
              <a
                className="nav-link "
                href="#home"
                data-tip
                data-for="HOME"
                onClick={handleClick}
              >
                <FaHome />
                <ReactTooltip
                  id="HOME"
                  place="right"
                  type="dark"
                  effect="float"
                >
                  <span>Home</span>
                </ReactTooltip>
              </a>
            </li>
            <li>
              <a
                className="nav-link"
                href="#about"
                data-tip
                data-for="ABOUT"
                onClick={handleClick}
              >
              <FiFileText />
                <ReactTooltip
                  id="ABOUT"
                  place="right"
                  type="dark"
                  effect="float"
                >
                  <span>About</span>
                </ReactTooltip>
              </a>
            </li>
            <li>
              <a
                className="nav-link"
                href="#team"
                data-tip
                data-for="TEAM"
                onClick={handleClick}
              >
              <FiUser />
                 
                <ReactTooltip
                  id="TEAM"
                  place="right"
                  type="dark"
                  effect="float"
                >
                  <span>Team</span>
                </ReactTooltip>
              </a>
            </li>
            <li>
              <a
                className="nav-link"
                href="#work"
                data-tip
                data-for="WORK"
                onClick={handleClick}
              >
               <FiBriefcase />
                <ReactTooltip
                  id="WORK"
                  place="right"
                  type="dark"
                  effect="float"
                >
                  <span>Universities</span>
                </ReactTooltip>
              </a>
            </li>
            <li>
              <a
                className="nav-link"
                href="#blog"
                data-tip
                data-for="BLOG"
                onClick={handleClick}
              >
                <FaBlog />
                <ReactTooltip
                  id="BLOG"
                  place="right"
                  type="dark"
                  effect="float"
                >
                  <span>Blog</span>
                </ReactTooltip>
              </a>
            </li>
            <li>
              <a
                className="nav-link"
                href="#contactus"
                data-tip
                data-for="CONTACT"
                onClick={handleClick}
              >
                <FiPhoneOutgoing />
                <ReactTooltip
                  id="CONTACT"
                  place="right"
                  type="dark"
                  effect="float"
                >
                  <span>Contact</span>
                </ReactTooltip>
              </a>
            </li>
            {/* `<li>
              {
                document.getElementsByClassName("theme-light").length >7 ? <a
                className="nav-link"
                href="/home-dark-animation"
                onClick={handleLight}
              >
                <FaSun   />
              </a> : <a
                className="nav-link"
                href="/home-light-animation"
                onClick={handleLight}
              >
                <FaSun   />
              </a>
              }
            </li>` */}
          </Scrollspy>
        </div>
      </header>
      {/* End Header */}
    </>
  );
};

export default Header;
