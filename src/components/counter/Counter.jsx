import React from "react";
import iconAdd from "../../images/icon-plus.svg";
import iconMinus from "../../images/icon-minus.svg";

export const Counter = ({ data, type }) => {
  return (
    <div className="bg-gray-50 w-max p-4 rounded-lg flex justify-center items-center gap-4 border-1">
      <img src={iconAdd} className="cursor-pointer" />
      <span className="font-bold">{data.score}</span>
      <img src={iconMinus} className="cursor-pointer" />
    </div>
  );
};
