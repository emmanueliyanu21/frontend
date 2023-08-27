import { useState, useRef } from "react";

import { testimonial } from "../static-data";

import Customer from "../../../assets/cta3.png";

function Testimonial({step = 400}) {
  const [isExpanded, setIsExpanded] = useState(
    Array(testimonial?.main?.data.length).fill(false)
  );
  const [progress, setProgress] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  const toggleAccordion = (index: any) => {
    const updatedExpanded = [...isExpanded];
    updatedExpanded[index] = !updatedExpanded[index];
    setIsExpanded(updatedExpanded);
  };

  const content =
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat quia excepturi necessitatibus";

  const getProgress = (current: HTMLDivElement) =>
    (current.scrollLeft / (current.scrollWidth - current.clientWidth)) * 100;

  const handleScroll = (navigation?: string) => {
    const { current } = carouselRef;
    let scroll = navigation && navigation === "left" ? -step : step;
    if (current) {
      if (navigation) current.scrollLeft += scroll;
      let progressValue = getProgress(current);
      setProgress(progressValue);
    }
  };

  return (
    <>
      <section className="testimonials ">
        <div className="AppWrapper">
        <div className="testimonials_heading container">
          <h1>{testimonial?.header}</h1>
          <span className="hidden-900">
            <i
              onClick={() => handleScroll("left")}
              className={`icon ${progress === 0 ? "disabled" : ""}`}
            >
              {testimonial?.icon1}
            </i>
            <i
              onClick={() => handleScroll("right")}
              className={`icon ${progress === 100 ? "disabled" : ""}`}
            >
              {testimonial?.icon2}
            </i>
          </span>
        </div>
        <div
          id="carousel_content"
          ref={carouselRef}
          onScroll={() => handleScroll()}
          className="testimonials_main container"
        >
          {testimonial?.data.map((item, index) => (
            <article key={index}>
              <p>“{item?.main}”</p>
              <div className="testimonials_profile">
                <img src={item?.image} alt="albus" />
                <span>
                  <p>{item?.textName}</p>
                  <p>{item?.textRole}</p>
                </span>
              </div>
            </article>
          ))}
        </div>
        </div>
      </section>
      <div className="AppWrapper">
      <div className=" cta-three container">
        <img src={Customer} alt="cta" />
        <div className="cta-three_content">
          <h1>{testimonial?.main?.header}</h1>
          <div>
            {testimonial?.main?.data.map((item, index) => (
              <div
                className="cta-three_accordion"
                key={index}
                onClick={() => toggleAccordion(index)}
              >
                <span>
                  <p>{item?.text}</p>
                  <i className={`icon ${isExpanded ? 'is_expanded' : ''}`}>
                    {isExpanded[index] ? item?.icon : item?.icon2}
                  </i>
                </span>
                <p>
                  {isExpanded[index] && (
                    <div className="accordion-content">{content}</div>
                  )}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      </div>
    </>
  );
}

export default Testimonial;
