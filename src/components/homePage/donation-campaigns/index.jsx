import React from "react";
import BloodDonationCampaignCard from "../../shared/blood-donation-campaign-card";
import Slider from "react-slick";
import { carouselFullwidth } from "../../../utils/caousel-helper";
export default function DonationCampaign() {
  let campaigns = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  let campaignsList = campaigns.map((item) => (
    <BloodDonationCampaignCard key={item} />
  ));
  const setCarouselSetting = {
    ...carouselFullwidth,
  };
  return (
    <div className=" ">
      <Slider {...setCarouselSetting}>{campaignsList}</Slider>
    </div>
  );
}
