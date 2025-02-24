import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Gedung = () => {
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
        <div
          data-aos="fade-up"
          data-aos-delay="0"
          className="relative p-6 w-full md:w-80 bg-white rounded-2xl shadow-lg flex flex-col items-center gap-4"
        >
          <div className="w-full h-48 overflow-hidden cursor-pointer">
            <img
              src="/images/6.jpg"
              alt="Gedung"
              className="h-full w-full object-cover rounded-lg transition-transform duration-300 hover:scale-125"
            />
          </div>
          <h2 className=" text-xl font-semibold mt-4 text-black">Gedung TKJ</h2>
          <button className=" p-2 w-full bg-[#28166F] font-semibold text-white rounded-md hover:brightness-110 transition-all">
            Lihat
          </button>
        </div>
        <div
          data-aos="fade-up"
          data-aos-delay="0"
          className="relative p-6 w-full md:w-80 bg-white rounded-2xl shadow-lg flex flex-col items-center gap-4"
        >
          <div className="w-full h-48 overflow-hidden cursor-pointer">
            <img
              src="/images/6.jpg"
              alt="Gedung"
              className="h-full w-full object-cover rounded-lg transition-transform duration-300 hover:scale-125"
            />
          </div>
          <h2 className=" text-xl font-semibold mt-4 text-black">Gedung TKJ</h2>
          <button className=" p-2 w-full bg-[#28166F] font-semibold text-white rounded-md hover:brightness-110 transition-all">
            Lihat
          </button>
        </div>
      </div>
    </div>
  );
};

export default Gedung;
