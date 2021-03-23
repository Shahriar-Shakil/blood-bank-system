import React from "react";

export default function Card({ children, className }) {
  return <div className={`bg-white p-3   ${className}`}>{children}</div>;
}
