import { Button } from "../../../components/Button/Button";

import { hero } from "../static-data";

function HomeBanner() {
  return (
    <>
      <header>
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
            <img className="animate__animated animate__fadeInRight" src={hero?.heroImage} alt="hero" />
          </div>
          <div className="hero_logos animate__animated  animate__fadeInUp">
            <img src={hero?.heroLogo} alt="logos" />
          </div>
        </section>
      </header>
    </>
  );
}

export { HomeBanner };