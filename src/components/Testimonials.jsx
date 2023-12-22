import React, { useState } from "react";
import { TestItem } from "../helpers/TestItem";

export const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const items = [
    {
      icon: require("../assets/Review.svg"),
      name: "Mark",
      blockquote: "Hopefully good things",
    },

    {
      icon: require("../assets/Review.svg"),
      name: "isabel",
      blockquote: "Probably not a bad thing",
    },

    {
      icon: require("../assets/Review.svg"),
      name: "Mark",
      blockquote: "Hopefully good things",
    },
  ];

  const updateIndex = (newIndex) => {
    if (newIndex < 0) {
      newIndex = 0;
    } else if (newIndex >= items.length) {
      newIndex = items.length - 1;
    }

    setActiveIndex(newIndex);
  };

  return (
    <div className="testimonial">
      <div
        className="inner"
        style={{ transform: `translate:(-${activeIndex * 100}%)` }}
      >
        {items.map((item) => {
          return <TestItem item={item} width={"100%"} />;
        })}
      </div>

      <div className="carousel-buttons">
        <button
          onClick={() => {
            updateIndex(activeIndex - 1);
          }}
          className="button-chev"
        >
          <span className={`material-symbols-outlined`}>chevron_left</span>
        </button>
        <div className="indicators">
          {items.map((item, index) => {
            return (
              <button
                onClick={() => {
                  updateIndex(index);
                }}
                className="indicator-buttons"
              >
                <span
                  className={`material-symbols-outlined ${
                    index === activeIndex
                      ? "indicator-symbol-active"
                      : "indicator-symbol"
                  }
                `}
                >
                  radio_button_checked
                </span>
              </button>
            );
          })}
        </div>
        <button
          className="button-chev"
          onClick={() => {
            updateIndex(activeIndex + 1);
          }}
        >
          <span className={`material-symbols-outlined`}>chevron_right</span>
        </button>
      </div>
    </div>
  );
};
