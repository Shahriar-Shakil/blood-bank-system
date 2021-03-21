import React from "react";
import { Scrollbar } from "../../ui/scrollbar";

export default function DonationHistory() {
  let arr = [];
  for (let i = 1; i < 20; i++) {
    arr.push(i);
  }
  const tableData = arr?.map((item) => {
    return (
      <tr className="hover:bg-light" key={item}>
        <td className="text-center">
          <div className="py-3">
            <p>Dec</p>
            <p className="text-xl font-extrabold">{7 + item}</p>
          </div>
        </td>{" "}
        <td className="text-center">
          <div className="text-left py-3">
            <h1 className="text-xl font-bold">King Stone hospital</h1>
            <p>1 Bag blood</p>
          </div>
        </td>{" "}
        <td className="text-center">
          <div className="py-3">
            <p className="opacity-60">{6 + item} Days Ago</p>
          </div>
        </td>
      </tr>
    );
  });
  return (
    <div>
      <Scrollbar>
        <div
          style={{
            maxHeight: "300px",
          }}
        >
          <table class="table-auto w-full">
            <thead>
              <tr>
                <th class="w-1/4 ..."></th>
                <th class="w-1/4 ..."></th>
                <th class="w-1/4 ..."></th>
              </tr>
            </thead>
            <tbody> {tableData}</tbody>
          </table>
        </div>
      </Scrollbar>
    </div>
  );
}
