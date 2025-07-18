import React, { type HTMLAttributes } from "react";

interface ICategory extends HTMLAttributes<HTMLDivElement> {
  categoryImage: string;
  categoryName: string;
}

const Category: React.FC<ICategory> = ({ categoryImage, categoryName }) => {
  return (
    <li
      style={{
        backgroundImage: `url(${categoryImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        fontFamily: "Manrope",
      }}
      className="size-[180px] rounded-[50px] flex items-end justify-center font-semibold text-sm mb-8"
    >
      <a className="block w-fit px-2.5 py-1 backdrop-blur-sm mb-10" href="#">
        {categoryName.toUpperCase()}
      </a>
    </li>
  );
};

export default Category;
