import React, { useState } from "react";
import dynamic from "next/dynamic";
import Card from "../ui/card";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

export default function ActivityChart() {
  const [state, setstate] = useState({
    options: {
      chart: {
        toolbar: {
          show: false,
        },
        id: "basic-bar",
        width: "100%",
      },
      xaxis: {
        categories: [1991, 1992, 1993, 1994, 1995, 1996],
      },
    },
    series: [
      {
        name: "series-1",
        data: [30, 40, 42, 45, 48],
      },
    ],
  });
  return (
    <Card>
      <h1 className="">Activity</h1>
      <Chart
        id="chart"
        options={state.options}
        series={state.series}
        type="line"
        toolbar={false}
        height={"250px"}
        // width={650}
      />
    </Card>
  );
}
