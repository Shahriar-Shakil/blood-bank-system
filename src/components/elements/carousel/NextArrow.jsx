import React from "react";
import { FaAngleRight } from "react-icons/fa";
const NextArrow = (props) => {
  const { className, onClick, icon } = props;
  return (
    <button
      className={`slick-arrow slick-next ${className} `}
      onClick={onClick}
    ></button>
  );
};

export default NextArrow;
