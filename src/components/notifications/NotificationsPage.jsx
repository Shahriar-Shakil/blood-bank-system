import React from "react";
import ContentWrapper from "~/src/layout/Content-wrapper";

import HeaderUserAction from "../shared/header-user-action";
import { FaArrowLeft } from "react-icons/fa";
import Card from "../ui/card";
import NotificationsCard from "./module/NotificationCard";

export default function NotificationsPage() {
  return (
    <div className=" mt-16  relative px-24 max-w-screen-2xl mx-auto">
      <div className="absolute top-0 left-0 w-full px-16 bg-gray z-50">
        <div className="flex justify-between flex-wrap py-3">
          <div className="w-4/12">
            <div className="flex items-center  ">
              <h1 className="font-bold text-lg">
                <FaArrowLeft
                  size={20}
                  className="text-primary font-bold text-lg inline mr-3"
                />
                Notifications
              </h1>
            </div>
            <div className="mt-20">
              <NotificationsCard />
            </div>
          </div>

          <div className="border border-black opacity-10 mx-5"></div>
          <div className="w-4/12">
            <div className="flex items-center  ">
              <h1 className="font-bold text-lg">History</h1>
            </div>
            <div className="mt-20">
              <NotificationsCard />
            </div>
          </div>
          <div className="flex-grow flex justify-end items-start md:order-1">
            <HeaderUserAction />
          </div>
        </div>
      </div>
    </div>
  );
}
