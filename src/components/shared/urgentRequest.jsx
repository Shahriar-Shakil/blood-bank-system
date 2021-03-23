import React from "react";
import { FaLocationArrow, FaShare } from "react-icons/fa";
import { GoLocation } from "react-icons/go";
import Card from "../ui/card";

export default function UrgentRequestCard() {
  return (
    <Card className="px-4 py-3 my-4  mr-auto shadow-md rounded-md ">
      <div className="flex justify-between">
        <div>
          <h1 className="text-xl font-bold">Scheduled</h1>
          <p className="opacity-60 text-sm">at sun 11:50 pm</p>
        </div>
        <div className=" flex items-start  ">
          <button class=" bg-primary text-white w-16 rounded-xl float-left mr-2">
            Contact
          </button>
          <FaShare color="red" />
        </div>
      </div>
      <div className="font-bold text-xl text-right">O+</div>
      <div className="flex justify-between">
        <div className="flex ">
          <h1 className="text-md font-bold ">Jarin Hospital</h1>
          <p className="opacity-60 px-3">3km Away</p>
        </div>
        <div className="">
          <p className="opacity-60 text-sm">1 Minute Ago</p>
        </div>
      </div>
      <hr className="opacity-10 my-1" />
      <div className="opacity-60 flex justify-between">
        <p className="">
          <GoLocation className="inline mr-2 text-sm" /> 21/3, Los Angeles, CA
        </p>
        <p className="text-sm">Brother</p>
      </div>
    </Card>
  );
}
