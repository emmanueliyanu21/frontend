import { useState } from "react";

import { testimonial } from "../static-data";

import Customer from "../../../assets/cta3.png";

function Testimonial() {
  const [isExpanded, setIsExpanded] = useState(
    Array(testimonial?.main?.data.length).fill(false)
  );

  const toggleAccordion = (index: any) => {
    const updatedExpanded = [...isExpanded];
    updatedExpanded[index] = !updatedExpanded[index];
    setIsExpanded(updatedExpanded);
  };

  const content =
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat quia excepturi necessitatibus";

  return (
    <main>
      <section className="testimonials">
        <div className="testimonials_heading container">
          <h1>{testimonial?.header}</h1>
          <span className="hidden-900">
            <i className="icon">{testimonial?.icon1}</i>
            <i className="icon">{testimonial?.icon2}</i>
          </span>
        </div>
        <div className="testimonials_main container">
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
      </section>
      <div className="cta-three container">
        <img src={Customer} alt="cta" />
        <div className="cta-three_content">
          <h1>{testimonial?.main?.header}</h1>
          <div >
            {testimonial?.main?.data.map((item, index) => (
              <div className="cta-three_accordion" key={index} onClick={() => toggleAccordion(index)}>
                <span>
                  <p>{item?.text}</p>
                  <i className="icon">
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
    </main>
  );
}

export default Testimonial;
