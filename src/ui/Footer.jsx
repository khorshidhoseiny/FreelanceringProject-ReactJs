import React from "react";
import { FaGithub, FaInstagram, FaLinkedin, FaTelegram } from "react-icons/fa";

import { Link } from "react-router-dom";

function Footer() {
  const FooterIconsStyle =
    "rounded-full h-9 w-9 flex justify-center items-center opacity-70 hover:opacity-95 bg-primary-400/40";

  return (
    <div className="bg-secondary-0 text-center container xl:max-w-screen-xl py-4 px-8 border-t mt-24 border-secondary-200">
      <div className="flex justify-center flex-col gap-y-3 border-b pb-4 border-secondary-200/50 items-center">
        <img
          src="/Mercury-Logo.png"
          alt="logo"
          className="w-24 md:w-36 opacity-50"
        />
        <div className="text-secondary-700 flex justify-center items-center gap-3">
          <Link
            to={
              "https://www.instagram.com/thesiilversun?utm_source=qr&igsh=cHI0ankxemh5b2Vp"
            }
            className={`${FooterIconsStyle}`}
          >
            <FaInstagram className="w-5 h-5" />
          </Link>
          <Link
            to={"https://www.linkedin.com/in/khorshid-h/"}
            className={`${FooterIconsStyle}`}
          >
            <FaLinkedin className="w-5 h-5" />
          </Link>
          <Link
            to={"https://t.me/khorshidhoseiny"}
            className={`${FooterIconsStyle}`}
          >
            <FaTelegram className="w-5 h-5" />
          </Link>
          <Link
            to={"https://github.com/khorshidhoseiny"}
            className={`${FooterIconsStyle}`}
          >
            <FaGithub className="w-5 h-5" />
          </Link>
        </div>
      </div>
      <p className="text-xs mt-5 text-secondary-400">
        CopyRight © 2024 "Mercury"{" "}
        <span className="font-bold">All rights reserved</span>
      </p>
    </div>
  );
}
export default Footer;
