import React from "react";

export default function Card({ children, classNames }) {
  return (
    <div className={`bg-white p-3 rounded-lg shadow- ${classNames}`}>
      {children}
    </div>
  );
}
