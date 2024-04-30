"use client";
import { useState } from "react";
import Modal from "./Modal";
import Image from "next/image";
import Button from "./Button";
import Link from "next/link";
import { NAV_LINKS } from "@/constants";

const Navbar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <nav className="flexBetween max-container padding-container relative z-30 py-5">
      <Link href={"/"}>
        <Image src="/hilink-logo.svg" alt="logo" width={74} height={29} />
      </Link>
      <ul className="hidden h-full gap-12 lg:flex">
        {NAV_LINKS.map((link) => (
          <Link
            href={link.href}
            key={link.key}
            className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold"
          >
            {link.label}
          </Link>
        ))}
      </ul>
      <div className="lg:flexCenter hidden">
        <Button
          type="button"
          title="Login"
          icon="/user.svg"
          variant="btn_dark_green"
        />
      </div>
      <Image
        src={isModalOpen ? "navclose.svg" : "menu.svg"} // Toggle icon based on modal state
        alt={isModalOpen ? "close" : "menu"} // Adjust the alt text accordingly
        width={32}
        height={32}
        className="inline-block cursor-pointer lg:hidden"
        onClick={toggleModal}
      />
      {isModalOpen && <Modal />}
    </nav>
  );
};

export default Navbar;
