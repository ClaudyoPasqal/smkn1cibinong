import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { createPortal } from "react-dom";
import Image from "next/image";

const DATA = [
  {
    name: "Gerbang",
    image: "/images/gerbang.jpeg",
  },
  {
    name: "Lapangan",
    image: "/images/lapangan.jpeg",
  },
  {
    name: "Gedung SIJA",
    image: "/images/sija.jpeg",
  },
  {
    name: "Gedung TKR",
    image: "/images/tkr.jpeg",
  },
  {
    name: "Gedung TFLM",
    image: "/images/tflm.jpeg",
  },
  {
    name: "Gedung TKJ",
    image: "/images/tkj.jpeg",
  },
  {
    name: "Gedung TOI",
    image: "/images/toi.jpeg",
  },
  {
    name: "Gedung TP",
    image: "/images/tp.jpeg",
  },
  {
    name: "Gedung MM",
    image: "/images/mm.jpeg",
  },
];

const Gedung = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [imageName, setImageName] = useState("");
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <div
      id="gedung"
      className="p-4 md:py-20 py-10 md:px-[160px] bg-[#fefefe] min-h-screen md:p-20 flex flex-col gap-10 items-center"
    >
      <h1 className="font-bold text-2xl text-black">Gedung Sekolah</h1>
      <div className="flex flex-row flex-wrap gap-4 justify-center">
        {DATA.map((item, i) => (
          <div
            key={i}
            data-aos="fade-up"
            data-aos-delay="0"
            className="relative p-6 w-full md:w-80 bg-white rounded-2xl shadow-lg flex flex-col items-center gap-4"
          >
            <div className="w-full h-48 overflow-hidden cursor-pointer">
              <img
                src={item.image}
                alt={item.name}
                className="h-full w-full object-cover rounded-lg transition-transform duration-300 hover:scale-125"
              />
            </div>
            <h2 className=" text-xl font-semibold mt-4 text-black">
              {item.name}
            </h2>
            <button
              onClick={() => {
                setIsOpen(true);
                setImageName(item.image);
              }}
              className=" p-2 w-full bg-[#28166F] font-semibold text-white rounded-md hover:brightness-110 transition-all"
            >
              Lihat
            </button>
          </div>
        ))}
      </div>
      <div className="flex w-full items-center justify-center">
        <div
          data-aos="fade-up"
          data-aos-delay="0"
          className="relative p-6 w-full md:w-80 bg-white rounded-2xl shadow-lg flex flex-col items-center gap-4"
        >
          <video
            src="/videos/cinematic_2.mp4"
            autoPlay
            muted
            loop
            className="w-full h-full object-cover "
          />
          <h2 className=" text-xl font-semibold mt-4 text-black">Cinematic</h2>
          <button
            onClick={() => {
              setIsOpen(true);
              setImageName("/videos/cinematic_2.mp4");
            }}
            className=" p-2 w-full bg-[#28166F] font-semibold text-white rounded-md hover:brightness-110 transition-all"
          >
            Lihat
          </button>
        </div>
      </div>
      {isOpen &&
        createPortal(
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-white bg-opacity-50 p-2"
            onClick={() => {
              setIsOpen(false);
            }}
          >
            {imageName.includes("/images") ? (
              <Image
                src={imageName}
                width={600}
                className="rounded-md"
                height={600}
                alt={imageName}
              />
            ) : (
              <video
                src="/videos/cinematic_2.mp4"
                autoPlay
                muted
                loop
                className="w-fit h-fit object-cover rounded-md"
              />
            )}
          </div>,
          document.body
        )}
    </div>
  );
};

export default Gedung;
