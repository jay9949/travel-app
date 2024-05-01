import { NAV_LINKS } from "@/constants";
import Link from "next/link";
import React from "react";

const Modal = () => {
  return (
    <div className="absolute top-[5rem] right-2 bg-green-90 h-[15rem] text-white w-[15rem] rounded-xl">
      <ul className="text-center pt-3">
        {NAV_LINKS.map((link) => (
          <>
            <div key={link.key} className="pt-4">
              <Link href={link.href}>{link.label}</Link>
              <br />
            </div>
          </>
        ))}
      </ul>
    </div>
  );
};

export default Modal;
