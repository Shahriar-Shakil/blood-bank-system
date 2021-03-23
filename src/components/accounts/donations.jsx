import React from "react";
import { BsFillDropletFill, BsThreeDotsVertical } from "react-icons/bs";
import { FaArrowLeft, FaLink, FaReply, FaThumbsUp } from "react-icons/fa";

import { GoLocation, GoCalendar } from "react-icons/go";
import ContentWrapper from "~/src/layout/Content-wrapper";
import HeaderUserAction from "../shared/header-user-action";
import Card from "../ui/card";

function DonationsPage() {
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
              Donations
            </h1>
          </div>
          <HeaderUserAction />
        </div>
      </div>
      <ContentWrapper>
        <div className="pt-20 my-5  grid grid-cols-4 gap-5 ">
          <Card className="rounded-2xl shadow-md p-2">
            <div className="flex py-5">
              <div className="flex items-center px-5">
                <div className="shadow rounded-full w-12 h-12 flex items-center justify-center">
                  <BsFillDropletFill className="text-primary" size="20" />
                </div>
              </div>
              <div className="  flex flex-grow flex-col">
                <h1 className="text-xl font-bold">King Stone Clinic</h1>
                <p className="opacity-60">
                  <GoLocation className="inline" /> 21/3,Los Angles, CA
                </p>
                <p>
                  <GoCalendar className="inline" /> 21/3,Los Angles, CA
                </p>
              </div>
              <div className="relative h-full bottom-5">
                <BsThreeDotsVertical className="text-primary" size="20" />
              </div>
            </div>
          </Card>
          <Card className="rounded-2xl shadow-md p-2">
            <div className="flex py-5">
              <div className="flex items-center px-5">
                <div className="shadow rounded-full w-12 h-12 flex items-center justify-center">
                  <BsFillDropletFill className="text-primary" size="20" />
                </div>
              </div>
              <div className="  flex flex-grow flex-col">
                <h1 className="text-xl font-bold">King Stone Clinic</h1>
                <p className="opacity-60">
                  <GoLocation className="inline" /> 21/3,Los Angles, CA
                </p>
                <p>
                  <GoCalendar className="inline" /> 21/3,Los Angles, CA
                </p>
              </div>
              <div className="relative h-full bottom-5">
                <BsThreeDotsVertical className="text-primary" size="20" />
              </div>
            </div>
          </Card>{" "}
        </div>
        <div className="grid grid-cols-2 gap-5 ">
          <div className="">
            <h1 className="text-2xl opacity-60 mb-3">History</h1>
            <Card className="shadow-md rounded-2xl h-full">
              <div className="p-3 ">
                <h1 className="text-xl font-extrabold">
                  You have saved 5 lives, donated 50 unit
                </h1>
                <div className="my-5 border-b last:border-b-0">
                  <div className="flex items-center   pb-5">
                    <div className="mx-3 bg-primary rounded-full w-12 h-12 flex items-center justify-center text-white font-bold">
                      1
                    </div>
                    <div className="text-xl font-bold flex-grow">
                      Kingsland Hospital
                    </div>
                    <div className="text-lg font-bold">2 Times</div>
                  </div>
                </div>{" "}
                <div className="my-5 border-b last:border-b-0">
                  <div className="flex items-center   pb-5">
                    <div className="mx-3 bg-primary rounded-full w-12 h-12 flex items-center justify-center text-white font-bold">
                      1
                    </div>
                    <div className="text-xl font-bold flex-grow">
                      Kingsland Hospital
                    </div>
                    <div className="text-lg font-bold">2 Times</div>
                  </div>
                </div>{" "}
                <div className="my-5 ">
                  <div className="flex items-center   pb-5">
                    <div className="mx-3 bg-primary rounded-full w-12 h-12 flex items-center justify-center text-white font-bold">
                      1
                    </div>
                    <div className="text-xl font-bold flex-grow">
                      Kingsland Hospital
                    </div>
                    <div className="text-lg font-bold">2 Times</div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
          <div>
            <h1 className="text-2xl opacity-60 mb-3">Reviews</h1>
            <Card className="shadow-md rounded-2xl mb-4">
              <div className="p-5 pb-1">
                <div className="flex">
                  <img
                    src="/static/images/user/user.jpeg"
                    alt=""
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div className="px-5">
                    <h1 className="font-extrabold text-xl">Ashik Prottoy</h1>
                    <p className="opacity-60">Dec 27</p>
                  </div>
                </div>
                <div className="mt-2">
                  <p className="opacity-60">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Exercitationem nihil, ad architecto delectus, recusandae
                    magni quisquam omnis natus odio cupiditate, provident
                    adipisci dolorem fugit ab excepturi at est quaerat? Natus.
                  </p>
                </div>
                <div className="flex justify-end">
                  <a className="p-3 text-primary">
                    <FaThumbsUp className="inline  " /> Like
                  </a>
                  <a className="p-3  text-primary">
                    <FaReply className="inline  " /> Replay
                  </a>
                </div>
              </div>
            </Card>
            <Card className="shadow-md rounded-2xl mb-4">
              <div className="p-5 pb-1">
                <div className="flex">
                  <img
                    src="/static/images/user/user.jpeg"
                    alt=""
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div className="px-5">
                    <h1 className="font-extrabold text-xl">Ashik Prottoy</h1>
                    <p className="opacity-60">Dec 27</p>
                  </div>
                </div>
                <div className="mt-2">
                  <p className="opacity-60">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Exercitationem nihil, ad architecto delectus, recusandae
                    magni quisquam omnis natus odio cupiditate, provident
                    adipisci dolorem fugit ab excepturi at est quaerat? Natus.
                  </p>
                </div>
                <div className="flex justify-end">
                  <a className="p-3 text-primary">
                    <FaThumbsUp className="inline  " /> Like
                  </a>
                  <a className="p-3  text-primary">
                    <FaReply className="inline  " /> Replay
                  </a>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </ContentWrapper>
    </div>
  );
}
export default DonationsPage;
