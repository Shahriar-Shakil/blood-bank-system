import React from "react";
import { FaLayerGroup, FaShare } from "react-icons/fa";
import Card from "../ui/card";
import IconMenu from "./menu";
import { Progress } from "antd";
import { requestMenuData } from "../../../public/static/data/requestMenu";

export default function UserInfo() {
  return (
    <Card className=" shadow-md h-full rounded-2xl">
      <div className="p-2">
        <div className="   bg-red-200 	 bg-cover	bg-no-repeat bg-center	">
          <div className="relative">
            <img
              src="/static/images/profile.jpg"
              alt=""
              className="w-full h-40 object-cover"
            />
            <div className="absolute top-1/2 px-4">
              <h1 className="text-white font-extrabold text-2xl">
                Shahriar Shakil
              </h1>
              <p className="text-white">Beginner Donor</p>
            </div>
          </div>
        </div>
        <div className="px-4 my-4">
          <div className="my-2">
            <h1 className="text-xl font-bold">Info</h1>
            <p className="mt-3 text-black opacity-60">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam
              maxime ducimus, ad quos similique officia omnis sapiente magnam
              earum pariatur molestiae facere dignissimos animi fugiat
              asperiores fuga exercitationem odio! Sequi.
            </p>
          </div>
          <div className="my-5">
            <h1 className="text-xl font-bold my-3">
              Badge <FaLayerGroup className="text-primary inline ml-2" />
            </h1>
            <IconMenu data={requestMenuData} />
          </div>
          <div className="my-8 border border-gray "></div>
          <Progress
            percent={70}
            showInfo={false}
            strokeColor="red"
            trailColor="#9d9d9d"
          />
          <p className="">
            <span className="text-primary ">3 </span>{" "}
            <span className="pl-1 opacity-60">
              days until you can donate again
            </span>
          </p>
        </div>
      </div>
    </Card>
  );
}
