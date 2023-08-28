import Button from "../../../components/Button/Index";

import { HiOutlineArrowRight } from "react-icons/hi";

type serviceDataProps = {
  header: string;
  text: string;
  data: {
    image: string;
    main: string;
    description: string;
    cta: string;
  }[];
  firstDetails: {
    image: string;
    header: string;
    data: {
      icon: JSX.Element;
      text: string;
    }[];
    cta: string;
  };
  secondDetails: {
    image: string;
    header: string;
    data: {
      icon: JSX.Element;
      text: string;
    }[];
    cta: string;
  };
};

const Service = ({
  header,
  text,
  data,
  firstDetails,
  secondDetails,
}: serviceDataProps): JSX.Element => {
  return (
    <div className="AppWrapper">
      <section className="services container">
        <h6>{header}</h6>
        <p>{text}</p>
        <div className="services_service">
          {data.map((item, index) => (
            <article key={index}>
              <img src={item?.image} alt="service1" />
              <h3>{item?.main}</h3>
              <p>{item?.description}</p>
              <a href="/">
                {item?.cta} <HiOutlineArrowRight className="icon" />
              </a>
            </article>
          ))}
        </div>
        <div className="cta-one">
          <img src={firstDetails?.image} alt="cta" />
          <div className="cta-one_content">
            <h1>{firstDetails?.header}</h1>
            <div className="cta-one_points">
              {firstDetails?.data.map((item, index) => (
                <span key={index}>
                  <i className="icon">{item?.icon}</i>
                  <p> {item?.text}</p>
                </span>
              ))}
            </div>
            <Button buttonText={firstDetails?.cta} />
          </div>
        </div>
        <div className="cta-two">
          <img src={secondDetails?.image} alt="cta" />
          <div className="cta-two_content">
            <h1>{secondDetails?.header}</h1>
            {secondDetails?.data.map((item, index) => (
              <div className="cta-two_points" key={index}>
                <span>
                  <i className="icon">{item?.icon}</i> <p>{item?.text}</p>
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Service;
