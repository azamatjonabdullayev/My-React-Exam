import type React from "react";
import type IRhombus from "../interfaces/rhombus";
import "../styles/rhombus.css";

export const Rhombus: React.FC<IRhombus> = ({ catName }) => {
  return (
    <div className="py-2 rhomb w-fit px-7 bg-[#f4796c] text-xl font-extrabold font-[Manrope]">
      <span>{catName}</span>
    </div>
  );
};
