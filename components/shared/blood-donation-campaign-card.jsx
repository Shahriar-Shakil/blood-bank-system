import React from "react";
import { BsDropletFill } from "react-icons/bs";

export default function BloodDonationCampaignCard() {
  return (
    <div className="">
      <div className="relative 	max-w-sm ">
        <div className="  flex p-5 bg-white rounded-large ">
          <div className="w-1/2  text-center">
            <p className="py-3">
              <BsDropletFill className="text-primary inline mr-1" />
              Safe Blood for All
            </p>
            <p className="text-primary text-xl font-extrabold py-3">
              By donating Blood, <br />
              you can save lives
            </p>
            <p className="text-xs	 font-light">
              Lorem ipsum, dolor sit amet adipisicing elit. Nam a
            </p>
          </div>
          <div className="w-1/2">
            <img
              src="/img-2.jpg"
              alt=""
              className="object-fill h-full w-full"
            />
          </div>
        </div>
        <div className="absolute cursor-pointer bottom-0 w-full p-5   card_dark_opacity rounded-b-large">
          <h1 className="text-white hover:text-gray font-extrabold text-xl z-10">
            Blood Donation Campaign 2021
          </h1>
          <div className="flex justify-between mt-2 text-white">
            <p>by Admin</p>
            <p>1 minute ago</p>
          </div>
        </div>
      </div>
    </div>
  );
}
