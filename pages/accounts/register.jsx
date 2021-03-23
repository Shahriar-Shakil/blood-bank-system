import React from "react";
import { BsDropletHalf } from "react-icons/bs";
import { Form, Input, Button, Checkbox, Row, Col, Select } from "antd";
import SignUpForm from "@components/accounts/module/signup-form";

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
            <p className="pt-10 text-2xl w-1/3 text-center opacity-60">
              Provide Your real name for your identity. Your name will be used
              for search
            </p>
          </div>
        </div>
        <div className="w-2/5">
          <SignUpForm />
        </div>
      </div>
    </div>
  );
}
