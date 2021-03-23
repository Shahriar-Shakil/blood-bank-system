import React from "react";
import { BsThreeDotsVertical } from "react-icons/bs";

export default function HeaderUserAction() {
  return (
    <div className="user flex">
      <div className=" mx-2 text-right">
        <h1 className="font-bold text-lg">Shahriar Shakil</h1>
        <p className="text-black text-opacity-50">Top rated Donar</p>
      </div>
      <div>
        <img
          className="rounded-full h-12 w-12"
          src="/static/images/person.jpg"
          alt=""
        />
      </div>
      <button className="text-primary ml-4">
        <BsThreeDotsVertical size="26" />
      </button>
    </div>
  );
}
