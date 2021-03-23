import React from "react";

import HeaderUserAction from "../shared/header-user-action";
import { FaArrowLeft } from "react-icons/fa";
import UserInfo from "../shared/UserInfo";
import Card from "../ui/card";
import UserHistory from "./module/user-history";
import IconMenu from "../shared/menu";
import { badgesData } from "@public/static/data/badges";
import ContentWrapper from "@components/layout/Content-wrapper";

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
        <div className="pt-20 my-5  grid grid-cols-5 gap-5">
          <div className="col-span-2 ">
            <UserInfo />
          </div>
          <div className="col-span-3 ">
            <Card className="shadow-md rounded-2xl">
              <UserHistory />
            </Card>
            <br />
            <Card className="shadow-md p-2 rounded-2xl">
              <div className="px-8">
                <h1 className="text-2xl font-bold">Badges</h1>

                <IconMenu data={badgesData} />
              </div>
            </Card>
          </div>
        </div>
      </ContentWrapper>
    </div>
  );
}
