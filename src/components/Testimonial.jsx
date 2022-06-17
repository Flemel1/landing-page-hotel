import { useState } from "react";
import TestimonialCard from "./TestimonialCard";
import { handleClick } from "../utils/helpers";

const Testimonial = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const items = [1, 2, 3];

  return (
    <div className="testimonial">
      <h2>Let’s check testimonial from our customers</h2>
      <div className="testimonial__grid">
        <TestimonialCard className={"testimonial"} />
        <TestimonialCard className={"testimonial"} />
        <TestimonialCard className={"testimonial"} />
        <TestimonialCard className={"testimonial"} />
      </div>
      <div className="testimonial__indicator">
        {items.map((_, index) => {
          if (index === selectedIndex) {
            return (
              <div className="testimonial__indicator__item--selected"></div>
            );
          } else {
            return (
              <div
                className="testimonial__indicator__item"
                onClick={() => handleClick(index, setSelectedIndex)}
              ></div>
            );
          }
        })}
      </div>
    </div>
  );
};

export default Testimonial;
