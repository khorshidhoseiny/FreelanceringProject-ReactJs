import React from "react";

import { useNavigate } from "react-router-dom";

function SectionLayout({ title, description, role, imgSrc, btnTxt, spanTxt }) {
  const navigate = useNavigate();
  return (
    <div className="container mt-16 flex justify-center rounded-2xl items-center bg-secondary-200">
      <div className="flex-col gap-x-3 p-4 flex md:flex-row">
        <div className="flex flex-col md:w-1/2 p-4 justify-center items-start  ">
          <span className="text-sm text-sky-500">{spanTxt}</span>
          <h1 className="mt-5 text-2xl  text-secondary-800 font-bold">
            {title}
          </h1>
          <p className="mt-5 font-extralight text-secondary-600">
            {description}
          </p>
          <button
            onClick={() => navigate(`/${role}/projects`)}
            className="gradient--hover-bg bg-sky-600 text-white mt-9 md:w-32 w-full"
          >
            {btnTxt}
          </button>
        </div>
        <div className="flex-1 flex justify-center items-center ">
          <img src={imgSrc} className="rounded-xl" />
        </div>
      </div>
    </div>
  );
}

export default SectionLayout;
