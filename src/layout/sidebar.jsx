import React from "react";

import {
  FaHome,
  FaRegBell,
  FaRegNewspaper,
  FaRegSun,
  FaUserAlt,
} from "react-icons/fa";
import Link from "next/link";
export default function Sidebar() {
  return (
    <div className="w-72 ">
      <div className=" px-5 pt-16 pb-8 flex flex-col	justify-between ">
        <div className="px-8">
          <div className="text-center">
            <img
              src="/logo.jpg"
              alt=""
              height="70"
              width="80"
              className="mx-auto"
            />

            <p className="font-bold text-xl -m-3">
              <span className="text-primary pr-1">Blood</span>
              Donation
            </p>
          </div>
          <div className="pt-10">
            <ul className="list-none">
              <li className="my-2 group block border-transparent border-r-8  hover:border-primary hover:bg-light transition duration-300">
                <Link href="/">
                  <a className="font-normal flex px-4 py-3 group-hover:text-primary ransition duration-300">
                    <FaHome size={24} className="mr-3 t" /> <span>Home</span>
                  </a>
                </Link>
              </li>
              <li className="my-2 group block border-transparent border-r-8  hover:border-primary hover:bg-light transition duration-300">
                <Link href="/">
                  <a className="font-normal flex px-4 py-3 group-hover:text-primary ransition duration-300">
                    <FaUserAlt size={24} className="mr-3 t" />{" "}
                    <span>Profile</span>
                  </a>
                </Link>
              </li>
              <li className="my-2 group block border-transparent border-r-8  hover:border-primary hover:bg-light transition duration-300">
                <Link href="/">
                  <a className="font-normal flex px-4 py-3 group-hover:text-primary ransition duration-300">
                    <FaRegBell size={24} className="mr-3 t" />{" "}
                    <span>Notifications</span>
                  </a>
                </Link>
              </li>
              <li className="my-2 group block border-transparent border-r-8  hover:border-primary hover:bg-light transition duration-300">
                <Link href="/">
                  <a className="font-normal flex px-4 py-3 group-hover:text-primary ransition duration-300">
                    <FaRegNewspaper size={24} className="mr-3 t" />{" "}
                    <span>Donors</span>
                  </a>
                </Link>
              </li>
              <li className="my-2 group block border-transparent border-r-8  hover:border-primary hover:bg-light transition duration-300">
                <Link href="/">
                  <a className="font-normal flex px-4 py-3 group-hover:text-primary ransition duration-300">
                    <FaRegSun size={24} className="mr-3 t" />{" "}
                    <span>Customize</span>
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className=" mt-20">
          <img src="/static/images/img-1.jpg" alt="" className="mx-auto" />
        </div>
      </div>
    </div>
  );
}
