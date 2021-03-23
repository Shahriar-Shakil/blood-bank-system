import React from "react";
import Card from "../../ui/card";
import Link from "next/link";
export default function NotificationsCard() {
  return (
    <Card className="px-5 py-2 rounded-xl shadow-md">
      <div className="flex  lg:flex-row items-center lg:h-20 p-1 md:flex-col md:h-auto">
        <div className="w-16 h-16 rounded-full  shadow-md flex items-center justify-center">
          <Link href="/">
            <a className="text-primary text-2xl font-bold">A+</a>
          </Link>
        </div>
        <div className="flex-grow lg:w-52 md:w-auto  lg:mx-7 md:my-2">
          <p>
            {" "}
            <span className="text-xl font-bold">Musa Clinic </span>Posted a
            blood request near you
          </p>
        </div>
        <div className="flex h-full items-end">
          <p>1 min ago</p>
        </div>
      </div>
    </Card>
  );
}
