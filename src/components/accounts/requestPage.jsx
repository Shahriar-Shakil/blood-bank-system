import React from "react";
import ContentWrapper from "~/src/layout/Content-wrapper";

import HeaderUserAction from "../shared/header-user-action";
import { FaArrowLeft } from "react-icons/fa";
import UserInfo from "../shared/UserInfo";
import Card from "../ui/card";
import UserHistory from "./module/user-history";
import IconMenu from "../shared/menu";
import { badgesData } from "~/public/static/data/badges";
import { requestMenuData } from "~/public/static/data/requestMenu";
import UrgentRequestCard from "../shared/urgentRequest";
import RequestPublishForm from "../shared/request-publish-form";
import MyRequestCard from "../shared/my-request-card";
import { recentHistoryData } from "~/public/static/data/recent-history-data";

export default function RequestPage() {
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
      <ContentWrapper className="px-0">
        <div className="pt-20 my-5  grid grid-cols-7 gap-5">
          <div className="col-span-2 ">
            <IconMenu data={requestMenuData} />
            <div className="my-5">
              <h1 className="font-extrabold text-2xl my-2"> Urgent Requests</h1>
              <UrgentRequestCard />
              <UrgentRequestCard />
            </div>{" "}
            <div className="my-5">
              <h1 className="font-extrabold text-2xl my-2"> My Requests</h1>
              <UrgentRequestCard />
              <UrgentRequestCard />
            </div>
          </div>
          <div className="col-span-5 ">
            <h1 className="font-extrabold text-2xl">Blood Request</h1>
            <div className="flex my-5">
              <div className="w-3/5 mx-5">
                <RequestPublishForm />
              </div>
              <div className="w-2/5">
                <h1 className="font-extrabold text-xl mb-2"> Recent History</h1>
                <div className="grid grid-cols-2 gap-5">
                  {recentHistoryData?.map((item) => (
                    <MyRequestCard data={item} />
                  ))}
                </div>
              </div>
            </div>
            <div className="">
              <h1 className="font-extrabold text-2xl">Recent Request</h1>
              <div className="grid gap-8 grid-cols-2 mx-5">
                <div>
                  <UrgentRequestCard />
                </div>{" "}
                <div>
                  <UrgentRequestCard />
                </div>{" "}
                <div>
                  <UrgentRequestCard />
                </div>{" "}
                <div>
                  <UrgentRequestCard />
                </div>{" "}
              </div>
            </div>
          </div>
        </div>
      </ContentWrapper>
    </div>
  );
}
