import React from "react";

export default function Navigation({ home, children }) {
  return (
    <div
      className={`${
        home ? "right-0" : "left-0"
      } fixed top-0 flex items-center justify-center h-12 bg-white cursor-pointer w-36 gap-x-2`}
    >
      {children}
    </div>
  );
}
