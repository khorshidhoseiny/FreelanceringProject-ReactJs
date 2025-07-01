import React from "react";

function AbilityBox({ icon, text, title }) {
  return (
    <div className="bg-secondary-200 rounded-xl flex flex-col justify-center p-3">
      <div className="bg-gradient-to-tr mx-auto from-sky-600/30 w-32 rounded-full  p-3 to-fuchsia-400/30">
        {icon}
      </div>
      <h1 className="my-6 text-center font-bold text-lg">{title}</h1>
      <p className="text-sm text-center w-full">{text}</p>
    </div>
  );
}

export default AbilityBox;
