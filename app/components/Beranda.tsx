import React from "react";

const Hero = () => {
  return (
    <div className="w-full h-screen relative" id="beranda">
      <video
        src="/videos/cinematic.mp4"
        autoPlay
        muted
        loop
        className="w-full h-full object-cover absolute"
      />

      <div className="relative w-full h-full flex flex-col gap-8 bg-black/40 items-center justify-center">
        <h1 className="text-white text-4xl text-center font-semibold">
          Metaverse SMKN 1 Cibinong
        </h1>

        <button className=" p-2 px-10 bg-[#75C5F0] text-white rounded-md hover:brightness-110 transition-all">
          Mainkan
        </button>
      </div>
    </div>
  );
};

export default Hero;
