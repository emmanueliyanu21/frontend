import React from "react";

type scrollBannerProps = {
    data: {
        image: string
    }[]
}

const ScrollBanner = ({data}: scrollBannerProps): JSX.Element =>  {
    const heroBanner = Array.from({ length: 5 }, () => data).flat();;

  return (
    <>
      <div className="hero_logos animate__animated  animate__fadeInUp">
      {heroBanner?.map((item, index) => (
        <img key={index} src={item?.image} alt="logos" />
        ))}
      </div>
    </>
  );
}

export default ScrollBanner;
