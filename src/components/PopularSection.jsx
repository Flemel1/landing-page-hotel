import { useState } from "react";
import RegularCard from "./RegularCard";
import { handleClick } from "../utils/helpers";

const PopularSection = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const items = [1, 2, 3];

  return (
    <div className="popular">
      <h2>Popular Hotel</h2>
      <div className="popular__grid">
        {[1, 2, 3, 4].map(() => {
          return <RegularCard className={"popular"} />;
        })}
      </div>
      <div className="popular__indicator">
        {items.map((_, index) => {
          if (index === selectedIndex) {
            return <div className="popular__indicator__item--selected"></div>;
          } else {
            return (
              <div
                className="popular__indicator__item"
                onClick={() => handleClick(index, setSelectedIndex)}
              ></div>
            );
          }
        })}
      </div>
    </div>
  );
};

export default PopularSection;
