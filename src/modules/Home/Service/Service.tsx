import { Button } from "../../../components/Button/Button";
import { serviceData } from "../static-data";

import { HiOutlineArrowRight } from "react-icons/hi";

function Service() {
  return (
    <>
      <section className="services container">
        <h6>{serviceData?.header}</h6>
        <p>{serviceData?.text}</p>
        <div className="services_service">
          {serviceData?.data.map((item, index) => (
            <article key={index}>
              <img src={item?.image} alt="service1" />
              <h3>{item?.main}</h3>
              <p>{item?.description}</p>
              <a href="/">
                {item?.cta} <HiOutlineArrowRight />
              </a>
            </article>
          ))}
        </div>
        <div className="cta-one">
          <img src={serviceData?.firstDetails?.image} alt="cta" />
          <div className="cta-one_content">
            <h1>{serviceData?.firstDetails?.header}</h1>
            <div className="cta-one_points">
              {serviceData?.firstDetails?.data.map((item, index) => (
                <span key={index}>
                  <i className="icon">{item?.icon}</i>
                  <p> {item?.text}</p>
                </span>
              ))}
            </div>
            <Button buttonText={serviceData?.firstDetails?.cta} />
          </div>
        </div>
        <div className="cta-two">
          <img src={serviceData?.secondDetails?.image} alt="cta" />
          <div className="cta-two_content">
            <h1>{serviceData?.secondDetails?.header}</h1>
            {serviceData?.secondDetails?.data.map((item, index) => (
              <div className="cta-two_points" key={index}>
                <span>
                  <i className="icon">{item?.icon}</i> <p>{item?.text}</p>
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export { Service };
