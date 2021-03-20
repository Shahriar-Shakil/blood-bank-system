import React from "react";
import Link from "next/link";

export default function HomeMenu({ title, data }) {
  const menuList = data?.map((item) => {
    return (
      <li className="rounded-full ">
        <Link href={item.url}>
          <a className="inline-block text-center">
            <img
              src={item.images}
              alt=""
              height="70"
              width="70"
              className="rounded-full mx-auto"
            />
            <span className="pt-2 capitalize">{item.title}</span>
          </a>
        </Link>
      </li>
    );
  });

  return (
    <>
      <h1 className="text-lg font-extrabold ">{title}</h1>
      <ul className={`flex flex-wrap justify-between pt-5 j `}>{menuList}</ul>
    </>
  );
}
