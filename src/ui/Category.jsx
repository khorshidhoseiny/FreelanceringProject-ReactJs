import React from "react";
import useCategories from "../hooks/useCategories";
import { MdArchitecture } from "react-icons/md";
import { RiComputerLine } from "react-icons/ri";
import { TfiPencil } from "react-icons/tfi";
import { PiPaintBrushBroadDuotone } from "react-icons/pi";

function Category() {
  const { categories } = useCategories();
  console.log(categories, "category");

  return (
    <div className="flex flex-col text-secondary-700 container justify-center items-center ">
      <h1 className="mt-8 font-semibold text-xl">دسته بندی ها</h1>
      <div className="my-8 sm:my-16 grid gap-8 grid-cols-2 md:grid-cols-4 container justify-center items-center transition-all duration-300 ease-in md:max-w-screen-xl">
        {categories.map((item, index) => {
          return (
            <div
              className="p-4 m-3 md:m-3 cursor-pointer flex flex-col 
                       items-center  justify-center"
              key={index}
            >
              <div className="bg-gradient-to-tr from-sky-600/30 rounded-3xl my-5 p-3 to-fuchsia-400/30  gradient--hover-bg">
                {index === 0 ? (
                  <RiComputerLine className="w-16 h-20" />
                ) : index === 1 ? (
                  <PiPaintBrushBroadDuotone className="w-16 h-20" />
                ) : index === 2 ? (
                  <MdArchitecture className="w-16 h-20" />
                ) : (
                  <TfiPencil className="w-16 h-20" />
                )}
              </div>
              <p className="flex text-sm items-center  h-12  font-bold justify-center">
                {item.label}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// {index === 0 ? (
//     <FaComputer className="w-20 h-24" />
//   ) : index === 1 ? (
//     <HiMiniPaintBrush className="w-20 h-24" />
//   ) : index === 2 ? (
//     <MdArchitecture className="w-20 h-24" />
//   ) : (
//     <LiaPenFancySolid className="w-20 h-24" />
//   )}

export default Category;
