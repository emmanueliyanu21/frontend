import Button from "../Button/Index";

import "./Footer.css";

import { Link } from "react-router-dom";

type footerProps = {
    logo: string;
    text: string;
    caption: string;
    data: {
        header: string;
        links: {
            name: string;
            url: string;
        }[];
    }[];
}

const Footer = ({logo, text, caption, data }: footerProps): JSX.Element => {
  return (
    <div className="AppWrapper">
      <footer className="container">
        <div className="footer_main">
          <img src={logo} alt="" />
          <p>{text}</p>
          <p>{caption}</p>
        </div>
        {data.map((item, index) => (
          <div className="footer_section" key={index}>
            <h4>{item?.header}</h4>
            <ul>
              {item?.links.map((item, index) => (
                <li key={index}>
                  <Link to={`/${item?.url}`}>{item?.name}</Link>
                  {item?.name === "Careers" ? (
                    <Button buttonText="Hiring!" />
                  ) : (
                    ""
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </footer>
    </div>
  );
}

export default Footer;
