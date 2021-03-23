import React from "react";
import { BsDropletHalf } from "react-icons/bs";
import SigninForm from "@components/accounts/module/signin-form";

export default function LoginPage() {
  return (
    <div className="container mx-auto h-screen ">
      <div className="flex h-full items-center">
        <div className="w-3/5 ">
          <div className="flex flex-col  items-center">
            <BsDropletHalf color="red" size={60} />
            <h1 className="text-3xl font-ex font-extrabold ">
              <span className="text-primary">Blood</span> Donation
            </h1>
          </div>
        </div>
        <div className="w-2/5">
          <SigninForm />
        </div>
      </div>
    </div>
  );
}
