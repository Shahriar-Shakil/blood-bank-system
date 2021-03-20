import React from "react";
import { Scrollbar } from "../components/ui/scrollbar";
export default function ContentWrapper({ children }) {
  return (
    <Scrollbar>
      <div
        style={{
          padding: "0 2rem",
          maxHeight: "calc(100vh - 100px)",
        }}
      >
        {children}
      </div>
    </Scrollbar>
  );
}
