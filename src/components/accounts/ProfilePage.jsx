import React from "react";
import ContentWrapper from "~/src/layout/Content-wrapper";

import dynamic from "next/dynamic";
import HeaderUserAction from "../shared/header-user-action";
import { BsArrowLeft } from "react-icons/bs";
import { FaArrowLeft } from "react-icons/fa";
import Card from "../ui/card";
import UserInfo from "../shared/UserInfo";

export default function ProfilePage() {
  return (
    <div className=" mt-16  relative px-24 max-w-screen-2xl mx-auto">
      <div className="absolute top-0 left-0 w-full px-16 bg-gray z-50">
        <div className="flex justify-between py-3">
          <div className="flex items-center ">
            <h1 className="font-bold text-lg">
              <FaArrowLeft
                size={20}
                className="text-primary font-bold text-lg inline mr-3"
              />
              Request
            </h1>
          </div>
          <HeaderUserAction />
        </div>
      </div>
      <ContentWrapper>
        <div className="pt-20 my-5  grid grid-cols-5 gap-8">
          <div className="col-span-2">
            <UserInfo />
          </div>

          <div className="col-span-3"></div>
        </div>
      </ContentWrapper>
    </div>
  );
}
