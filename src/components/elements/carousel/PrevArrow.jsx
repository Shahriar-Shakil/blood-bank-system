import React from "react";
import { BiChevronLeft } from "react-icons/bi";

const PrevArrow = (props) => {
  const { className, onClick, icon } = props;
  return (
    <button className={`slick-arrow slick-prev ${className}`} onClick={onClick}>
      <BiChevronLeft color="red" />
    </button>
  );
};

export default PrevArrow;
