import React from "react";

export default function Button({ primary, children, ...props }) {
  return (
    <div>
      <button
        {...props}
        className={`${
          primary
            ? "h-16 w-16 bg-red-500 hover:bg-red-600 hover:shadow-lg"
            : "w-12 h-12 border-2 border-slate-500 hover:border-slate-600 hover:shadow-md"
        } flex items-center justify-center rounded-full shadow`}
      >
        {children}
      </button>
    </div>
  );
}
