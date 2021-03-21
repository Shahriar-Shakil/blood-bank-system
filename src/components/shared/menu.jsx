import React from "react";
import Link from "next/link";
import { Badge } from "antd";

export default function IconMenu({ title, data }) {
  const menuList = data?.map((item) => {
    return (
      <li className="flex flex-col text-center px-4">
        <Link href={item.url}>
          <a className="flex justify-center items-center  rounded-full w-16 h-16 border-4 border-white">
            <Badge count={item.notification}>
              <img
                src={item.images}
                alt=""
                height="70"
                width="70"
                className="w-12 h-12 mx-auto rounded-full"
              />
            </Badge>
          </a>
        </Link>

        <span className="pt-2 capitalize">{item.title}</span>
      </li>
    );
  });

  return (
    <>
      <h1 className="text-lg font-extrabold ">{title}</h1>
      <ul className={`flex flex-wrap  pt-5  `}>{menuList}</ul>
    </>
  );
}
