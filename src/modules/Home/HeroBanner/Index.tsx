import Button from "../../../components/Button/Index";

import ScrollBanner from "../../../components/ScrollBanner/Index";

type heroBannerProps = {
  header: string;
  text: string;
  cta1: string;
  cta2: string;
  heroImage: string;
  heroBanner: {
    image: string;
  }[];
};

const HomeBanner = ({
  header,
  text,
  cta1,
  cta2,
  heroImage,
  heroBanner,
}: heroBannerProps): JSX.Element => {
  return (
    <div className="AppWrapper">
      <section className="hero container">
        <div className="hero_main ">
          <div className="hero_content animate__animated animate__fadeInLeft">
            <h1>{header}</h1>
            <p>{text}</p>
            <span>
              <Button buttonText={cta1} />
              <Button buttonText={cta2} />
            </span>
          </div>
          <img
            className="animate__animated animate__fadeInRight"
            src={heroImage}
            alt="hero"
          />
        </div>
        <ScrollBanner data={heroBanner} />
      </section>
    </div>
  );
};

export default HomeBanner;
