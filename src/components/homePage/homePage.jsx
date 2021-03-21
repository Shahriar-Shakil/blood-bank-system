import React from "react";
import ContentWrapper from "~/src/layout/Content-wrapper";
import { homeMenuData } from "../../../public/static/data/homeMenu";
import { requestMenuData } from "../../../public/static/data/requestMenu";
import ActivityChart from "../elements/activity-chart";
import BloodDonationCampaignCard from "../shared/blood-donation-campaign-card";
import HeaderUserAction from "../shared/header-user-action";
import Card from "../ui/card";
import DonationCampaign from "./donation-campaigns";
import dynamic from "next/dynamic";
import IconMenu from "../shared/menu";

export default function HomePage() {
  const Map = dynamic(
    () => import("../shared/map"), // replace '@components/map' with your component's location
    {
      loading: () => <p>A map is loading</p>,
      ssr: false, // This line is important. It's what prevents server-side render
    }
  );
  return (
    <div className=" mt-16  relative px-24 max-w-screen-2xl mx-auto">
      <div className="absolute top-0 left-0 w-full px-16 bg-gray z-50">
        <div className="flex justify-between py-3">
          <div className="flex items-center ">
            <h1 className="font-bold text-lg">Campaign</h1>
            <span className="ml-8 ">
              Available
              <label className="switch ml-3">
                <input type="checkbox" value={true} />
                <span className="slider round"></span>
              </label>
            </span>
          </div>
          <HeaderUserAction />
        </div>
      </div>
      <ContentWrapper>
        <div className="pt-20 my-5  grid grid-cols-3 gap-8">
          <div className="col-span-3">
            <DonationCampaign />
          </div>

          <div className="">
            <IconMenu title="Menu" data={homeMenuData} />
            <br />
            <IconMenu
              title="Request"
              data={requestMenuData}
              listClass="justify-start"
            />
            <div className="my-5">
              <ActivityChart />
            </div>
          </div>
          <div className="col-span-2 ">
            <h1 className="text-lg font-extrabold ">Map</h1>
            <Card className="relative p-0">
              <Map />
            </Card>
          </div>
        </div>
      </ContentWrapper>
    </div>
  );
}
