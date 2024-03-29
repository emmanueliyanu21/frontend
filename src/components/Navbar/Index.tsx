import { useState } from "react";

import "./Navbar.css";

import { IoMenu, IoCloseSharp } from "react-icons/io5";

import { Link } from "react-router-dom";

type navbarProps = {
  logo: string;
  links: {
    name: string;
    url: string;
  }[];
};

const Navbar = ({ logo, links }: navbarProps): JSX.Element => {
  const [sideNavWidth, setSideNavWidth] = useState("0");

  const openNav = () => {
    setSideNavWidth("100%");
  };

  const closeNav = () => {
    setSideNavWidth("0");
  };

  return (
    <header>
      <div className="AppWrapper">
        <nav className="container" id="navContent">
          <Link to="/">
            <img src={logo} alt="FeanPay" width={"160px"} />
          </Link>
          <ul>
            {links.map((item, index) => (
              <li key={index}>
                <a href={item?.url}>{item?.name}</a>
              </li>
            ))}
          </ul>
          <IoMenu id="openNav" onClick={openNav} />
        </nav>
        <div
          id="sideNav"
          style={{ width: sideNavWidth }}
          className="mobile_nav"
          onClick={closeNav}
        >
          <IoCloseSharp id="closeNav" />
          {links.map((item, index) => (
            <a href={`/${item?.url}`} key={index}>
              {item?.name}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
