import React from "react";
import Card from "../ui/card";

export default function MyRequestCard({ data }) {
  const { location, blood_group, type } = data ?? {};
  return (
    <Card className="shadow-md rounded-2xl px-5 pt-10">
      <div
        className={`flex justify-center items-center font-bold text-xl  text-white w-10 h-10 rounded-full ${
          blood_group === "A+" ? `bg-purple` : `bg-primary`
        }`}
      >
        {blood_group}
      </div>
      <div className="mt-5">
        <h1 className="text-xl font-bold">{location}</h1>
        <p className="opacity-60">{type}</p>
      </div>
    </Card>
  );
}
