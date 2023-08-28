import "./ScrollBanner.css";

type scrollBannerProps = {
  data: {
    image: string;
  }[];
};

const ScrollBanner = ({ data }: scrollBannerProps): JSX.Element => {
  const heroBanner = Array.from({ length: 5 }, () => data).flat();

  return (
    <div className="logo-slider">
      <div className="hero_logos animate__animated  animate__fadeInUp">
        {heroBanner?.map((item, index) => (
          <img className="scroll_image" src={item?.image} alt="logos" />
        ))}
      </div>
    </div>
  );
};

export default ScrollBanner;
