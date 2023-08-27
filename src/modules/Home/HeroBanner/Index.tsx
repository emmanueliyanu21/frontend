import Button from "../../../components/Button/Index";
import ScrollBanner from "../../../components/ScrollBanner/Index";

import { hero } from "../static-data";

function HomeBanner() {
  return (
    <div className="AppWrapper">
      <section className="hero container">
        <div className="hero_main ">
          <div className="hero_content animate__animated animate__fadeInLeft">
            <h1>{hero?.header}</h1>
            <p>{hero?.text}</p>
            <span>
              <Button buttonText={hero?.cta1} />
              <Button buttonText={hero?.cta2} />
            </span>
          </div>
          <img
            className="animate__animated animate__fadeInRight"
            src={hero?.heroImage}
            alt="hero"
          />
        </div>
        <ScrollBanner data={hero?.heroBanner} />
      </section>
    </div>
  );
}

export default HomeBanner;
