import { footer } from "../../modules/Home/static-data";
import Button from "../Button/Index";

import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <footer className="container">
        <div className="footer_main">
          <img src={footer?.logo} alt="" />
          <p>{footer?.text}</p>
          <p>{footer?.caption}</p>
        </div>
        {footer?.data.map((item, index) => (
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
    </>
  );
}

export default Footer;
