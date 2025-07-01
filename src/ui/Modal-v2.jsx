import React, { useEffect, useRef } from "react";
import { HiOutlineX, HiX } from "react-icons/hi";

function Modalv2({ open, onClose, title, children }) {
  const ref = useRef();

  useEffect(() => {
    const handleClick = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        onClose();
      }
    };
    document.addEventListener("click", handleClick, true);

    return () => document.removeEventListener("click", handleClick, true);
  }, [onClose]);

  return (
    open && (
      <div className="backdrop-blur-sm w-full fixed h-screen bg-secondary-800 z-50 top-0 left-0 bg-opacity-30">
        <div
          ref={ref}
          className="top-1/2 fixed p-4 w-[calc(100vw-2rem)] md:max-w-lg max-h-[calc(100vh-3rem)] overflow-y-auto left-1/2 -translate-x-1/2 bg-secondary-0 rounded-lg transition-all duration-500 ease-out -translate-y-1/2"
        >
          <div className="flex justify-between items-center border-b border-b-secondary-300 pb-2 ">
            <p className="text-secondary-900">{title}</p>
            <button onClick={onClose}>
              <HiX className="w-5 h-5 hover:text-error text-secondary-500" />
            </button>
          </div>
          <div className="mt-3">{children}</div>
        </div>
      </div>
    )
  );
}

export default Modalv2;
