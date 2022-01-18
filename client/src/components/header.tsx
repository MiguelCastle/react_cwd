import React, {useEffect, useRef, useState} from "react";
import { Link } from "react-router-dom";
import logo from '../assets/images/logo/logo.webp';
interface CloseXProps {
  color: string;
}
const CloseX: React.FC<CloseXProps> = ({ color }) => {
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 32 31"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <title>close</title>
      <g
        id="Page-1"
        stroke="none"
        strokeWidth="0"
        fill="none"
        fillRule="evenodd"
        strokeLinecap="round"
      >
        <g
          id="Desktop"
          transform="translate(-359.000000, -94.000000)"
          stroke={color}
          strokeWidth="4"
        >
          <g id="close" transform="translate(361.000000, 96.000000)">
            <line
              x1="0.827484642"
              y1="7.88860905e-31"
              x2="27.8834613"
              y2="27"
              id="line-two"
            ></line>
            <line
              x1="27.8834613"
              y1="0.139739673"
              x2="0.827484642"
              y2="27.0037932"
              id="line-one"
            ></line>
          </g>
        </g>
      </g>
    </svg>
  );
};

const HamburgerBars = () => {
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 38 29"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <title>Group</title>
      <g
        id="Page-1"
        stroke="none"
        strokeWidth="1"
        fill="none"
        fillRule="evenodd"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <g
          id="Desktop"
          transform="translate(-302.000000, -95.000000)"
          stroke="#fff"
          strokeWidth="4"
        >
          <g id="hamburger-bars" transform="translate(295.000000, 87.000000)">
            <g id="Group" transform="translate(9.000000, 10.000000)">
              <path
                d="M0.153257576,0.913461538 L33.947197,0.913461538 M0.153257576,12.4519231 L33.947197,12.4519231 M0.153257576,23.9903846 L33.947197,23.9903846"
                id="hambars"
              ></path>
            </g>
          </g>
        </g>
      </g>
    </svg>
  );
};

interface HeaderProps {}
const Header: React.FC<HeaderProps> = () => {
  const [menuInView, setMenuInView] = useState(false);
  const menuBtnRef = useRef<HTMLButtonElement>(null!);
  const [navStyle, setNavStyle] = useState("main-menunav");
  const [activeInnerMenus, setActiveInnerMenus] = useState([""]);

  const handleMenuBtnClick = () => {
    setMenuInView(!menuInView);
    setNavStyle("main-menunav slideOutRight");
  };
  const handleDropDownClick = () => {
    if (activeInnerMenus[0] === "") {
      const new_activeInnerMenus = ["open"];
      setActiveInnerMenus(new_activeInnerMenus);
    } else {
      const new_activeInnerMenus = [""];
      setActiveInnerMenus(new_activeInnerMenus);
    }
  };


  return (
    <div className="header-container">
      <img
        src={logo}
        alt="logo of castillo webdevelopment"
      />
      <button className="btn-default" id="hbuy-now-btn">buy now</button>
      <button
        className="btn-default icon-btn"
        id="header-menu-btn"
        ref={menuBtnRef}
        onClick={handleMenuBtnClick}
      >
        <HamburgerBars />
      </button>
      <nav className={menuInView ? "slideInRight main-menunav" : navStyle}>
        <button
          className="btn-default icon-btn"
          id="header-menu-closebtn"
          ref={menuBtnRef}
          onClick={handleMenuBtnClick}
        >
          <CloseX color={"#000"} />
        </button>
        <ul id="mainmenu">
          <li>
            <a href="/#">Home</a>
          </li>
          <li className="has-dropdown" onClick={handleDropDownClick}>
            <a href={"/#hservices-section"} className={activeInnerMenus[0] === 'open' ? 'open': ''}>
              Service
            </a>
            <ul className={activeInnerMenus[0] === 'open' ? 'submenu active': 'submenu'}>
              <li>
                <a href="/main-demo">Main Demo</a>
              </li>
              <li>
                <a href="/dark-main-demo">Main Demo Dark</a>
              </li>
              <li>
                <a href="/personal-portfolio">Personal Portfolio</a>
              </li>
              <li>
                <a href="/interior-landing">Interior Landing</a>
              </li>
              <li>
                <a href="/dark-portfolio-landing">Portfolio One Page 02</a>
              </li>
            </ul>
          </li>
          <li>
            <a href={"/#hproject-section"}>Portfolio</a>
          </li>
          <li>
            <a href={"/#hgrowth-section"}>Why Us</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
