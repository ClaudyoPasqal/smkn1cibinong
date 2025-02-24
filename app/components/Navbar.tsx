"use client";
import Image from "next/image";
import React from "react";
import { Link } from "react-scroll";
import dynamic from "next/dynamic";

const Drawer = dynamic(() => import("react-modern-drawer"), { ssr: false });

import "react-modern-drawer/dist/index.css";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = React.useState(false);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  function downloadFile() {
    window.open(
      "https://drive.google.com/uc?export=download&id=1-nOA4EzdHNauwmuivCtTT5BUE11UAJ0P",
      "_blank"
    );
  }

  return (
    <>
      <div className="p-4 md:p-2 fixed z-10 bg-white w-full h-[90px] shadow-md flex items-center flex-row justify-between md:px-[160px]">
        <Image
          src="/images/logo_smkn1.png"
          alt="Logo SMKN 1 Cibinong"
          width={300}
          height={300}
          className="w-[60px] h-[60px]"
        />
        <div className="hidden md:flex flex-row gap-4 font-bold">
          <Link
            to="beranda"
            smooth={true}
            duration={500}
            className="cursor-pointer"
            onClick={() => {
              router.push("/");
            }}
          >
            Beranda
          </Link>
          <Link
            to="gedung"
            smooth={true}
            duration={500}
            offset={-90}
            className="cursor-pointer"
            onClick={() => {
              router.push("/");
            }}
          >
            Gedung
          </Link>
          <Link
            to="tentangKami"
            smooth={true}
            duration={500}
            offset={-90}
            className="cursor-pointer"
            onClick={() => {
              router.push("/");
            }}
          >
            Tentang Kami
          </Link>
          <button onClick={downloadFile}>Download</button>
          <button
            onClick={() => {
              router.push("/main");
            }}
          >
            Main
          </button>
        </div>
        <button onClick={toggleDrawer} className="flex md:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-menu"
          >
            <line x1="4" x2="20" y1="12" y2="12" />
            <line x1="4" x2="20" y1="6" y2="6" />
            <line x1="4" x2="20" y1="18" y2="18" />
          </svg>
        </button>
      </div>
      <Drawer
        open={isOpen}
        onClose={toggleDrawer}
        direction="right"
        size={"100vw"}
      >
        <div className="w-full p-10 flex flex-col">
          <div className="w-full flex flex-row justify-end">
            <button onClick={toggleDrawer}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-x"
              >
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </svg>
            </button>
          </div>
          <div className="flex flex-col gap-4 text-black">
            <Link
              to="beranda"
              smooth={true}
              duration={500}
              className="cursor-pointer p-2 border-b w-full border-black"
              onClick={() => {
                router.push("/");
                toggleDrawer();
              }}
            >
              Beranda
            </Link>
            <Link
              to="gedung"
              smooth={true}
              duration={500}
              offset={-90}
              className="cursor-pointer p-2 border-b w-[80%] border-black"
              onClick={() => {
                router.push("/");
                toggleDrawer();
              }}
            >
              Gedung
            </Link>
            <Link
              to="tentangKami"
              smooth={true}
              duration={500}
              offset={-90}
              className="cursor-pointer p-2 border-b w-[70%] border-black"
              onClick={() => {
                router.push("/");
                toggleDrawer();
              }}
            >
              Tentang Kami
            </Link>
            <div
              className="cursor-pointer p-2 border-b w-[60%] border-black"
              onClick={downloadFile}
            >
              Download
            </div>
            <div
              onClick={() => {
                router.push("/main");
                toggleDrawer();
              }}
              className="cursor-pointer p-2 border-b w-[50%] border-black"
            >
              Main
            </div>
          </div>
        </div>
      </Drawer>
    </>
  );
};

export default Navbar;
