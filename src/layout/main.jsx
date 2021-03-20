import Head from "next/head";
import React from "react";
import Sidebar from "./sidebar";

export default function Layout({ children, title }) {
  return (
    <div>
      <Head>
        <title>{title}</title>
      </Head>
      <div className="flex h-screen">
        <Sidebar />

        <div className="w-full bg-gray">{children}</div>
      </div>
    </div>
  );
}
